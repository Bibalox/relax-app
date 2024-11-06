const cacheName = 'rainy-app'
const filesToCache = [
  '/audio/music-long.mp3',
  '/audio/music-short.mp3',
  '/audio/sound-effect-ending.mp3',
  '/audio/sound-effect-running.mp3'
]

self.addEventListener('install', e => {
  console.log('[Service Worker] Install')
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName)
      console.log('[Service Worker] Start caching')
      await cache.addAll(filesToCache)
      console.log('[Service Worker] Caching completed')
    })()
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request)
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`)
      if (r) {
        return r
      }
      const response = await fetch(e.request)
      const cache = await caches.open(cacheName)
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`)
      cache.put(e.request, response.clone())
      return response
    })()
  )
})