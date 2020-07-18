(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{253:function(t,a,r){"use strict";r.r(a);var e=r(0),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"html-基础篇"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-基础篇","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML - 基础篇")]),t._v(" "),r("h2",{attrs:{id:"doctype作用-严格模式与混杂模式如何区分？它们有何意义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doctype作用-严格模式与混杂模式如何区分？它们有何意义","aria-hidden":"true"}},[t._v("#")]),t._v(" Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("声明位于文档中的最前面，处于 标签之前。告知浏览器以何种模式来渲染文档。")])]),t._v(" "),r("li",[r("p",[t._v("严格模式的排版和 JS 运作模式是，以该浏览器支持的最高标准运行。")])]),t._v(" "),r("li",[r("p",[t._v("在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。")])]),t._v(" "),r("li",[r("p",[t._v("DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。")])])]),t._v(" "),r("h2",{attrs:{id:"兼容模式-标准模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#兼容模式-标准模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 兼容模式 & 标准模式")]),t._v(" "),r("ul",[r("li",[t._v("标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行;兼容模式中页面以宽松的向后兼容的方式显示来模拟老式浏览器的行为以防止站点无法工作.")]),t._v(" "),r("li",[t._v("在标准模式中：内容宽度 = width; 在兼容模式中 ：内容宽度 = width-2border-2padding")]),t._v(" "),r("li",[t._v("在标准模式中：行内元素设置宽高无效，在兼容模式中有效")]),t._v(" "),r("li",[t._v("在标准模式中：margin:0 auto 设置水平居中有效，在兼容模式中无效（需使用 text-align）")]),t._v(" "),r("li",[t._v("在兼容模式中图片的 padding 会失效，Table 中的字体属性不能继承上层的设置，white-space:pre 会失效")])]),t._v(" "),r("h2",{attrs:{id:"iframe-缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iframe-缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" iframe 缺点")]),t._v(" "),r("ul",[r("li",[t._v("iframe 会阻塞主页面的 Onload 事件；")]),t._v(" "),r("li",[t._v("搜索引擎的检索程序无法解读这种页面，不利于 SEO;")]),t._v(" "),r("li",[t._v("iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。")]),t._v(" "),r("li",[t._v("如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。")])]),t._v(" "),r("h2",{attrs:{id:"html与xhtml-——-二者有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html与xhtml-——-二者有什么区别","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML与XHTML —— 二者有什么区别?")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("XHTML 元素必须被正确地嵌套。")])]),t._v(" "),r("li",[r("p",[t._v("XHTML 元素必须被关闭。")])]),t._v(" "),r("li",[r("p",[t._v("标签名必须用小写字母。")])]),t._v(" "),r("li",[r("p",[t._v("XHTML 文档必须拥有根元素。")])])]),t._v(" "),r("h2",{attrs:{id:"img-标签上-title-属性与-alt-属性的区别是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#img-标签上-title-属性与-alt-属性的区别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("<img>")]),t._v(" 标签上 title 属性与 alt 属性的区别是什么？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("alt属性是为了给那些不能看到你文档中图像的浏览者提供文字说明的。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。")])]),t._v(" "),r("li",[r("p",[t._v("这包括那些使用本来就不支持图像显示或者图像显示被关闭的浏览器的用户，视觉障碍的用户和使用屏幕阅读器的用户等。")])]),t._v(" "),r("li",[r("p",[t._v("title属性为设置该属性的元素提供建议性的信息。使用title属性提供非本质的额外信息。参考《alt和title属性的区别及应用》")])])]),t._v(" "),r("h2",{attrs:{id:"简述一下src与href的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述一下src与href的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 简述一下src与href的区别")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("src用于替换当前元素；href用于在当前文档和引用资源之间确立联系。")])]),t._v(" "),r("li",[r("p",[t._v("src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置")])]),t._v(" "),r("li",[r("p",[t._v("href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接")])])]),t._v(" "),r("h2",{attrs:{id:"元素标签分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元素标签分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 元素标签分类")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://www.w3school.com.cn/tags/html_ref_byfunc.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML参考手册 - 标签列表按功能类别排列"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("块级元素\ndiv p  h1-h6 ul ol li form table")])]),t._v(" "),r("li",[r("p",[t._v("行内块级元素\ninput、img")])]),t._v(" "),r("li",[r("p",[t._v("行内元素\na span i label")])]),t._v(" "),r("li",[r("p",[t._v("空标签("),r("some"),t._v(")\ninput img area base link br hr")],1)])])])}),[],!1,null,null,null);a.default=i.exports}}]);