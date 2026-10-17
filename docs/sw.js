// Minimal service worker: lets browsers offer "Install / Add to Home Screen".
// It caches nothing, so players always get the latest version of the game.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* network as usual */ });
