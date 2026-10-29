/**
 * Shared site facts used by metadata, JSON-LD and visible copy so they
 * never drift apart. Update SITE_UPDATED when homepage content changes.
 */
export const SITE_URL = "https://abisolutions.online";

/** First public release of the site (first commit). */
export const SITE_PUBLISHED = "2025-12-01";
/** Last meaningful homepage content update. */
export const SITE_UPDATED = "2026-10-29";

export const CONTACT = {
    email: "abhijithabhijith1999@gmail.com",
    phone: "+919961316468",
    phoneDisplay: "+91 99613 16468",
    whatsapp: "https://wa.me/919961316468",
    location: "Wayanad, Kerala, India",
} as const;

export const SAME_AS = [
    "https://github.com/Abhijith-Abi",
    "https://www.linkedin.com/in/abhijith-pa/",
];

export const SCHEMA_IDS = {
    website: `${SITE_URL}/#website`,
    person: `${SITE_URL}/#person`,
    organization: `${SITE_URL}/#organization`,
    localBusiness: `${SITE_URL}/#localbusiness`,
    homePage: `${SITE_URL}/#webpage`,
    homeBreadcrumb: `${SITE_URL}/#breadcrumb`,
    homeFaq: `${SITE_URL}/#faq`,
} as const;

/** Formats an ISO date (YYYY-MM-DD) for display, e.g. "October 28, 2026". */
export function formatSiteDate(iso: string): string {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
