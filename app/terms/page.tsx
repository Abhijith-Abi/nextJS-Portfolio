import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";
import { CONTACT, SITE_URL } from "../../lib/site";

const UPDATED = "2026-10-28";

export const metadata: Metadata = {
    title: "Terms of Use",
    description:
        "The terms for using abisolutions.online, the website of Abhijith P A and Abi Solutions.",
    alternates: { canonical: `${SITE_URL}/terms` },
    robots: { index: true, follow: true },
};

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms of Use"
            intro="By using abisolutions.online you agree to these terms. They are short and plain on purpose."
            updated={UPDATED}
        >
            <section aria-labelledby="content">
                <h2 id="content">Site content</h2>
                <p>
                    The text, design, photos and code samples on this site
                    belong to Abhijith P A (Abi Solutions) unless stated
                    otherwise. You may share links and short quotes with credit.
                    Please ask before reusing anything else.
                </p>
            </section>

            <section aria-labelledby="info">
                <h2 id="info">Information on this site</h2>
                <p>
                    Articles and project descriptions are shared for general
                    information. They are written with care but may not fit
                    your exact situation. Project work is covered by a separate
                    written agreement.
                </p>
            </section>

            <section aria-labelledby="links">
                <h2 id="links">Links to other sites</h2>
                <p>
                    This site links to client projects and other websites.
                    Those sites are run by others, and their own terms apply.
                </p>
            </section>

            <section aria-labelledby="use">
                <h2 id="use">Fair use</h2>
                <p>
                    Do not use the contact form or any other part of the site
                    to send spam, harmful code or unlawful content.
                </p>
            </section>

            <section aria-labelledby="law">
                <h2 id="law">Governing law</h2>
                <p>These terms are governed by the laws of India.</p>
            </section>

            <section aria-labelledby="contact">
                <h2 id="contact">Questions</h2>
                <p>
                    Email{" "}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with
                    any question about these terms.
                </p>
            </section>
        </LegalPage>
    );
}
