import Script from "next/script";

/**
 * Google Analytics (gtag.js) loaded after hydration with an explicit
 * `async` attribute so it never blocks rendering.
 */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
    return (
        <>
            <Script
                id="ga-loader"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
                async
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
        </>
    );
}
