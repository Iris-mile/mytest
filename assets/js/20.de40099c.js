(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{358:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"打包后地址切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包后地址切换"}},[t._v("#")]),t._v(" 打包后地址切换")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("原因：项目打包后地址不易更改，要更换项目配置地址再打包，多次重复打包操作")])]),t._v(" "),s("li",[s("p",[t._v("解决：vue项目下public/config.js，然后将文件引入到public/index.html")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- #config.js --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    VUE_APP_BASE_API = 'http://10.166.46.125:8090/' // 智慧车站平台车站接口地址\n    1、上诉方法将地址挂载了window上，通过window.获取\n    2、若不想挂载window，可以const obj={xx:'hh'}通过obj获取")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- #index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("      ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- built files will be auto injected --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/js/config.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- #项目中配置使用： --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    原有地址：process.env.VUE_APP_BASE_API\n    更改为：window.VUE_APP_BASE_API || process.env.VUE_APP_BASE_API\n    比如：request请求地方地址、websocket地址等等")]),t._v("\n    \n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);