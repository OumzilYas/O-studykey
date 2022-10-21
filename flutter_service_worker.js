'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fcd7881a5c7fe84c84bd3b99af70673e",
".git/config": "b41353680b1d9ce87b7bb3ca24cd5017",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0e3883509067f0192151cc0ad1321715",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e1571e8287d21641bbbae0ebe8de8de9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58a303f4d7ff681365a83063540563b0",
".git/logs/refs/heads/main": "58a303f4d7ff681365a83063540563b0",
".git/logs/refs/remotes/origin/HEAD": "c2bc0b82c208586960e895595853252d",
".git/logs/refs/remotes/origin/main": "44928dfa13852205207b3b11b39fbe9a",
".git/objects/02/94d9ce4122fef64c8f9c03f99601c8c1b6621e": "2df894a6d82976f85e0fad38f401e200",
".git/objects/03/6936bc5a3f83a6effdabff1dd6a99947d321e5": "88eb5d93edcea9c36974a9c95be573e0",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/3c/8306c984599ebd0aa96147d99e4ec083c5712b": "da3db8658d507e4a61c778713bfcf448",
".git/objects/46/7523667587fb491403b5702db1eb4a5c525104": "0648b8a14a9149254003264ffcbe7183",
".git/objects/57/b3223f3f9a832a427ac4b177b8a6e9b82c241c": "0a42ab45d5d22dc8f77a878e91d4b6b4",
".git/objects/6a/4f67653851d08893d8dc65a860ebaae750ad8b": "eb4baee8066bc84dd89f8a714b654e11",
".git/objects/8b/cba0144f554303e0a2be16390da36c1fe2b30f": "917aacc981e8d7c41beb2db89d15e7e6",
".git/objects/97/dc0058054f4a1f6c48c10244a8eb28318a9b9c": "aff2564989aa1f5f04415db8436b99e0",
".git/objects/98/743018fbaa6686650e39b31b8f14352afe4b29": "627766724c7c6f8c53cc0edc459b7c7b",
".git/objects/a6/da3cb4140f69ee94889acfef84ce5be9fbcd58": "e368ecc5e5efaed8d8da0e56fdd0fe88",
".git/objects/ca/5b485cc83de41e2cab82490b92e8898314c37c": "300a539518dc56d294ce9b1cd8d38c90",
".git/objects/ea/e579a47430f9bf4d8f0d0820a3bbea3f328b21": "933967fc07de7bdcc5a3836c4849bcc6",
".git/objects/f4/c625a6b3801d4277092ce56679e1b4c3491e7c": "45b4db24e67b3a044bf9fd91e82ccd99",
".git/objects/pack/pack-ceccf72c77fc7fce9c25867d48634fe48d26500c.idx": "690ee39172ec03fd07287e9fd6cb60c1",
".git/objects/pack/pack-ceccf72c77fc7fce9c25867d48634fe48d26500c.pack": "454b19b18a86b70094c480d7f9c6d7c1",
".git/packed-refs": "050122023b21aa7f06089bd96c23f2b5",
".git/refs/heads/main": "610624d13ea65ee93d0522cc6a253edd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "610624d13ea65ee93d0522cc6a253edd",
"assets/AssetManifest.json": "20bb04a859d0b65d6025a998af047e43",
"assets/assets/ic.png": "b0f1d7e0df1727d0c48b1f133ffdce87",
"assets/assets/ick.png": "c3817c441ea2cba43429c049bb3f4117",
"assets/assets/Logo.png": "9a55eb7bd9e7d9329859b437ffa4940d",
"assets/assets/QrCode.png": "b611124922adbfe1ea518755e034315d",
"assets/assets/teen.jpg": "a76e31f1709a5bf9d9428ccfb7faf363",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "80d8f72f7c8112d78007e9c03fa3f3fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/apple-touch-icon.png": "464deaf8e29d3ec08b3f1a0c8046ec3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ce9dcd60f0e5f1c1230cddf3459af50",
"/": "9ce9dcd60f0e5f1c1230cddf3459af50",
"main.dart.js": "a10e6880005b322add8f2d850c33f877",
"manifest.json": "f9efebfae522f14758c2618937ad4ea1",
"version.json": "bf7349d6c680962ccb90c2e581c9fb32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
