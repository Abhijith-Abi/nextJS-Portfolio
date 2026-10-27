/**
 * Kill-switch service worker.
 *
 * An older build of this site registered a caching service worker.
 * Once installed, a worker whose script 404s can never be updated,
 * so browsers kept serving stale cached pages. This replacement
 * worker unregisters itself and purges every cache it can reach.
 */

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            // Delete every cache created by the old worker.
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));

            // Hand control back to the network and refresh open tabs.
            await self.registration.unregister();
            const clients = await self.clients.matchAll({
                type: "window",
                includeUncontrolled: true,
            });
            clients.forEach((client) => client.navigate(client.url));
        })(),
    );
});

// No fetch handler: all requests go straight to the network.
