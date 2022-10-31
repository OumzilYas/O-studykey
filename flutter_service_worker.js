'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fcd7881a5c7fe84c84bd3b99af70673e",
".git/config": "b41353680b1d9ce87b7bb3ca24cd5017",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cdaa52f77bcab53bcae3825d62745caf",
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
".git/index": "f2141f3a52d2561a568906a2f3b45cb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff8c606476e1d456c65d2631779cbab2",
".git/logs/refs/heads/main": "ff8c606476e1d456c65d2631779cbab2",
".git/logs/refs/remotes/origin/HEAD": "f99194009ba43fb4dccadda2f82fb13b",
".git/logs/refs/remotes/origin/main": "39caaa01a89a17e38a1d47d66862f5c4",
".git/objects/02/94d9ce4122fef64c8f9c03f99601c8c1b6621e": "2df894a6d82976f85e0fad38f401e200",
".git/objects/03/6936bc5a3f83a6effdabff1dd6a99947d321e5": "88eb5d93edcea9c36974a9c95be573e0",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/10/6902bce01f6fcc5ad01fa8dac581af61cf3f02": "cc8e914133c268d1f6cc550ac6436288",
".git/objects/16/b5fa2864d033363b7ec1cf215406b94b840e0b": "d4250352d5eb979704a79546453d6842",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/8b2e3f12d469132232505ee3a6e9225a148f9f": "991666c9e21ae35e45cdf53cc52d6f6a",
".git/objects/2e/21c5e3a6f18013d2ed091c45957f705bd8ad88": "efd1ed20d46f7595b6400fa321bc132c",
".git/objects/36/f6c6e06d414fde8ea8fc6a66174fcbe0c13418": "77af03ea58ebf9c56f6822cb1aaa58ee",
".git/objects/3c/8306c984599ebd0aa96147d99e4ec083c5712b": "da3db8658d507e4a61c778713bfcf448",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/6cc4978321d8ce7a6201d491832f6c91441277": "38e413280c9c7679f3a618d21b476278",
".git/objects/46/7523667587fb491403b5702db1eb4a5c525104": "0648b8a14a9149254003264ffcbe7183",
".git/objects/4b/6f3d971c24599e03fc4cdbaafc2585955ed423": "963416baabf9537a6955768cdadca918",
".git/objects/54/f498577efc12005e02d0c91e7eb525a7f14294": "a495260e31d579706fe8002566adfc4e",
".git/objects/57/b3223f3f9a832a427ac4b177b8a6e9b82c241c": "0a42ab45d5d22dc8f77a878e91d4b6b4",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/63/0573d087b4d51e352090c6ea28e77ce8d46ca4": "83b388c4e2586acc1c92589b9fdf1732",
".git/objects/6a/4f67653851d08893d8dc65a860ebaae750ad8b": "eb4baee8066bc84dd89f8a714b654e11",
".git/objects/70/164e32178890183a024f80c18f445a4914d6e1": "857500b299f5d1daa530218278656689",
".git/objects/71/b9f85c9bea7a0a8162994665e33d134f79a430": "5a1cf090a59ee6228b7dbab1f216f90f",
".git/objects/74/02c668f6feeb5430cc7dc429ad1a333af37dfb": "bce10e574d31eee6d5e7f40bc94d42dc",
".git/objects/75/65fab53ed7c7fa54404ae16d3d639263a9f859": "f98b2f80e563186d32c2114a235cec1f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/d0c49e35beafa53b7a8da6f9f2c6885a815408": "82a3a32172d628fbdc6954c84db3ff00",
".git/objects/83/78ca8f97672d729656730dff71787b7e75d1cf": "6be582d4a90abfc8594fe7793a737078",
".git/objects/8a/527b386e781778ebe3bb5374b0f4999ad75f2c": "f6c75bbc1476ef69acd1e36ba117d6a6",
".git/objects/8b/cba0144f554303e0a2be16390da36c1fe2b30f": "917aacc981e8d7c41beb2db89d15e7e6",
".git/objects/8c/35c5adfae8920e993204df6d5bd79982b0d5ba": "02c621cf59467663de01d0441528903b",
".git/objects/8d/3ab80854d3a4e2336039f14b2268271e0f4fdb": "365a6fc6ed144a60cd80c49a88feb1fd",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/dc0058054f4a1f6c48c10244a8eb28318a9b9c": "aff2564989aa1f5f04415db8436b99e0",
".git/objects/98/5a4bad86fb49e4f0ec5896d8bfb15bb066b5b1": "de1ecd549b25a4355a2815cd296cd54a",
".git/objects/98/743018fbaa6686650e39b31b8f14352afe4b29": "627766724c7c6f8c53cc0edc459b7c7b",
".git/objects/99/8ea0a63df14d412c2c798f94d28bff3a881a43": "db7f89b8e19d4053e3b3d4c9507f28c2",
".git/objects/9e/fcddd84c4b4a2f03c83e8263d5fac8b565c0ef": "c1372eb4249e182208e3fed9b1fe6ef5",
".git/objects/a1/a5aca9afde34b89c992ed2f1488165af5814ec": "bc93cc075cfb654a05df05030d07c409",
".git/objects/a1/aa00a2d341c78ae384abfee090f6578a71ac5a": "42477e14740307baa03d8bbb83a8a747",
".git/objects/a6/9faa101ccc9fec2bffe25b72c0533772ee40b1": "ceaebd4d70407c3e215bbf7c258502b1",
".git/objects/a6/da3cb4140f69ee94889acfef84ce5be9fbcd58": "e368ecc5e5efaed8d8da0e56fdd0fe88",
".git/objects/b0/313cbcb93c3724ec406407810ce13cb00acbb4": "b6560ded1629bb68a783cfe8d8d11e53",
".git/objects/c3/721e007eba56d4d543ea62198afc3382c07e5e": "e5b4f6a4796320aace58cd2f2f2cae20",
".git/objects/c7/a221a6473fa50e0cdb68f1c992f72117337dd4": "9cd4a8de69f6aae4470d5bf661e040b3",
".git/objects/c7/c688744960a42067a5c4f6fc4b6012f65d8667": "23fd8496497c3cb8b3e103f084453957",
".git/objects/ca/5b485cc83de41e2cab82490b92e8898314c37c": "300a539518dc56d294ce9b1cd8d38c90",
".git/objects/ca/c56aad38a73bdbba2e259874b33c9c2164a8a7": "18c980b68edc9e62119a57cf3915f81f",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/3783c4af5a8661e513564a44b5cd3ac01b31c4": "4872eb8522b474711079a9fbbe8087b0",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d8/65026952e5a905ff9de80ebfa04bd6c5f9cf06": "e739d63e35b0357fc34455555d5a4440",
".git/objects/da/f20d39285609f24fd02cf38f941d95f6cc46f2": "5ba4c83731b50b0518de39539f6c8404",
".git/objects/db/61aa7f222491d7fcbbc3aa69543f026742b025": "9d1d921e17d7f1fd0662aa05105adba4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/ea/68f0a2031b6b664b004c991b859180e28c76f6": "0298d62ccddf3ec7ead43c6290cf191d",
".git/objects/ea/e579a47430f9bf4d8f0d0820a3bbea3f328b21": "933967fc07de7bdcc5a3836c4849bcc6",
".git/objects/f0/e3e8c8370837ba0e55d2f1f2b2928c61bd9c5b": "5b95e12dbfa1e970689ab16921f134e7",
".git/objects/f4/c625a6b3801d4277092ce56679e1b4c3491e7c": "45b4db24e67b3a044bf9fd91e82ccd99",
".git/objects/fb/edfb8e575f2eba67e7d90348af8cbe90c3c3da": "b049b16f4576a13849a18e7a99174c42",
".git/objects/fe/66930a964917d6626920960655cc24f644c9f9": "9eb665558514aee8b10a1f0bd2e42677",
".git/objects/pack/pack-ceccf72c77fc7fce9c25867d48634fe48d26500c.idx": "690ee39172ec03fd07287e9fd6cb60c1",
".git/objects/pack/pack-ceccf72c77fc7fce9c25867d48634fe48d26500c.pack": "454b19b18a86b70094c480d7f9c6d7c1",
".git/packed-refs": "050122023b21aa7f06089bd96c23f2b5",
".git/refs/heads/main": "fd893ed88b4bf6c24e9136503c9c2be2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fd893ed88b4bf6c24e9136503c9c2be2",
"assets/AssetManifest.json": "20bb04a859d0b65d6025a998af047e43",
"assets/assets/ic.png": "b0f1d7e0df1727d0c48b1f133ffdce87",
"assets/assets/ick.png": "c3817c441ea2cba43429c049bb3f4117",
"assets/assets/Logo.png": "9a55eb7bd9e7d9329859b437ffa4940d",
"assets/assets/QrCode.png": "b611124922adbfe1ea518755e034315d",
"assets/assets/teen.jpg": "a76e31f1709a5bf9d9428ccfb7faf363",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "85c69463e3a66b6d4be2391f9f05cc44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/apple-touch-icon.png": "464deaf8e29d3ec08b3f1a0c8046ec3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97fdd3899df116d5029631dee81e10a4",
"/": "97fdd3899df116d5029631dee81e10a4",
"main.dart.js": "c8121aef58c7f73b7d82425a0eb1f762",
"manifest.json": "f9efebfae522f14758c2618937ad4ea1",
"version.json": "bf7349d6c680962ccb90c2e581c9fb32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
