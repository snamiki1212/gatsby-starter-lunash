(self.webpackChunkgatsby_starter_lunash=self.webpackChunkgatsby_starter_lunash||[]).push([[36],{8797:function(e,t,n){var r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['’]",f="["+l+"]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\d+",m="[\\u2700-\\u27bf]",h="["+c+"]",y="[^\\ud800-\\udfff"+l+d+a+c+u+"]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+u+"]",w="(?:"+h+"|"+y+")",T="(?:"+v+"|"+y+")",E="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",C="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",A="[\\ufe0e\\ufe0f]?",S=A+C+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",g,b].join("|")+")"+A+C+")*"),O="(?:"+[m,g,b].join("|")+")"+S,k=RegExp(s,"g"),I=RegExp(p,"g"),L=RegExp([v+"?"+h+"+"+E+"(?="+[f,v,"$"].join("|")+")",T+"+"+x+"(?="+[f,v+w,"$"].join("|")+")",v+"?"+w+"+"+E,v+"+"+x,d,O].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,j="object"==typeof self&&self&&self.Object===Object&&self,P=_||j||Function("return this")();var D,F=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var z=Object.prototype.toString,M=P.Symbol,Z=M?M.prototype:void 0,R=Z?Z.toString:void 0;function H(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&z.call(e)==r}(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function Y(e){return null==e?"":H(e)}var B,U=(B=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,i=e?e.length:0;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=Y(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(L)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=Y(e))&&e.replace(i,F).replace(I,"")}(e).replace(k,"")),B,"")});e.exports=U},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,o,i,a,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),p=n.n(f),d=n(7294),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",C="innerHTML",A="itemprop",S="name",O="property",k="rel",I="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",j="defer",P="encodeSpecialCharacters",D="onChangeClientState",F="titleTemplate",z=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),M=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Z="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,v.TITLE),n=Q(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,_);return t||r||void 0},W=function(e){return Q(e,D)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,u,r),style:pe(v.STYLE,l,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:$([E,L],e),bodyAttributes:K(y,e),defer:Q(e,j),encode:Q(e,P),htmlAttributes:K(g,e),linkTags:J(v.LINK,[k,E],e),metaTags:J(v.META,[S,w,x,O,A],e),noscriptTags:J(v.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:J(v.SCRIPT,[I,C],e),styleTags:J(v.STYLE,[T],e),title:G(e),titleAttributes:K(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=me,a=i=function(e){function t(){return H(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case v.BODY:return B({},o,{bodyAttributes:B({},i)});case v.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind,t.Z=he},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2391:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var r=n(9).ZP.span.withConfig({displayName:"Button",componentId:"sc-he7qdk-0"})(["display:inline-block;border-radius:10px;padding:5px;background:",";color:",";transition:0.5s;&:hover{transition:0.5s;background:",";cursor:pointer;}"],(function(e){return e.theme.color.white}),(function(e){return e.theme.color.link}),(function(e){return e.theme.color.baseLight}))},7609:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var r=n(7294),o=n(9),i=n(2391),a=n(5444),c=function(e){var t=e.name,n=e.count,o=e.path,i=t;return null!=n&&(i=i+" ("+n+")"),r.createElement(u,{to:o},r.createElement(l,null,"#"+i))},u=(0,o.ZP)(a.Link).withConfig({displayName:"DarkTip___Link",componentId:"sc-7ianvy-0"})(["text-decoration:none;"]),l=(0,o.ZP)(i.z).withConfig({displayName:"DarkTip___Button",componentId:"sc-7ianvy-1"})(["margin:5px 2px 0;color:",";background:",";transition:0.3s;opacity:0.9;letter-spacing:1px;&:hover{transition:0.3s;opacity:1;letter-spacing:4px;background:",";}"],(function(e){return e.theme.color.white}),(function(e){return e.theme.color.baseDark}),(function(e){return e.theme.color.baseDark}))},6459:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(7294),o=n(2797),i=function(e){var t=e.size;return r.createElement("img",{src:o.blogCardLogo,style:{width:t,height:t},alt:"logo-img",loading:"lazy"})}},920:function(e,t,n){"use strict";n.d(t,{A:function(){return D}});var r=n(7294),o=n(5414),i=n(9),a=n(2797),c=n.n(a),u=n(5444),l=function(){return r.createElement(s,null,r.createElement(u.Link,{to:"/"},r.createElement(f,null,r.createElement(p,null,r.createElement(d,{src:a.blogCardLogo,alt:"blog-logo",loading:"lazy"}),r.createElement(m,null,a.siteTitle)))))},s=i.ZP.div.withConfig({displayName:"HeadNav__Wrapper",componentId:"sc-ddeza3-0"})([""]),f=i.ZP.div.withConfig({displayName:"HeadNav__OnMouse",componentId:"sc-ddeza3-1"})(["transition:0.5s;opacity:0.8;&:hover{transition:0.3s;opacity:1;}"]),p=i.ZP.div.withConfig({displayName:"HeadNav__Flex",componentId:"sc-ddeza3-2"})(["display:flex;align-items:center;"]),d=i.ZP.img.withConfig({displayName:"HeadNav__Image",componentId:"sc-ddeza3-3"})(["width:80px;height:80px;"]),m=i.ZP.span.withConfig({displayName:"HeadNav__BlogTitle",componentId:"sc-ddeza3-4"})(["color:",";font-family:",";font-size:","px;&:hover,&:active{color:",";}"],(function(e){return e.theme.color.primaryVivid}),(function(e){return e.theme.fontFamily.logoEn}),(function(e){return e.theme.fontSize.tmp_3}),(function(e){return e.theme.color.primaryVivid})),h=function(){return r.createElement(y,null,r.createElement(l,null))},y=i.ZP.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-7zaloc-0"})(["background:linear-gradient( 145deg,",",",","," );"],(function(e){return e.theme.color.baseDark}),(function(e){return e.theme.color.baseDark+"CC"}),(function(e){return e.theme.color.baseDark})),g=n(6459),b=n(8877),v=function(){var e=(0,b.V)("github"),t=(0,b.V)("twitter"),n=(0,b.V)("linkedin");return r.createElement(w,null,r.createElement(T,null,r.createElement(E,null,"Lunash"),r.createElement(x,{to:"/about"},"経歴・仕事依頼")),r.createElement(T,null,r.createElement(E,null,"Blog"),r.createElement(x,{to:"/categories"},"カテゴリー 一覧"),r.createElement(x,{to:"/tags"},"タグ 一覧")),r.createElement(T,null,r.createElement(E,null,"SNS"),r.createElement(C,{href:t},"Twitter"),r.createElement(C,{href:e},"Github"),r.createElement(C,{href:n},"Linkedin")))},w=i.ZP.div.withConfig({displayName:"FooterNav__Wrapper",componentId:"sc-1q9x1xz-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;"]),T=i.ZP.div.withConfig({displayName:"FooterNav__Box",componentId:"sc-1q9x1xz-1"})(["display:flex;flex-direction:column;"]),E=i.ZP.div.withConfig({displayName:"FooterNav__SubTitle",componentId:"sc-1q9x1xz-2"})(["font-family:",";color:",";font-weight:bold;font-family:",";"],(function(e){return e.theme.fontFamily.primary}),(function(e){return e.theme.color.primaryVivid}),(function(e){return e.theme.fontFamily.logoEn})),x=(0,i.ZP)(u.Link).withConfig({displayName:"FooterNav__InternalLink",componentId:"sc-1q9x1xz-3"})(["margin-top:7px;font-size:20px;font-family:",";color:",";border-bottom:1px solid transparent;transition:0.5s;&:hover{color:",";border-color:",";transition:0.5s;}"],(function(e){return e.theme.fontFamily.primary}),(function(e){return e.theme.color.baseLight}),(function(e){return e.theme.color.primaryVivid}),(function(e){return e.theme.color.primaryVivid})),C=i.ZP.a.withConfig({displayName:"FooterNav__ExternalLink",componentId:"sc-1q9x1xz-4"})(["margin-top:7px;font-size:20px;font-family:",";color:",";border-bottom:1px solid transparent;transition:0.5s;&:hover{color:",";border-color:",";transition:0.5s;}"],(function(e){return e.theme.fontFamily.primary}),(function(e){return e.theme.color.baseLight}),(function(e){return e.theme.color.primaryVivid}),(function(e){return e.theme.color.primaryVivid})),A=function(){return r.createElement(L,null,r.createElement(N,null,r.createElement(_,null,r.createElement(I,null,r.createElement(u.Link,{to:"/"},r.createElement(g.T,{size:114}))),r.createElement(v,null),r.createElement(S,null,r.createElement(O,null),r.createElement(k,null,c().copyright)))))},S=i.ZP.div.withConfig({displayName:"Footer__BottomWrapper",componentId:"sc-1xcv0y6-0"})(["width:100%;"]),O=i.ZP.hr.withConfig({displayName:"Footer__HR",componentId:"sc-1xcv0y6-1"})(["border:1px solid ",";"],(function(e){return e.theme.color.primaryVivid})),k=i.ZP.footer.withConfig({displayName:"Footer__Copyright",componentId:"sc-1xcv0y6-2"})(["color:",";padding:10px 0;text-align:center;font-family:",";"],(function(e){return e.theme.color.baseLight}),(function(e){return e.theme.fontFamily.logoEn})),I=i.ZP.div.withConfig({displayName:"Footer__LogoWrapper",componentId:"sc-1xcv0y6-3"})(["transition:0.3;opacity:0.8;&:hover{transition:0.3;opacity:1;}"]),L=i.ZP.div.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1xcv0y6-4"})(["padding-top:30px;background:",";"],(function(e){return e.theme.color.baseLight})),N=i.ZP.div.withConfig({displayName:"Footer__ContentWrapper",componentId:"sc-1xcv0y6-5"})(["background:linear-gradient( 145deg,",",",","," );"],(function(e){return e.theme.color.baseDark}),(function(e){return e.theme.color.baseDark+"E6"}),(function(e){return e.theme.color.baseDark})),_=i.ZP.div.withConfig({displayName:"Footer__Content",componentId:"sc-1xcv0y6-6"})(["height:100%;width:80%;margin:0 auto;display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;justify-content:space-between;"]),j={primaryVivid:"#ECC100",link:"#477FB9",baseLight:"#ECF2F8",baseDark:"#1C324A",white:"#f9f9f9",grayDark:"#808080"},P=(Object.assign({},j),{color:j,layout:{marginVertical:20,autherAvatorSizeNum:74,articleCardLogoSize:48},fontFamily:{primary:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif',logoEn:"Philosopher,Candara,Calibri,Segoe,Segoe UI"},fontSize:{tmp_1:24,tmp_2:12,tmp_3:54}}),D=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("meta",{name:"description",content:c().siteDescription}),r.createElement("meta",{name:"google-site-verification",content:c().siteGSCTrackingID})),r.createElement(i.f6,{theme:P},r.createElement(h,null),r.createElement(F,null,t),r.createElement(A,null)))},F=i.ZP.div.withConfig({displayName:"Layout__BodyWrapper",componentId:"sc-1cjlwm6-0"})(["opacity:0.99;background-color:",";"],(function(e){return e.theme.color.baseLight}))},8877:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2797),o=n.n(r),i=function(e){var t,n,r;return null!==(t=null===(n=o().mySocials)||void 0===n||null===(r=n.find((function(t){return t.icon===e})))||void 0===r?void 0:r.url)&&void 0!==t?t:""}},2797:function(e){"use strict";e.exports={siteTitle:"Gatsby Starter Lunash",siteTitleShort:"This is gatsby starter a.k.a Lunash",siteTitleAlt:"Lunash",siteLogo:"/logos/logo.png",siteUrl:"https://example.com",siteRepository:"https://github.com/snamiki1212/gatsby-starter-lunash",blogCardLogo:"/blogcard.webp",siteDescription:"hogehoge",siteRss:"/rss.xml",siteGSCTrackingID:{}.siteGSCTrackingID,siteFBAppID:{}.siteFBAppID,dateFromFormat:"YYYY-MM-DD hh:mm",dateFormat:"YYYY/MM/DD",userName:"Nash",userTwitter:"hoge",userLocation:"hoge",userAvatar:"/avator.webp",userDescription:"Hi, I'm Nash from Japan based in Vancouver working as full-stack developer. Feel free to contact :D",userIntroduction:"Developer",jobTitle:"Developer",email:"example@exmaple.com",autherName:"hoge",mySocials:[{icon:"github",url:"https://github.com/snamiki1212"},{icon:"twitter",url:"https://twitter.com/snamiki1212"},{icon:"linkedin",url:"https://www.linkedin.com/in/snamiki1212"}],copyright:"© 2019 Shun Namiki"}}}]);
//# sourceMappingURL=2f6b14c12b9fd929fe40b0a328d38c01c2752a90-0f21f01fca285a748adf.js.map