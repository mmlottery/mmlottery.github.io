importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d2f87c4158ff7a1aa39.js",
    "revision": "5497442c5697013eb9d7cd8a61b87798"
  },
  {
    "url": "/_nuxt/1834239fbd9485c0f9ac.js",
    "revision": "2bea84419346f5ae9f7dd757433de900"
  },
  {
    "url": "/_nuxt/4ab94b26cf10e067f1ce.js",
    "revision": "ba232290d53ca0a1adb2b69851b48fa6"
  },
  {
    "url": "/_nuxt/58637bfbebf484c92f5f.js",
    "revision": "8346e24af9b0e5bb5d8b6635042a424c"
  },
  {
    "url": "/_nuxt/c17186640e4575f9eaa3.js",
    "revision": "c8ceb15086f5ade064db504353dd67c7"
  }
], {
  "cacheId": "mmlottery",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





