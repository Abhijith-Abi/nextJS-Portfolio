import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";
import { CONTACT, SITE_URL } from "../../lib/site";

const UPDATED = "2026-10-28";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How Abi Solutions (abisolutions.online) collects, uses and protects the information you share through the contact form and site analytics.",
    alternates: { canonical: `${SITE_URL}/privacy` },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            intro="This policy explains what information abisolutions.online collects, why it is collected and how you can ask for it to be removed."
            updated={UPDATED}
        >
            <section aria-labelledby="who">
                <h2 id="who">Who runs this site</h2>
                <p>
                    This website is run by Abhijith P A, trading as Abi
                    Solutions, based in Wayanad, Kerala, India. For any privacy
                    question, email{" "}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
            </section>

            <section aria-labelledby="collect">
                <h2 id="collect">What is collected</h2>
                <ul>
                    <li>
                        <strong className="text-ink">Contact form.</strong> Your
                        name, email address and message, only when you send the
                        form.
                    </li>
                    <li>
                        <strong className="text-ink">Analytics.</strong> Google
                        Analytics records pages viewed, device and browser type,
                        approximate location and how you reached the site. It
                        uses cookies to do this.
                    </li>
                </ul>
            </section>

            <section aria-labelledby="use">
                <h2 id="use">How it is used</h2>
                <p>
                    Contact form details are used only to reply to you and to
                    discuss your project. Analytics data is used to understand
                    which pages are useful and to improve the site. Your
                    information is never sold.
                </p>
            </section>

            <section aria-labelledby="processors">
                <h2 id="processors">Services that handle your data</h2>
                <ul>
                    <li>
                        Google Firebase (Cloud Firestore) stores contact form
                        messages.
                    </li>
                    <li>
                        EmailJS delivers contact form messages by email and may
                        send you an automatic confirmation.
                    </li>
                    <li>Google Analytics measures site usage.</li>
                    <li>
                        WhatsApp, email and phone links open those services,
                        which follow their own privacy policies.
                    </li>
                </ul>
            </section>

            <section aria-labelledby="retention">
                <h2 id="retention">How long it is kept</h2>
                <p>
                    Messages are kept for as long as needed to handle your
                    enquiry and any project that follows. You can ask for them
                    to be deleted at any time.
                </p>
            </section>

            <section aria-labelledby="rights">
                <h2 id="rights">Your choices</h2>
                <p>
                    You can ask to see, correct or delete the information you
                    sent by emailing{" "}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. You
                    can block or delete analytics cookies in your browser
                    settings at any time.
                </p>
            </section>

            <section aria-labelledby="changes">
                <h2 id="changes">Changes to this policy</h2>
                <p>
                    If this policy changes, the new version will be posted on
                    this page with a new “last updated” date.
                </p>
            </section>
        </LegalPage>
    );
}
