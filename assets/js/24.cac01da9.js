(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{377:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/ITxiaohao/webpack4-learn/tree/master/demo06",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo6 源码地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在 demo5 的基础上修改 index.js 文件，并删除了多余的 js 文件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackChunkName: 'use-lodash'*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这段代码表示的是，当点击页面的时候，异步加载 lodash 并输出内容，打包后打开 index.html 文件，演示如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/%E6%87%92%E5%8A%A0%E8%BD%BD.gif",alt:""}})]),t._v(" "),a("p",[t._v("第一次进入页面的时候，并没有加载 lodash 和 use-lodash，当我点击网页的时候，浏览器再去加载，并且控制台输出内容，这就是代码"),a("strong",[t._v("懒加载")]),t._v("，如果有用过 "),a("strong",[t._v("vue-router")]),t._v(" 的朋友应该会知道"),a("strong",[t._v("路由懒加载")]),t._v("，并且官方也推荐使用懒加载的写法，就是为了结合 webpack，下图是 vue-cli3 生成的项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/20190321110641.png",alt:""}})]),t._v(" "),a("p",[t._v("其实懒加载就是通过 "),a("strong",[t._v("import")]),t._v(" 去异步的加载一个模块，具体什么时候加载，这个要根据业务来写，比如弹窗组件，模态框组件等等，都是点击按钮后再出现。")]),t._v(" "),a("p",[t._v("懒加载能加快网页的加载速度，如果你把详情页、弹窗等页面全部打包到一个 js 文件中，用户如果只是访问首页，只需要首页的代码，不需要其他页面的代码，加入多余的代码只会使加载时间变长，所以我们可以对路由进行懒加载，只有当用户访问到对应路由的时候，再去加载对应模块")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("懒加载并不是 webpack 里的概念，而是 ES6 中的 "),a("strong",[t._v("import")]),t._v(" 语法，webpack 只是能够识别 import 语法，能进行代码分割而已。")]),t._v(" "),a("p",[t._v("import 后面返回的是一个 then，说明这是一个 "),a("strong",[t._v("promise")]),t._v(" 类型，一些低端的浏览器"),a("strong",[t._v("不支持")]),t._v(" promise，比如 "),a("strong",[t._v("IE")]),t._v(" ，如果要使用这种异步的代码，就要使用 "),a("strong",[t._v("babel")]),t._v(" 以及 "),a("strong",[t._v("babel-polyfill")]),t._v(" 来做转换，因为我使用的是 73 版本的 "),a("strong",[t._v("chrome")]),t._v(" 浏览器，对 ES6 语法是支持的，所以我并没有安装 babel 也能使用")])]),t._v(" "),a("p",[t._v("更改 index.js 文件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("重新打包，并打开 index.html ，打开浏览器控制台，按 "),a("code",[t._v("ctrl + shift + p")]),t._v(" ，输入 "),a("code",[t._v("coverage")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/20190321121513.png",alt:""}})]),t._v(" "),a("p",[t._v("就能看到当前页面加载的 js 代码未使用率，红色区域表示未被使用的代码段")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/20190428153202.png",alt:""}})]),t._v(" "),a("p",[t._v("演示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/coverage1.gif",alt:""}})]),t._v(" "),a("p",[t._v("打开 "),a("code",[t._v("coverage")]),t._v(" 如果没出现分析的文件，记得刷新一下")]),t._v(" "),a("p",[t._v("这里一开始红色区域的代码未被使用，当我点击了页面后，变成绿色，页面出现了 "),a("code",[t._v("Hello World")]),t._v("，说明代码被使用了")]),t._v(" "),a("p",[t._v("页面刚加载的时候，异步的代码根本就不会执行，但是我们却把它下载下来，实际上就会浪费页面执行性能，webpack 就希望像这样交互的功能，应该把它放到一个异步加载的模块去写")]),t._v(" "),a("p",[t._v("新建一个 click.js 文件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dell Lee'")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" handleClick\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("并且将 index.js 文件改为异步的加载模块：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./click.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" func "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("重新打包，使用 "),a("strong",[t._v("coverage")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("演示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/coverage2.gif",alt:""}})]),t._v(" "),a("p",[t._v("当加载页面的时候，没有加载业务逻辑，当点击网页的时候，才会加载 1.js 模块，也就是我们在 index.js 中异步引入的 click.js")]),t._v(" "),a("p",[t._v("这么去写代码，才是使页面加载最快的一种方式，写高性能前端代码的时候，"),a("strong",[t._v("不关是考虑缓存，还要考虑代码使用率")])]),t._v(" "),a("p",[t._v("所以 webpack 在打包过程中，是希望我们多写这种异步的代码，才能提升网站的性能，这也是为什么 webpack 的 splitChunks 中的 chunks 默认是 async，异步的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/20190321143146.png",alt:""}})]),t._v(" "),a("p",[t._v("异步能提高你网页打开的性能，而同步代码是增加一个缓存，对性能的提升是非常有限的，因为缓存一般是"),a("strong",[t._v("第二次打开网页或者刷新页面")]),t._v("的时候，缓存很有用，但是网页的性能一般是用户"),a("strong",[t._v("第一次打开网页")]),t._v("，看首屏的时候。")]),t._v(" "),a("p",[t._v("当然，这也会出现另一个问题，就是当用户点击的时候，才去加载业务模块，如果业务模块比较大的时候，用户点击后并没有立马看到效果，而是要等待几秒，这样体验上也不好，怎么去解决这种问题")]),t._v(" "),a("p",[t._v("一：如果访问首页的时候，不需要加载详情页的逻辑，等用户首页加载完了以后，页面展示出来了，页面的带宽被释放出来了，网络空闲了，再「偷偷」的去加载详情页的内容，而不是等用户去点击的时候再去加载")]),t._v(" "),a("p",[t._v("这个解决方案就是依赖 webpack 的 "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting#prefetchingpreloading-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prefetching/Preloading"),a("OutboundLink")],1),t._v(" 特性")]),t._v(" "),a("p",[t._v("修改 index.js")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./click.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" func "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("webpackPrefetch: true")]),t._v(" 会等你主要的 JS 都加载完了之后，网络带宽空闲的时候，它就会预先帮你加载好")]),t._v(" "),a("p",[t._v("重新打包后刷新页面，注意看 "),a("strong",[t._v("Network")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/webpack/prefetch.gif",alt:""}})]),t._v(" "),a("p",[t._v("当网页打开的时候，main.bundle.js 被加载完了，网络空闲了，就会预先加载 1.js 耗时 14ms，等我去点击页面的时候，Network 又多了一个 1.js，耗时 2ms，这是因为第一次加载完了 1.js，被浏览器给缓存起来了，等我点击的时候，浏览器直接从缓存中取，响应速度非常快")]),t._v(" "),a("p",[t._v("这里我们使用的是 "),a("code",[t._v("webpackPrefetch")]),t._v("，还有一种是 "),a("code",[t._v("webpackPreload")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("区别：")]),t._v(" "),a("p",[t._v("与 prefetch 相比，Preload 指令有很多"),a("strong",[t._v("不同之处")]),t._v("：")]),t._v(" "),a("p",[a("strong",[t._v("Prefetch")]),t._v(" 会等待核心代码加载完之后，有空闲之后再去加载。Preload 会和核心的代码并行加载，还是不推荐")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("总结：")]),t._v(" "),a("p",[t._v("针对优化，不仅仅是局限于缓存，缓存能带来的代码性能提升是非常有限的，而是如何让代码的"),a("strong",[t._v("使用率")]),t._v("最高，有一些交互后才用的代码，可以写到异步组件里面去，通过懒加载的形式，去把代码逻辑加载进来，这样会使得页面访问速度变的更快，如果你觉得懒加载会影响用户体验，可以使用 Prefetch 这种方式来预加载，不过在某些游览器"),a("strong",[t._v("不兼容")]),t._v("，会有兼容性的问题，重点不是在 Prefetch 怎么去用，而是在做前端代码性能优化的时候，"),a("strong",[t._v("缓存不是最重要的点，最重要的是代码使用的覆盖率上(coverage)")])])])])},[],!1,null,null,null);s.default=e.exports}}]);