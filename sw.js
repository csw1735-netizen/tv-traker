// 캐시를 사용하지 않고 항상 네트워크의 최신 데이터를 사용한다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(clients.claim()));
self.addEventListener("fetch", () => {});
