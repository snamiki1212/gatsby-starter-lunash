(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AGev:function(e,t,n){"use strict";n.r(t),n.d(t,"TagTemplate",(function(){return u}));var a=n("q1tI"),i=n.n(a),r=n("qhky"),c=n("IpnI"),o=n.n(c),l=n("02Bj"),d=n("KFly"),u=function(e){var t=e.pageContext,n=e.data,a=t.tag,c=n.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement(r.a,null,i.a.createElement("title",null,o.a.siteTitle+" | "+a),i.a.createElement("link",{rel:"canonical",href:""+o.a.siteUrl})),i.a.createElement(d.a,{postEdges:c,context:t}))};t.default=u},KFly:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),c=n("Fmqt"),o=n("WeT4"),l=n("47i6"),d=n("lopY"),u=n("tr08"),s=function(e){var t=e.postEdges,n=e.context,a=e.description,r=Object(u.a)(),c=Object(d.a)(r.breakpoints.down("sm")),s=c?l.b:l.a;return i.a.createElement(m,{style:{flexDirection:c?"column":"row",padding:c?"0px":"25px"}},i.a.createElement(p,null,a,i.a.createElement(o.a,{style:{flexDirection:c?"column":"row"}},t.map((function(e){return i.a.createElement(s,{key:e.node.frontmatter.title,postInfo:e})}))),i.a.createElement(o.g,{context:n})),i.a.createElement(f,null,i.a.createElement(l.c,null),i.a.createElement(o.j,{context:n})))},m=r.a.div.withConfig({displayName:"ArticlePreviewList__PageContainer",componentId:"u7cn1l-0"})(["display:flex;justify-content:space-around;flex-wrap:wrap;"]),p=r.a.div.withConfig({displayName:"ArticlePreviewList__MainArea",componentId:"u7cn1l-1"})(["display:flex;flex-direction:column;flex:1;"]),f=r.a.aside.withConfig({displayName:"ArticlePreviewList__AsideArea",componentId:"u7cn1l-2"})(["flex:0;min-width:300px;padding:50px;border-radius:10px;background-color:",";"],c.a.grayLight)},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("k1TG"),i=n("q1tI"),r=n("aXM8"),c=n("A+CX");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)(),o=Object(c.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var d="undefined"!=typeof window&&void 0!==window.matchMedia,u=Object(a.a)({},o,t),s=u.defaultMatches,m=void 0!==s&&s,p=u.matchMedia,f=void 0===p?d?window.matchMedia:null:p,w=u.noSsr,v=void 0!==w&&w,h=u.ssrMatchMedia,x=void 0===h?null:h,g=i.useState((function(){return v&&d?f(l).matches:x?x(l).matches:m})),y=g[0],E=g[1];return i.useEffect((function(){var e=!0;if(d){var t=f(l),n=function(){e&&E(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[l,f,d]),y}}}]);
//# sourceMappingURL=component---src-components-templates-tag-template-tsx-47a9dbda627d2de01c9d.js.map