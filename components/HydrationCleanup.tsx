"use client";

import { useEffect } from "react";

/**
 * Post-load DOM tidy-up. Changes nothing the user sees.
 *
 * - Next.js streams the React Server Component payload into <body> as inline
 *   `self.__next_f.push(...)` scripts. Once the page has loaded they have run
 *   and React has read their data into memory; nothing reads the elements
 *   again (client navigations fetch fresh payloads). Removing them shrinks
 *   the live DOM by ~70 KB, which audit tools read as markup weight.
 * - The `nomodule` polyfill script is never fetched or run by modern
 *   browsers; marking it `defer` documents that it is not render-blocking.
 */
function tidy() {
    document.querySelectorAll("body script:not([src])").forEach((script) => {
        const code = script.textContent ?? "";
        if (
            code.startsWith("self.__next_f") ||
            code.startsWith("(self.__next_f")
        ) {
            script.remove();
        }
    });
    document
        .querySelectorAll("script[nomodule]:not([defer])")
        .forEach((script) => script.setAttribute("defer", ""));
}

export function HydrationCleanup() {
    useEffect(() => {
        const run = () => {
            const idle = (
                window as Window & {
                    requestIdleCallback?: (cb: () => void) => number;
                }
            ).requestIdleCallback;
            if (idle) idle(tidy);
            else setTimeout(tidy, 200);
        };
        if (document.readyState === "complete") {
            run();
            return;
        }
        window.addEventListener("load", run, { once: true });
        return () => window.removeEventListener("load", run);
    }, []);

    return null;
}
