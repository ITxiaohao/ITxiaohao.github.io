/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ba3a1c1a92146e97cb2cbfe702074b6"
  },
  {
    "url": "about/index.html",
    "revision": "6147c51345385ba85f710e61910899e2"
  },
  {
    "url": "assets/css/0.styles.51ebd7cf.css",
    "revision": "7c723bae4995cb18aa782f84a70308a8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.1aad3b85.js",
    "revision": "96fe7c30922a1742e8b1bd39fe870ae7"
  },
  {
    "url": "assets/js/10.60329149.js",
    "revision": "dc68e27a768cb98ab871e3f7fc32ba4a"
  },
  {
    "url": "assets/js/11.4905186a.js",
    "revision": "73ce08b9344ec5c87edc551311990515"
  },
  {
    "url": "assets/js/12.4c878b9f.js",
    "revision": "6c0bf133e21aad4008dc50f3f3dbca91"
  },
  {
    "url": "assets/js/13.6ed0f866.js",
    "revision": "9e93b16d6b657f50688c88e85fa62d3d"
  },
  {
    "url": "assets/js/14.0cab1bc2.js",
    "revision": "8d72049f2777c89e20e49497f395aa7b"
  },
  {
    "url": "assets/js/15.a951ddde.js",
    "revision": "c43528fdc9c274547b21e85e64d25680"
  },
  {
    "url": "assets/js/16.2d0371a2.js",
    "revision": "07dbafb75f5aafab06fecfea55bf6ac4"
  },
  {
    "url": "assets/js/17.33d19c6c.js",
    "revision": "5d93ebc7e26add4fd0338123365559ed"
  },
  {
    "url": "assets/js/18.bd5fb92a.js",
    "revision": "520ac0a712e8fbc26aab44c5ff03d926"
  },
  {
    "url": "assets/js/19.3c8c7028.js",
    "revision": "b6f0f0745895cbde24db09eeddf7cb16"
  },
  {
    "url": "assets/js/20.127ad9b5.js",
    "revision": "f923518ca6d1c1fabd29cd48a8c065aa"
  },
  {
    "url": "assets/js/21.b08d82b3.js",
    "revision": "4120b20a53a887088fd8aa5de46c2cb2"
  },
  {
    "url": "assets/js/22.6553652d.js",
    "revision": "ece5b8dfd73da725deac92efdeb7fea5"
  },
  {
    "url": "assets/js/23.eb606d89.js",
    "revision": "eea11281db32be9857f82b6061c62d11"
  },
  {
    "url": "assets/js/24.cac01da9.js",
    "revision": "551880afb208d332b4ec530eaec5cd2f"
  },
  {
    "url": "assets/js/25.980746f0.js",
    "revision": "24a58aa0484e09f27055d47ebb0b0c14"
  },
  {
    "url": "assets/js/26.5a746019.js",
    "revision": "3cfe1667013d1523127fe8ae6baecc55"
  },
  {
    "url": "assets/js/27.f504e96f.js",
    "revision": "9d13532bcabf03ba4c8331330be1f806"
  },
  {
    "url": "assets/js/28.a2c1002f.js",
    "revision": "12626b10f79821873ad8eefbbd29023a"
  },
  {
    "url": "assets/js/29.165f8d8a.js",
    "revision": "3f077b7a0ed4c4a064bb3c7deb00cad7"
  },
  {
    "url": "assets/js/3.e9dee2aa.js",
    "revision": "8f0fa00c828d1f38c2fd08ba527f4c73"
  },
  {
    "url": "assets/js/30.b79f2d21.js",
    "revision": "9fb93bea730eccd66617ae2cdccbfad2"
  },
  {
    "url": "assets/js/31.9c21b60e.js",
    "revision": "efbeeceb4b5b7f5b72b2698d0e0d1496"
  },
  {
    "url": "assets/js/32.2332e88a.js",
    "revision": "f08d2ab9a2177345c796b4a9713957d2"
  },
  {
    "url": "assets/js/33.bf562a06.js",
    "revision": "2a54b7ea30b5bccc57ad1d4340d52bec"
  },
  {
    "url": "assets/js/34.06a03999.js",
    "revision": "b4baff9855514357d3e38909dbf31262"
  },
  {
    "url": "assets/js/35.f65501a3.js",
    "revision": "ecb93bd6200ca6b1ba993e257c921d8b"
  },
  {
    "url": "assets/js/36.14a16865.js",
    "revision": "cd6386d882db093bde275000708c128a"
  },
  {
    "url": "assets/js/37.54f68325.js",
    "revision": "c32583fa52b0ecd039dc65bfb84e8c3e"
  },
  {
    "url": "assets/js/38.a084f098.js",
    "revision": "59f1b3f093caf51247cd3347bddc1c65"
  },
  {
    "url": "assets/js/39.2799a754.js",
    "revision": "efcb2ef5beb35190d6c5c29522e8626d"
  },
  {
    "url": "assets/js/4.bcec1784.js",
    "revision": "52c206516b48082d7ff4b8e2454b18db"
  },
  {
    "url": "assets/js/40.5008478f.js",
    "revision": "15006922fdda2293b88bb3ed4e149d07"
  },
  {
    "url": "assets/js/41.b682ee7e.js",
    "revision": "4fe85b067f2850ca24f0e5297a68793a"
  },
  {
    "url": "assets/js/42.ed01a32b.js",
    "revision": "f817f006059b7d20c9f1ba76b36ff996"
  },
  {
    "url": "assets/js/43.d5902ae3.js",
    "revision": "266b2eadc385a5b125fc4c5d5c7a0e0a"
  },
  {
    "url": "assets/js/44.6fdc3551.js",
    "revision": "97f5168d6402a948b171a31b69ae01b4"
  },
  {
    "url": "assets/js/45.8f1678ba.js",
    "revision": "04039375ff1fbf2b5e6b3701b7b1efd7"
  },
  {
    "url": "assets/js/46.e4cbd687.js",
    "revision": "333abb97f459600b9e2adba48a10eda8"
  },
  {
    "url": "assets/js/47.658bad1a.js",
    "revision": "df7b2400b7d97bd6f65fb6ac243e8279"
  },
  {
    "url": "assets/js/48.2bf8bee7.js",
    "revision": "639f1087046a39476118d618a4a99f7d"
  },
  {
    "url": "assets/js/49.58569ed6.js",
    "revision": "e576790698850797a35f7352d00f3ef6"
  },
  {
    "url": "assets/js/5.2857920d.js",
    "revision": "f83348bd494ef65d9aac2a260f0b07bc"
  },
  {
    "url": "assets/js/50.c31053fc.js",
    "revision": "3230f665605b0f7a7dbe2c0b4283107d"
  },
  {
    "url": "assets/js/51.edf0b658.js",
    "revision": "d4f84922bfa3af663aa8d16af072617d"
  },
  {
    "url": "assets/js/52.785c1e02.js",
    "revision": "12eba298ac80c4dc4d1eb29bc70bad05"
  },
  {
    "url": "assets/js/53.9bb683a8.js",
    "revision": "64b13e78702d0f9dd99648c22a59ba66"
  },
  {
    "url": "assets/js/54.5305906b.js",
    "revision": "cdf65d684a5052d7f47832a89e2589b8"
  },
  {
    "url": "assets/js/55.f8da4ada.js",
    "revision": "759f7d7ae4df2d77cf48606d04f032ac"
  },
  {
    "url": "assets/js/56.bb312b8c.js",
    "revision": "7b958c9bb1d0f3bfb5afd9dff108c8b6"
  },
  {
    "url": "assets/js/57.d5f26811.js",
    "revision": "379c33a7a8365f68f8308c6f071c6951"
  },
  {
    "url": "assets/js/58.10f446b4.js",
    "revision": "809fc906d0f81c9172250026df4b4c77"
  },
  {
    "url": "assets/js/59.096b98d6.js",
    "revision": "e2927410febeae11152918fd5776dd5e"
  },
  {
    "url": "assets/js/6.eb9992b1.js",
    "revision": "1e7c317a390ce525b9c5203c739d3207"
  },
  {
    "url": "assets/js/60.e5ba9d70.js",
    "revision": "c83091da3f0abf252f35d3867e57825e"
  },
  {
    "url": "assets/js/61.8fe07b9d.js",
    "revision": "bf7cb0b40345dc4aae2d408d07146519"
  },
  {
    "url": "assets/js/62.92d82ce6.js",
    "revision": "891edef4cda737ad5b3447275133163b"
  },
  {
    "url": "assets/js/63.38a32050.js",
    "revision": "d7293208098fe1306f4be53c6281190a"
  },
  {
    "url": "assets/js/64.6837f550.js",
    "revision": "4e8334257fa6958eead2181ee93c49da"
  },
  {
    "url": "assets/js/65.ee3b0b2b.js",
    "revision": "5d045d636b8b84caf88f1faf08a399d2"
  },
  {
    "url": "assets/js/66.e30fc174.js",
    "revision": "f77a8c47a152c056c8d217ee8890dbd1"
  },
  {
    "url": "assets/js/67.873453c0.js",
    "revision": "d2c3f9e15afe08408646e89673faf462"
  },
  {
    "url": "assets/js/68.5303c4e8.js",
    "revision": "d7ddd86f3dd405dce3e28e060f2dfecb"
  },
  {
    "url": "assets/js/69.7e65c4dd.js",
    "revision": "459009445e564d30e7ae66b35899233d"
  },
  {
    "url": "assets/js/7.35bd0fa8.js",
    "revision": "d69af6db2eca5d79e6ef15d10012fc54"
  },
  {
    "url": "assets/js/70.24896845.js",
    "revision": "9573e5a8b3f45221f4ae543e4d805308"
  },
  {
    "url": "assets/js/71.8d75e004.js",
    "revision": "10394eae2915872f105fb4a5f1198457"
  },
  {
    "url": "assets/js/72.e6a29bca.js",
    "revision": "78ed260f9a9e67652bb2c38725dc1b86"
  },
  {
    "url": "assets/js/73.d018dc7b.js",
    "revision": "79b6ac4f4b397c52911aa881fe00e36a"
  },
  {
    "url": "assets/js/74.a7d057bb.js",
    "revision": "6f4009cd04374f628035880678f57c78"
  },
  {
    "url": "assets/js/75.52b41281.js",
    "revision": "78abf1038adc7e87f123e41a17a52961"
  },
  {
    "url": "assets/js/76.a061b049.js",
    "revision": "d41ba65f75125cb21f632e10fa744c86"
  },
  {
    "url": "assets/js/77.1917a64d.js",
    "revision": "2d432cae8d3bdd9606af364386f5a7e3"
  },
  {
    "url": "assets/js/78.825da578.js",
    "revision": "3b1ee77eea34c59485acef40d460bb54"
  },
  {
    "url": "assets/js/79.2ff2af6e.js",
    "revision": "ef937b1256c04f8712dc2ed3e7067e21"
  },
  {
    "url": "assets/js/8.8dec4724.js",
    "revision": "870089c43a0e59592b61016274fd163c"
  },
  {
    "url": "assets/js/80.7b97c528.js",
    "revision": "1ecb98064ea75a315904f4aa2ead579c"
  },
  {
    "url": "assets/js/81.add216b7.js",
    "revision": "d31c9f3021453081a8556745b1e0150b"
  },
  {
    "url": "assets/js/82.cd799a9b.js",
    "revision": "958d7f4050c905a3ee3883cacd0f2330"
  },
  {
    "url": "assets/js/83.fbb36c37.js",
    "revision": "b8c8978424f943c9d2c036caab95f20f"
  },
  {
    "url": "assets/js/84.fc56d305.js",
    "revision": "a3933224028db809825e5a839e9ccd69"
  },
  {
    "url": "assets/js/85.62a02b8b.js",
    "revision": "859ed66c2b378fc9debdc3ebc612defa"
  },
  {
    "url": "assets/js/86.32727df9.js",
    "revision": "55c1c45e6e51c2f0e4597db76882cb55"
  },
  {
    "url": "assets/js/87.f77ac1cd.js",
    "revision": "c9a9790802d80c8e0d3a90cb375e5a80"
  },
  {
    "url": "assets/js/88.3abfb32b.js",
    "revision": "65bafca0e89d570d1ee25aa2b961440d"
  },
  {
    "url": "assets/js/89.fc83511a.js",
    "revision": "27850b3c45836b5115f1c8afd5ff5fb6"
  },
  {
    "url": "assets/js/9.0a3eaac2.js",
    "revision": "908a03c81ee607b576b3d478b5123d61"
  },
  {
    "url": "assets/js/90.058619a3.js",
    "revision": "96804f2ec73699be774f838dbe98090a"
  },
  {
    "url": "assets/js/91.93215a1d.js",
    "revision": "c753d04aa86af940c112005fc54a1b23"
  },
  {
    "url": "assets/js/app.af8d82aa.js",
    "revision": "664b55790eb538cd612b54b9c4c952a9"
  },
  {
    "url": "avatar.jpg",
    "revision": "fff4e688c3963420942f17897473d19a"
  },
  {
    "url": "categories/index.html",
    "revision": "8d979e44235f295b26cc1d8a63972a5d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7edcfe544fc717115d162097b7a05476"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "0cb02a96b49a1a983026474ceaffd3b5"
  },
  {
    "url": "categories/Webpack/page/2/index.html",
    "revision": "cd302af7c771108f72e2fdb7e54222d3"
  },
  {
    "url": "categories/Webpack/page/3/index.html",
    "revision": "58fa01abb3154b164d7536d0fdec0869"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "d15655cdfe76350c62083e0efa0f2dec"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "cc7ce76807e401b1ffae1ea987a4d003"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "b880283538e8844fef5f733327c31d9f"
  },
  {
    "url": "categories/自动化测试/index.html",
    "revision": "8c4bb2729092bcd90bffe4dc0cb9b75c"
  },
  {
    "url": "categories/自动化测试/page/2/index.html",
    "revision": "f15369e7a7f9635a51396b3263baf472"
  },
  {
    "url": "categories/部署/index.html",
    "revision": "ded405664d992bb163683898bc4852b4"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "e2077d99690ef6f1e93d64dfebf2b965"
  },
  {
    "url": "docs/NodeJS/Koa/验证与授权.html",
    "revision": "5df42ea7517286f4bd88540a53612d2a"
  },
  {
    "url": "guide/index.html",
    "revision": "ffefa29a06cd0b411dbeaf3ebf059cba"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "64f1cb67105d33eb5680ddd354137acb"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "ca51d2a8bcd1b36430b4c2332d1e26ce"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "89392720a0d368f1be79c3fdbef32a8e"
  },
  {
    "url": "index.html",
    "revision": "d74fffc03577bf80897015f524d4f2f5"
  },
  {
    "url": "passages/automated-testing-learn-introduction/index.html",
    "revision": "10718365df11900229e91f8c9f1e5ced"
  },
  {
    "url": "passages/Chrome-Extension/index.html",
    "revision": "c1bb7053d2cc5e041ffbbcfeb9cde9c5"
  },
  {
    "url": "passages/data-structures-introduction/index.html",
    "revision": "c84e22a5c6edbf6c9ff0c32b62637ea2"
  },
  {
    "url": "passages/data-structures-LinkedList/index.html",
    "revision": "d0054fd080cf1303faae1ac9764f6f2f"
  },
  {
    "url": "passages/es6-promise/index.html",
    "revision": "75b74a49dbcc312ce6856d89e5eeec00"
  },
  {
    "url": "passages/es6-proxy/index.html",
    "revision": "89b858b669ecf6ea96bae308d3ca49b6"
  },
  {
    "url": "passages/git-commit/index.html",
    "revision": "5f70a5e2643872ace1d70933c159e602"
  },
  {
    "url": "passages/git-tag/index.html",
    "revision": "83045a40e22ec8c473d62ba9346a9400"
  },
  {
    "url": "passages/javascript-first/index.html",
    "revision": "1062ad7eabb3547512707a0d6182b525"
  },
  {
    "url": "passages/LeetCode-implement-strstr/index.html",
    "revision": "6bf09642521f9a74eeaf816d14153479"
  },
  {
    "url": "passages/LeetCode-introduction/index.html",
    "revision": "29b7509a7c8a9f73328454508542888a"
  },
  {
    "url": "passages/LeetCode-length-of-last-word/index.html",
    "revision": "8851eeab4924db63e2343b3b49a2001a"
  },
  {
    "url": "passages/LeetCode-longest-common-prefix/index.html",
    "revision": "35d86d0e84d8bc9f856b1775b85847a6"
  },
  {
    "url": "passages/LeetCode-merge-two-sorted-lists/index.html",
    "revision": "7dd99c9c3cb649f28f8b785697ab6248"
  },
  {
    "url": "passages/LeetCode-palindrome-number/index.html",
    "revision": "fa0b74f2f4a79b65fc9b958b045d81f0"
  },
  {
    "url": "passages/LeetCode-plus-one/index.html",
    "revision": "3c55e694bfb634671681ef4905209f6f"
  },
  {
    "url": "passages/LeetCode-remove-duplicates-from-sorted-array/index.html",
    "revision": "1b79755f3d94025fc6cf940cadefef2c"
  },
  {
    "url": "passages/LeetCode-remove-element/index.html",
    "revision": "ce02b89ec3e561081d43861ef8151e83"
  },
  {
    "url": "passages/LeetCode-reverse-integer/index.html",
    "revision": "6fed68497bea7d6368664b7f491ceb44"
  },
  {
    "url": "passages/LeetCode-roman-to-integer/index.html",
    "revision": "e868246ae199d373c1f9e47d44448b3d"
  },
  {
    "url": "passages/LeetCode-search-insert-position/index.html",
    "revision": "eb00d1d7d3c14044d9aa83e0d1c27014"
  },
  {
    "url": "passages/LeetCode-tow-sums/index.html",
    "revision": "a5367510fed16d2dcd0bb359d0ad437d"
  },
  {
    "url": "passages/LeetCode-valid-parentheses/index.html",
    "revision": "6391f7a7dacfa31cc3bb71f08d0a82e4"
  },
  {
    "url": "passages/lottie-web/index.html",
    "revision": "8ea6eb20552d024c62a29ecf771eb24e"
  },
  {
    "url": "passages/miniprogram-images-upload/index.html",
    "revision": "f88d75bc023df3f10dd01cd7a1914ea8"
  },
  {
    "url": "passages/miniprogram-note/index.html",
    "revision": "24b311543309aedfc04e6c043fbb8dc4"
  },
  {
    "url": "passages/miniprogram-promise/index.html",
    "revision": "3ba193b78541b0b7e95571a2adb07b7a"
  },
  {
    "url": "passages/miniprogram-update/index.html",
    "revision": "bfeca0e7fbd2a1839200172b3d564c01"
  },
  {
    "url": "passages/node-event/index.html",
    "revision": "feca94d58998f71af83d26d6905132d7"
  },
  {
    "url": "passages/node-modules/index.html",
    "revision": "fda79f7c8ccf34c8b6341f927ac5eeb7"
  },
  {
    "url": "passages/server-jenkins/index.html",
    "revision": "92ce39338582d4a50059008ec353528c"
  },
  {
    "url": "passages/server-nginx/index.html",
    "revision": "5eb39b31c437ec4486905d32f870a497"
  },
  {
    "url": "passages/test-learn-jest-async1/index.html",
    "revision": "c450973aa67cf4318917250678f0167a"
  },
  {
    "url": "passages/test-learn-jest-async2/index.html",
    "revision": "ef5837db27ab408cda542607561a6596"
  },
  {
    "url": "passages/test-learn-jest-class/index.html",
    "revision": "869a930793c9f39580494d12b01e7e68"
  },
  {
    "url": "passages/test-learn-jest-command/index.html",
    "revision": "578b5f3c6b35f2eb6b50aea7923e2af1"
  },
  {
    "url": "passages/test-learn-jest-config/index.html",
    "revision": "4ae4197a80e389e819a942692fc32bfb"
  },
  {
    "url": "passages/test-learn-jest-dom/index.html",
    "revision": "14155f44908e08e6eb66b43659b8a872"
  },
  {
    "url": "passages/test-learn-jest-hook-scope/index.html",
    "revision": "81e82a65eece6ad7d8d2b1e84160ee2b"
  },
  {
    "url": "passages/test-learn-jest-hook/index.html",
    "revision": "d73f01ac4f84625c5f20dcefd8703b58"
  },
  {
    "url": "passages/test-learn-jest-matchers/index.html",
    "revision": "949978d5ca2787785de8b410cbea5ede"
  },
  {
    "url": "passages/test-learn-jest-mock-times/index.html",
    "revision": "d04abe65b885f82effc172e20d806412"
  },
  {
    "url": "passages/test-learn-jest-mock1/index.html",
    "revision": "0ff39b977f7a75ce7a51da2825c50388"
  },
  {
    "url": "passages/test-learn-jest-mock2/index.html",
    "revision": "6632789215290bec1b2d28db3a14776d"
  },
  {
    "url": "passages/test-learn-jest-mock3/index.html",
    "revision": "a1ed14d7c8e3f19c973bce68563d1eaa"
  },
  {
    "url": "passages/test-learn-jest-modify/index.html",
    "revision": "d0ec32b1474ccd23049645b61b4ab6b1"
  },
  {
    "url": "passages/test-learn-jest-snapshot/index.html",
    "revision": "08350bf9669daddfa0f45e38767ff68e"
  },
  {
    "url": "passages/test-learn-jest/index.html",
    "revision": "4b6e2260fe740b7d5336085012856a2a"
  },
  {
    "url": "passages/test-learn-principle/index.html",
    "revision": "9a15b81829db38106d0524ba8b819de5"
  },
  {
    "url": "passages/vue-cli3/index.html",
    "revision": "2864ef309de242340d80cae696b9276c"
  },
  {
    "url": "passages/webpack-dev-server/index.html",
    "revision": "20889b6c8d307bca014cadcbecc842d4"
  },
  {
    "url": "passages/webpack4-Babel7/index.html",
    "revision": "6a57f972e8c7e4667b0e8eb424c1bb85"
  },
  {
    "url": "passages/webpack4-bundle/index.html",
    "revision": "277e1685323434552a55b54094146c75"
  },
  {
    "url": "passages/webpack4-code-splitting/index.html",
    "revision": "bbb332b39745eb6657af95e3351ca172"
  },
  {
    "url": "passages/webpack4-css-scss/index.html",
    "revision": "fd63ab684bdcc73ebb4a913ef9cc445c"
  },
  {
    "url": "passages/webpack4-css-tree-shaking/index.html",
    "revision": "90fc881ca59873e9564ed1efa54c8520"
  },
  {
    "url": "passages/webpack4-custom-lib/index.html",
    "revision": "9bb778b56cf2538084b5dff7b8beecff"
  },
  {
    "url": "passages/webpack4-dev-prod-project/index.html",
    "revision": "b7d77e790e3cd7f1bb14d2a63e61b0ee"
  },
  {
    "url": "passages/webpack4-dev-prod/index.html",
    "revision": "708084be4c57d750ea27ae582113b758"
  },
  {
    "url": "passages/webpack4-dllPlugin/index.html",
    "revision": "76618cac2f5611c15822f5116fa9aeca"
  },
  {
    "url": "passages/webpack4-entry-output/index.html",
    "revision": "675a9e67019810f06a7c9a850229408a"
  },
  {
    "url": "passages/webpack4-eslint/index.html",
    "revision": "365e826de0ba2d1f15711bc74b67bfbe"
  },
  {
    "url": "passages/webpack4-fonts/index.html",
    "revision": "5a48c48ccf4fef2b8be1630afd9393c6"
  },
  {
    "url": "passages/webpack4-generate-html/index.html",
    "revision": "a26c8dbe3a22471bd59bd92bda3975c5"
  },
  {
    "url": "passages/webpack4-images/index.html",
    "revision": "c4ade8440290f5ef2339710a50b11f87"
  },
  {
    "url": "passages/webpack4-js-lib/index.html",
    "revision": "33e4b2d1cb7b9f6ed230f2e76a94f038"
  },
  {
    "url": "passages/webpack4-lazyLoading-prefetching/index.html",
    "revision": "9cc5a5f782ab0786cea1337505f4bfed"
  },
  {
    "url": "passages/webpack4-learn-introduction/index.html",
    "revision": "bb34cdbb6c69cc6a29963ee7e04bb644"
  },
  {
    "url": "passages/webpack4-loader/index.html",
    "revision": "4ad289da00685a20c682d2c97583dab2"
  },
  {
    "url": "passages/webpack4-multi-page/index.html",
    "revision": "23b68f1861e47f4e980793ac660d3575"
  },
  {
    "url": "passages/webpack4-pack-js/index.html",
    "revision": "fe2dafcbca0bc1354c288b94fbac4d31"
  },
  {
    "url": "passages/webpack4-plugin/index.html",
    "revision": "b1e39619bd4d8a97f037a0fb4be47fb6"
  },
  {
    "url": "passages/webpack4-pwa/index.html",
    "revision": "e2a2da9930226a8504582c577d0026ef"
  },
  {
    "url": "passages/webpack4-tree-shaking/index.html",
    "revision": "ca732ab8abe102d7999783365d93cd08"
  },
  {
    "url": "passages/webpack4-typescript/index.html",
    "revision": "b68ea2f7ab840520b6bebada8a3762da"
  },
  {
    "url": "tag/index.html",
    "revision": "0d9362fee90eaa6fc8eef4ae3b85bb88"
  },
  {
    "url": "tags/Chrome/index.html",
    "revision": "8ecbc04ed875e2f4b1ebc483aa4d1226"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8044a2e793b06855da799ee1f889c246"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "e656a6de654a9bb0145792868b8ce27c"
  },
  {
    "url": "tags/Jest/index.html",
    "revision": "0dbca71c99336ca52d3d5a98059653b6"
  },
  {
    "url": "tags/Jest/page/2/index.html",
    "revision": "d14ad0a8684d6f94691418609500da5f"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "833c559c81aa32a6968fecc534a0f80c"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "514542053207cce66f8178e4199b0207"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "60d715d218f2168645ea62815b63f6a6"
  },
  {
    "url": "tags/Webpack/page/2/index.html",
    "revision": "deb4ec13b6043fb4d1d900cbb4e3bfbe"
  },
  {
    "url": "tags/Webpack/page/3/index.html",
    "revision": "fd252a940ef8eead04396547373cf7a0"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "bacf4cd4b844e245883ab1accf0a07b7"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "e619910bcb5d2248dbed39fc350ab929"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "5483d47636cc35b7c708e127a7500efe"
  },
  {
    "url": "timeline/index.html",
    "revision": "68f97eff16945364d96f2c547cc50ba6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
