"use client";

import { useEffect, useMemo, useState } from "react";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

type ContactMessage = {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt?: Timestamp;
};

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_MSG_DASH_PASSWORD;

// helper to format date/time -> 11/12/2025 1:05 PM
function formatDateTime(createdAt?: Timestamp) {
    if (!createdAt) return "—";
    const d = createdAt.toDate();

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    if (hours === 0) hours = 12; // 0 -> 12 AM/PM

    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

export default function MessagesPage() {
    const [isAuthed, setIsAuthed] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);
    const [passwordInput, setPasswordInput] = useState("");

    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [fromDate, setFromDate] = useState<string>("");
    const [toDate, setToDate] = useState<string>("");

    // track which message is being deleted (for button state)
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("msg-dashboard-authed");
        if (stored === "true") {
            setIsAuthed(true);
        }
        setCheckingAuth(false);
    }, []);

    useEffect(() => {
        if (!isAuthed) return;

        const fetchMessages = async () => {
            try {
                setLoading(true);
                setError(null);

                const q = query(
                    collection(db, "contacts"),
                    orderBy("createdAt", "desc")
                );
                const snapshot = await getDocs(q);
                const data: ContactMessage[] = snapshot.docs.map((docSnap) => ({
                    id: docSnap.id,
                    ...(docSnap.data() as Omit<ContactMessage, "id">),
                }));

                setMessages(data);
            } catch (err) {
                console.error("Error loading messages:", err);
                setError("Failed to load messages.");
            } finally {
                setLoading(false);
            }
        };

        void fetchMessages();
    }, [isAuthed]);

    const filteredMessages = useMemo(() => {
        let result = [...messages];

        if (search.trim()) {
            const term = search.toLowerCase();
            result = result.filter(
                (m) =>
                    m.name.toLowerCase().includes(term) ||
                    m.email.toLowerCase().includes(term) ||
                    m.message.toLowerCase().includes(term)
            );
        }

        if (fromDate) {
            const from = new Date(fromDate);
            result = result.filter((m) => {
                if (!m.createdAt) return false;
                const d = m.createdAt.toDate();
                return d >= from;
            });
        }

        if (toDate) {
            const to = new Date(toDate);
            // Include entire day
            to.setHours(23, 59, 59, 999);
            result = result.filter((m) => {
                if (!m.createdAt) return false;
                const d = m.createdAt.toDate();
                return d <= to;
            });
        }

        return result;
    }, [messages, search, fromDate, toDate]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!ADMIN_PASSWORD) {
            setError("Dashboard password is not configured.");
            return;
        }
        if (passwordInput === ADMIN_PASSWORD) {
            setIsAuthed(true);
            if (typeof window !== "undefined") {
                window.localStorage.setItem("msg-dashboard-authed", "true");
            }
            setError(null);
        } else {
            setError("Incorrect password.");
        }
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this message?"
        );
        if (!confirmed) return;

        try {
            setDeletingId(id);
            setError(null);
            await deleteDoc(doc(db, "contacts", id));
            setMessages((prev) => prev.filter((m) => m.id !== id));
        } catch (err) {
            console.error("Error deleting message:", err);
            setError("Failed to delete message.");
        } finally {
            setDeletingId(null);
        }
    };

    if (checkingAuth) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-sm text-muted">Checking access…</p>
            </main>
        );
    }

    if (!isAuthed) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="card-surface w-full max-w-sm p-6 space-y-4">
                    <h1 className="text-lg font-semibold">
                        Messages Dashboard
                    </h1>
                    <p className="text-xs text-muted">
                        Enter the admin password to view contact form
                        submissions.
                    </p>
                    <form onSubmit={handleLogin} className="space-y-3">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-medium text-slate-200">
                                Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                                value={passwordInput}
                                onChange={(e) =>
                                    setPasswordInput(e.target.value)
                                }
                            />
                        </div>
                        {error && (
                            <p className="text-xs text-rose-400">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
                        >
                            Enter
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-10">
            <div className="container-width space-y-6">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Contact Messages
                        </h1>
                        <p className="text-xs text-muted">
                            Search and filter all messages sent from your
                            portfolio contact form.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            if (typeof window !== "undefined") {
                                window.localStorage.removeItem(
                                    "msg-dashboard-authed"
                                );
                            }
                            setIsAuthed(false);
                        }}
                        className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-accent hover:text-accent"
                    >
                        Log out
                    </button>
                </header>

                <section className="card-surface p-4 sm:p-5 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium text-slate-300">
                                Search
                            </label>
                            <input
                                type="text"
                                placeholder="Search name, email, or message…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-1.5 text-xs text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium text-slate-300">
                                From date
                            </label>
                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className="w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-1.5 text-xs text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium text-slate-300">
                                To date
                            </label>
                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="w-full rounded-lg border border-slate-800 bg-black/60 px-3 py-1.5 text-xs text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                            />
                        </div>
                    </div>

                    {error && <p className="text-xs text-rose-400">{error}</p>}

                    <div className="overflow-x-auto rounded-lg border border-slate-800/80">
                        <table className="min-w-full text-left text-xs">
                            <thead className="bg-slate-900/60 text-[11px] uppercase tracking-wide text-slate-400">
                                <tr>
                                    <th className="px-3 py-2.5 font-medium">
                                        Name
                                    </th>
                                    <th className="px-3 py-2.5 font-medium">
                                        Email
                                    </th>
                                    <th className="px-3 py-2.5 font-medium">
                                        Message
                                    </th>
                                    <th className="px-3 py-2.5 font-medium">
                                        Date
                                    </th>
                                    <th className="px-3 py-2.5 font-medium text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-3 py-4 text-center text-xs text-muted"
                                        >
                                            Loading messages…
                                        </td>
                                    </tr>
                                ) : filteredMessages.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-3 py-4 text-center text-xs text-muted"
                                        >
                                            No messages found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredMessages.map((m) => (
                                        <tr
                                            key={m.id}
                                            className="border-t border-slate-800/70 odd:bg-slate-950/20"
                                        >
                                            <td className="px-3 py-2 align-top text-slate-100">
                                                <div className="font-medium">
                                                    {m.name}
                                                </div>
                                            </td>
                                            <td className="px-3 py-2 align-top text-slate-300">
                                                <a
                                                    href={`mailto:${m.email}`}
                                                    className="hover:text-accent"
                                                >
                                                    {m.email}
                                                </a>
                                            </td>
                                            <td className="px-3 py-2 align-top text-slate-300 max-w-xs">
                                                <p className="line-clamp-3 whitespace-pre-wrap">
                                                    {m.message}
                                                </p>
                                            </td>
                                            <td className="px-3 py-2 align-top text-slate-400 whitespace-nowrap">
                                                {formatDateTime(m.createdAt)}
                                            </td>
                                            <td className="px-3 py-2 align-top text-right">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(m.id)
                                                    }
                                                    disabled={
                                                        deletingId === m.id
                                                    }
                                                    className="inline-flex items-center rounded-full border border-rose-500/60 px-3 py-1 text-[11px] font-medium text-rose-300 hover:bg-rose-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {deletingId === m.id
                                                        ? "Deleting…"
                                                        : "Delete"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}
