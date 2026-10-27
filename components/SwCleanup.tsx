"use client";

import { useEffect } from "react";

/**
 * Service-worker cleanup.
 *
 * An old build registered a caching service worker. Because the browser
 * only re-checks the worker script on its own schedule (up to 24h), that
 * stale worker can keep serving dead cached assets even after sw.js was
 * deleted. This runs on every page load: it unregisters any worker still
 * present, deletes its cache storage, and reloads once so the tab renders
 * from the network.
 */
export function SwCleanup() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!("serviceWorker" in navigator)) return;

        let cancelled = false;

        navigator.serviceWorker
            .getRegistrations()
            .then((registrations) => {
                if (cancelled || registrations.length === 0) return;

                const reload = () => {
                    if (cancelled) return;
                    try {
                        // Guard against reload loops within this session.
                        if (!sessionStorage.getItem("sw-cleanup-reloaded")) {
                            sessionStorage.setItem("sw-cleanup-reloaded", "1");
                            window.location.reload();
                        }
                    } catch {
                        /* storage unavailable — leave reload off */
                    }
                };

                caches
                    .keys()
                    .then((keys) =>
                        Promise.all(keys.map((key) => caches.delete(key))),
                    )
                    .catch(() => undefined)
                    .then(() =>
                        Promise.all(
                            registrations.map((r) => r.unregister()),
                        ),
                    )
                    .then(reload)
                    .catch(reload);
            })
            .catch(() => undefined);

        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}
