(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KFly:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Fmqt"),c=n("WeT4"),l=n("47i6"),d=n("lopY"),u=n("tr08"),s=function(e){var t=e.postEdges,n=e.context,a=e.description,r=Object(u.a)(),o=Object(d.a)(r.breakpoints.down("sm")),s=o?l.b:l.a;return i.a.createElement(m,{style:{flexDirection:o?"column":"row",padding:o?"0px":"25px"}},i.a.createElement(p,null,a,i.a.createElement(c.a,{style:{flexDirection:o?"column":"row"}},t.map((function(e){return i.a.createElement(s,{key:e.node.frontmatter.title,postInfo:e})}))),i.a.createElement(c.g,{context:n})),i.a.createElement(f,null,i.a.createElement(l.c,null),i.a.createElement(c.j,{context:n})))},m=r.a.div.withConfig({displayName:"ArticlePreviewList__PageContainer",componentId:"u7cn1l-0"})(["display:flex;justify-content:space-around;flex-wrap:wrap;"]),p=r.a.div.withConfig({displayName:"ArticlePreviewList__MainArea",componentId:"u7cn1l-1"})(["display:flex;flex-direction:column;flex:1;"]),f=r.a.aside.withConfig({displayName:"ArticlePreviewList__AsideArea",componentId:"u7cn1l-2"})(["flex:0;min-width:300px;padding:50px;border-radius:10px;background-color:",";"],o.a.grayLight)},ePaI:function(e,t,n){"use strict";n.r(t),n.d(t,"CategoryTemplate",(function(){return g}));var a=n("q1tI"),i=n.n(a),r=n("qhky"),o=n("IpnI"),c=n.n(o),l=n("02Bj"),d=n("KFly"),u=n("Fmqt"),s=n("vOnD"),m=s.a.div.withConfig({displayName:"CategoryBanner__Text",componentId:"sc-1qumh7x-0"})(["font-size:30px;"]),p=s.a.div.withConfig({displayName:"CategoryBanner__Container",componentId:"sc-1qumh7x-1"})(["padding:30px;display:flex;justify-content:center;align-items:center;background:",";color:",";"],u.a.grayLight,u.a.black1),f=function(e){var t=e.categoryName;return i.a.createElement(p,null,i.a.createElement(m,null,"🚀",t))},g=function(e){var t=e.pageContext,n=e.data,a=t.category,o=n.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement(r.a,null,i.a.createElement("title",null,c.a.siteTitle+" | "+a),i.a.createElement("link",{rel:"canonical",href:""+c.a.siteUrl})),i.a.createElement(d.a,{postEdges:o,context:t,description:i.a.createElement("div",{style:{margin:"0 30px"}},i.a.createElement(f,{categoryName:a}))}))};t.default=g},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("k1TG"),i=n("q1tI"),r=n("aXM8"),o=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)(),c=Object(o.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var d="undefined"!=typeof window&&void 0!==window.matchMedia,u=Object(a.a)({},c,t),s=u.defaultMatches,m=void 0!==s&&s,p=u.matchMedia,f=void 0===p?d?window.matchMedia:null:p,g=u.noSsr,v=void 0!==g&&g,y=u.ssrMatchMedia,w=void 0===y?null:y,x=i.useState((function(){return v&&d?f(l).matches:w?w(l).matches:m})),h=x[0],E=x[1];return i.useEffect((function(){var e=!0;if(d){var t=f(l),n=function(){e&&E(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[l,f,d]),h}}}]);
//# sourceMappingURL=component---src-components-templates-category-template-tsx-f9a23a27d3486d75a677.js.map