"use strict";var precacheConfig=[["/assets/add-btn.svg","51153d73c6ff5e493512b3115317485e"],["/assets/add_new.svg","409b4ae868d0223bd9df1fda3051a100"],["/assets/added.svg","8622139755e00bd7dd4ce8c403db239d"],["/assets/arrow.svg","cc4b3eb8fa68e0c12357ba1a403fd25b"],["/assets/favicon.ico","52094ea9c2e40b1779e983487f81ec0b"],["/assets/flexicon.svg","56704ba2bde17679983640113017cf58"],["/assets/okich.svg","0bddc51dcdf97fbc3ce1472bd978de5c"],["/assets/plus.svg","a07d9842f7de2e6dfda2903b0b423c54"],["/assets/r.svg","9f473931ed6972fb7d53feb35163cb71"],["/assets/startPageText.svg","3a5b160008aee7c45446d9081f8afc0e"],["/assets/style.css","c723e9e2a22da24e1cc10fd5624ed90a"],["/bundle.9565c.js","1736f2715f6798b1250236525429a5cf"],["/favicon.ico","52094ea9c2e40b1779e983487f81ec0b"],["/index.html","bd031a48f9cb66b72f993e4ce8f4e8a2"],["/manifest.json","0fb238b6548c22a35a12cd675d5678e8"],["/style.7f72c.css","7285444da53f3132bc8d14e083d97de9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],s=new URL(t,self.location),r=createCacheKey(s,hashParamName,n,!1);return[s.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var s=new Request(n,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});