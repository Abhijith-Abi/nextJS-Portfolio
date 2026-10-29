import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "./firebase";

export type OutgoingMessage = {
    name: string;
    email: string;
    message: string;
    /** Email subject, e.g. "New Contact Form Submission". */
    subject: string;
};

/**
 * Sends a visitor message by EmailJS (with an optional auto-reply) and stores
 * a copy in Firestore. Throws when the message could not be delivered.
 * Shared by the contact form and the FAQ "ask a question" form.
 */
export async function sendVisitorMessage({
    name,
    email,
    message,
    subject,
}: OutgoingMessage): Promise<void> {
    let emailSent = false;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name,
                    from_name: name,
                    user_name: name,
                    email,
                    from_email: email,
                    user_email: email,
                    subject,
                    message,
                },
                publicKey,
            );
            emailSent = true;
            if (autoReplyTemplateId) {
                emailjs
                    .send(
                        serviceId,
                        autoReplyTemplateId,
                        {
                            to_name: name,
                            to_email: email,
                            name,
                            email,
                            subject: "Thank you for contacting me",
                            message,
                        },
                        publicKey,
                    )
                    .catch((err) => console.warn("Auto-reply failed:", err));
            }
        } catch (emailError) {
            console.error("EmailJS Error:", emailError);
            throw new Error("Failed to send email.");
        }
    }

    try {
        // Same document shape as before so existing Firestore rules still pass.
        await addDoc(collection(db, "contacts"), {
            name,
            email,
            message,
            createdAt: serverTimestamp(),
        });
    } catch (firebaseError) {
        console.error("Firebase Error:", firebaseError);
        if (!emailSent && !serviceId) {
            throw new Error("Failed to save message.");
        }
    }
}
