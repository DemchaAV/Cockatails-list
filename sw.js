// Service Worker for Cocktail List PWA
const SW_VERSION = (() => {
  try {
    const url = new URL(self.location.href);
    return url.searchParams.get('v') || 'dev';
  } catch (_) {
    return 'dev';
  }
})();

const CACHE_NAME = 'cocktails-v' + SW_VERSION;
const urlsToCache = [
  './',
  './index.html',
  './mobile_cocktails.html',
  './cocktail_builder.html',
  './cocktail_trainer.html',
  './styles.css',
  './manifest.json',
  './data/loader.js',
  './data/config.js',
  './data/combiner.js',
  './data/categories/signature.js',
  './data/categories/classic.js',
  './data/categories/cv.js',
  './data/categories/exam.js',
  './data/categories/non-alcoholic.js'
];

function isDataRequest(requestUrl) {
  return (
    requestUrl.pathname.endsWith('/manifest.json') ||
    requestUrl.pathname.endsWith('/data/config.js') ||
    requestUrl.pathname.includes('/data/categories/')
  );
}

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - use network-first for manifest/config/category data,
// cache-first for the rest of the static shell.
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  let requestUrl;
  try {
    requestUrl = new URL(event.request.url);
  } catch (_) {
    return;
  }

  if (isDataRequest(requestUrl)) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response (allow both 'basic' and 'cors' for CDN)
          if (!response || response.status !== 200) {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache the new resource (including CDN)
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // If both cache and network fail
        console.log('Service Worker: Fetch failed, offline');
      })
  );
});
