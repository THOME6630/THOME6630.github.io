'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d803961a30235effc5fdc3df98b52d33",
"assets/AssetManifest.bin.json": "69d7d96360ec41f908fe5fc6d0d1c529",
"assets/AssetManifest.json": "691d500de774a3b4a7c464bf0186efd7",
"assets/assets/fonts/THSarabunNew-Bold.ttf": "4a12003b4ffef670c25aa8065100befe",
"assets/assets/fonts/THSarabunNew-BoldItalic.ttf": "54fe4a5916f7abddd9d08e183f811870",
"assets/assets/fonts/THSarabunNew-Italic.ttf": "ad70682ea186a350b733876f781529a3",
"assets/assets/fonts/THSarabunNew.ttf": "4c9a6e3d203c26982281fdda16ab5712",
"assets/assets/images/%25E0%25B8%2595.%25E0%25B8%2588%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%25AA%25E0%25B8%258A%25E0%25B8%25B1%25E0%25B8%25A2logo-nobg.png": "29143c1254f86a86c5da204c691f24b0",
"assets/assets/images/%25E0%25B8%2595.%25E0%25B8%2588%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%25AA%25E0%25B8%258A%25E0%25B8%25B1%25E0%25B8%25A2logo.png": "eb7a1cca1cd9622d98cf868dcd0cee62",
"assets/assets/images/%25E0%25B8%2595.%25E0%25B8%2595%25E0%25B8%25A3%25E0%25B8%25A7%25E0%25B8%2588%25E0%25B8%259A%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%2599%2520png-02.png": "61e4ef0d13ceba3246aa3d1a6ca6e634",
"assets/assets/images/google-icon.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/IDCardBG.png": "968b8fd072a99975e711bebc59bec214",
"assets/assets/images/logo-01-nobg.png": "0a2064e1e767c4b38a8c446c8341b036",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "abb7192840a9adbfe0c8272355a848fe",
"assets/NOTICES": "f2f6639bdba553819086e20f972d7e06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "58b00dab40b4c830982e66bb983e5c21",
"firebase-messaging-sw.js": "34d004e8b2b1544775e207c1248e74d1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c5bb1522cbedc1fd47fe35bce08c1aa0",
"icons/default/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/default/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/default/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/default/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/default/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "5397e2c9843d23b059523d0047a07bd2",
"icons/Icon-512.png": "d96603ede03af6ae70780e2dbfbab32f",
"icons/Icon-maskable-192.png": "d96603ede03af6ae70780e2dbfbab32f",
"icons/Icon-maskable-512.png": "5397e2c9843d23b059523d0047a07bd2",
"index.html": "b07c942b3e8c126ec919547a6c6b8870",
"/": "b07c942b3e8c126ec919547a6c6b8870",
"main.dart.js": "f5327469cff37c9c4491cfd870c7b1d2",
"manifest.json": "79c2721e33354ac765b2e66ea7e5b9bb",
"version.json": "c1ce708295f628c0c0f47b6b5c21d690"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
