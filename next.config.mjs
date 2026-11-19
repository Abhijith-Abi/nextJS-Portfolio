/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 31536000,
    },
    async redirects() {
        return [
            // Old domain 301 redirects for Google Search Console migration
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "abisolutions.online",
                    },
                ],
                destination: "https://abisolutions.in/:path*",
                permanent: true,
            },
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.abisolutions.online",
                    },
                ],
                destination: "https://abisolutions.in/:path*",
                permanent: true,
            },
            {
                source: "/developer-calicut",
                destination: "/developer-kozhikode",
                permanent: true,
            },
            {
                source: "/developer-trivandrum",
                destination: "/developer-thiruvananthapuram",
                permanent: true,
            },
            {
                source: "/developer-ernakulam",
                destination: "/developer-kochi",
                permanent: true,
            },
            {
                source: "/locations/calicut",
                destination: "/locations/kozhikode",
                permanent: true,
            },
            {
                source: "/locations/trivandrum",
                destination: "/locations/thiruvananthapuram",
                permanent: true,
            },
            {
                source: "/locations/ernakulam",
                destination: "/locations/kochi",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
