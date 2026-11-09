import Script from "next/script";

interface PreviewWidgetProps {
    projectKey?: string;
}

const DEFAULT_PROJECT_KEY = "pj_fd07d0dc7ee345eb855e";

export function PreviewWidget({
    projectKey = process.env.NEXT_PUBLIC_PREVIEW_PROJECT_KEY || DEFAULT_PROJECT_KEY,
}: PreviewWidgetProps) {
    if (!projectKey) return null;

    return (
        <Script
            id="preview-widget"
            src="https://preview.abisolutions.online/widget.js"
            data-project-key={projectKey}
            strategy="afterInteractive"
        />
    );
}

