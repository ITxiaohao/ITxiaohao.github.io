(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{404:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"哈希密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 哈希密码")]),s._v(" "),a("p",[s._v("这里介绍一个非常常用的库 bcrypt，还有一个 bcryptjs，它们的区别如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/node/20190723202836.png",alt:""}})]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i bcrypt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("给新用户的密码进行哈希运算，哈希的算法是单向的，如: 1234 -> abcd，可以从 1234 转换为 abcd，但是无法转换回来")]),s._v(" "),a("p",[s._v("从安全的角度来说是好的，不能直接反向解密密码，但是可以用密码组合来计算哈希值，这里我们需要加点「盐」(salt)")]),s._v(" "),a("p",[s._v("「盐」基本上就是一个随机字符串，会前置或者后置于我们的密码，所以这样每次哈希出的结果都会不同，基于它当时采用的「盐」的值")]),s._v(" "),a("p",[s._v("最佳实践就是永远使用异步的版本，因为 Node 在程序中只有一个进程，我们不希望进程一直是忙的状态，这样就无法给其他客户端提供服务")]),s._v(" "),a("p",[s._v("这里的参数 10 可以理解为计算机生成这个「盐」的成本，数字越大，生成的成本更高，安全值更高，但是生成的越大，会消耗计算机的性能")]),s._v(" "),a("p",[s._v("支持使用 await，所以我们可以这样写")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bcrypt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bcrypt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" salt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" bcrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genSalt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),s._v(" "),a("p",[s._v("可以看到我们使用的数字被包括在「盐」中，如果你用的是 20，这里的 10 的位置就显示 20")]),s._v(" "),a("p",[s._v("现在有了一个很长的随机字符串，它将成为我们哈希密码的一部分，这样我们每次用盐来哈希一个新密码，我们都会得到不同的结果，我们就用它来哈希用户传入的密码值")]),s._v(" "),a("p",[s._v("在 bcrypt 对象中还有一个方法，就是 "),a("strong",[s._v("hash")]),s._v("，我们给它一个数据，比如密码 1234，再传入之前的盐，得到哈希密码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bcrypt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bcrypt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" salt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" bcrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genSalt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" hashed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" bcrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hashed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/node/20190723205303.png",alt:""}})]),s._v(" "),a("p",[s._v("所以「盐」是被包含在哈希后的密码中，这样做的理由是验证一个用户的时候，我们需要验证用户的名字和密码")]),s._v(" "),a("p",[s._v("用户将密码用明文传过来，我们需要将明文哈希一次，但是我们也需要当初哈希它所用的盐")]),s._v(" "),a("p",[s._v("在比较明文密码的时候，执行哈希算法的 "),a("code",[s._v("bcrypt")]),s._v(" 需要知道之前的盐值是多少")]),s._v(" "),a("h2",{attrs:{id:"验证用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 验证用户")]),s._v(" "),a("p",[s._v("因为我们不想告诉用户是 email 还是密码错了（如果只说 email 错误可能会被黑客暴力破解）")]),s._v(" "),a("p",[s._v("只告诉用户，数据不对，无法验证，验证用户密码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("bcrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比对明文密码和哈希密码，这个哈希密码是撒了「盐」的，所以调用 "),a("code",[s._v("compare")]),s._v(" 方法的时候，"),a("code",[s._v("bcrypt")]),s._v(" 就会去获取盐，这里得到的盐对传入的明文密码进行哈希运算，如果他们是相等的就会返回 true")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" validPassword "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" bcrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("validPassword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'非法的 email 或者 password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"json-web-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-web-tokens","aria-hidden":"true"}},[s._v("#")]),s._v(" JSON Web Tokens")]),s._v(" "),a("p",[s._v("用户登录后，我们需要返回一个 JSON 网络令牌，简称 "),a("strong",[s._v("JWT")])]),s._v(" "),a("p",[s._v("JWT 本质上是一个长字符串，可以用来辨认一个用户的身份")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/node/20190723212254.png",alt:""}})]),s._v(" "),a("p",[s._v("用户登录后，服务器生成一个 JWT，并将它返回客户端，在客户端上会将 JWT 作为一个长字符串保存，也就是我们常说的 token")]),s._v(" "),a("p",[s._v("之后请求 API 将 token 设置在请求头中发送给服务器")]),s._v(" "),a("p",[s._v("这里推荐一个网站，"),a("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jwt.io"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ITxiaohao/blog-img/master/img/node/20190723214012.png",alt:""}})]),s._v(" "),a("p",[s._v("第一个部分是红色的，也就是 JWT 的头部，alg 表示这个 jwt 所用的编码算法。")]),s._v(" "),a("p",[s._v("重要的是第二部分，也就是这个令牌装载的信息")]),s._v(" "),a("p",[s._v("这里包含了用户可以公开显示的信息，有了这些，每次客户端发送请求给服务器的时候，我们都能从 JWT 中获取用户信息，比如是不是管理员，用户的 id 等等，这样就不用额外的去请求数据库了")]),s._v(" "),a("p",[s._v("你可能会想，是不是谁都能改变这里的 JWT，来欺骗服务器的认证逻辑，答案是不能。")]),s._v(" "),a("p",[s._v("JWT 中的第三个蓝色部分，是一个数字签名，这个数字签名是以装载项的信息和私钥一起生成的，这个私钥只有在服务器上能看见")]),s._v(" "),a("p",[s._v("如果一个恶意用户得到了这个 JWT，并且将 admin 属性进行修改，这种情况下的数字签名就无法验证，因为这个 JWT 中的数据被修改了，就需要一个新的数字签名")]),s._v(" "),a("p",[s._v("而黑客是无法生成对应的数字签名的，因为我们会将私钥放在服务器上，只要他没有登录服务器，就无法获得私钥，这就是 JWT 的工作原理")])])},[],!1,null,null,null);t.default=r.exports}}]);