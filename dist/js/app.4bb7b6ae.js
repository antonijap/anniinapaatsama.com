(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0db1":function(t,e,r){},"10f0":function(t,e,r){},"4ba5":function(t,e,r){"use strict";var a=r("9f46"),i=r.n(a);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("a026"),i=r("0701"),n=function(t){return t.isBroken?"/not-found":"homepage"===t.type?"/":"blog"===t.type||"work"===t.type?t.uid:"/not-found"},o=(r("99af"),r("a15b"),r("36eb")),c=r.n(o),s=c.a.RichText.Elements,l=function(t,e,r,a){if(t===s.hyperlink){var i="",o=c.a.Link.url(e.data,n);if("Document"===e.data.link_type)i='<router-link to="'.concat(o,'">').concat(r,"</router-link>");else{var l=e.data.target?"target=\"'".concat(e.data.target,'\'" rel="noopener"'):"";i='<a href="'.concat(o,'" ').concat(l,">").concat(r,"</a>")}return i}if(t===s.image){var u='<img src="'.concat(e.url,'" alt="').concat(e.alt||"",'" copyright="').concat(e.copyright||"",'">');if(e.linkTo){var p=c.a.Link.url(e.linkTo,n);if("Document"===e.linkTo.link_type)u='<router-link to="'.concat(p,'">').concat(u,"</router-link>");else{var d=e.linkTo.target?'target="'.concat(e.linkTo.target,'" rel="noopener"'):"";u='<a href="'.concat(p,'" ').concat(d,">").concat(u,"</a>")}}var f=[e.label||"","block-img"];return u='<p class="'.concat(f.join(" "),'">').concat(u,"</p>"),u}return null},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view"),r("footer")],1)},p=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("a",{attrs:{href:"https://prismic.io",target:"_blank",rel:"noopener"}},[a("img",{staticClass:"logo",attrs:{src:r("bd10"),alt:"Prismic"}})])])}],m={name:"Footer"},h=m,v=(r("8e8f"),r("2877")),_=Object(v["a"])(h,d,f,!1,null,"1837b2ec",null),g=_.exports,b={name:"App",components:{Footer:g}},y=b,j=(r("5c0b"),Object(v["a"])(y,u,p,!1,null,null,null)),x=j.exports,C=r("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("Not Found")])])}],$={name:"NotFound"},O=$,P=Object(v["a"])(O,k,w,!1,null,null,null),E=P.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[t.post?r("prismic-rich-text",{attrs:{field:t.post.data.title}}):t._e(),t.post?r("prismic-rich-text",{attrs:{field:t.post.data.intro}}):t._e(),t.post?r("img",{attrs:{src:t.post.data.image.url}}):t._e(),t.post?r("prismic-rich-text",{attrs:{field:t.post.data.content}}):t._e()],1)},N=[],A={name:"Post",data:function(){return{post:null}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("post",t).then((function(t){e.post=t}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,r){this.getContent(t.params.uid),r()}},R=A,S=(r("6985"),Object(v["a"])(R,T,N,!1,null,"58efde46",null)),U=S.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"top-bar"},[r("div",{staticClass:"horizontal-stack"},[t.home?r("prismic-rich-text",{attrs:{field:t.home.data.email}}):t._e(),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.phone}}):t._e()],1),t.home?r("prismic-rich-text",{staticClass:"right-links",attrs:{field:t.home.data.lets_connect}}):t._e()],1),r("div",{staticClass:"wrapper"},[t.home?r("prismic-rich-text",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"intro",attrs:{field:t.home.data.intro}}):t._e(),t.home?r("prismic-image",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{field:t.home.data.image}}):t._e(),r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"container top-space"},[t._m(0),r("div",{staticClass:"projects"},t._l(t.projects,(function(e,a){return r("div",{key:a,staticClass:"project"},[r("router-link",{attrs:{to:"/"+e.uid}},[r("h4",[t._v(t._s(t.$prismic.richTextAsPlain(e.data.title)))]),r("p",[t._v(t._s(t.$prismic.richTextAsPlain(e.data.intro)))])])],1)})),0),r("div",{staticClass:"line"})]),r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"container horizontal-stack top-space"},[r("div",[r("div",[r("h3",[t._v("About")]),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.about}}):t._e()],1),r("div",{staticClass:"container"},[r("h3",[t._v("Extracurricular Activities")]),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.extracurricular_activities}}):t._e()],1),r("div",{staticClass:"container"},[r("h3",[t._v("Fun facts")]),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.fun_facts}}):t._e()],1)]),r("div",[r("div",[r("h3",[t._v("Education")]),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.education}}):t._e()],1),r("div",{staticClass:"container"},[r("h3",[t._v("Experience")]),t.home?r("prismic-rich-text",{attrs:{field:t.home.data.experience}}):t._e()],1)])])],1)])},F=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"heading-with-line"},[r("h3",[t._v("Projects")]),r("div",{staticClass:"line"})])}],D=(r("d81d"),{name:"Home",data:function(){return{home:null,projects:[]}},methods:{getContent:function(t){var e=this;this.$prismic.client.query(this.$prismic.Predicates.any("document.type",["home","project"]),{orderings:"[my.project.order]"}).then((function(t){e.home=t.results,t.results.map((function(t){"project"===t.type?e.projects.push(t):"home"===t.type&&(e.home=t)}))}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,r){this.getContent(t.params.uid),r()}}),M=D,z=(r("f397"),Object(v["a"])(M,B,F,!1,null,"0a7bc424",null)),q=z.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("a",{staticClass:"back",attrs:{href:"/"}},[t._v("Back")]),t.project?r("prismic-rich-text",{attrs:{field:t.project.data.title}}):t._e(),t.project.data.image?r("prismic-image",{attrs:{field:t.project.data.image}}):t._e(),t.project?r("prismic-rich-text",{staticClass:"intro",attrs:{field:t.project.data.intro}}):t._e(),t.project?r("prismic-rich-text",{attrs:{field:t.project.data.description}}):t._e(),t.project?r("prismic-rich-text",{attrs:{field:t.project.data.case}}):t._e()],1)},I=[],J={name:"Home",data:function(){return{project:null}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("project",t).then((function(t){e.project=t}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,r){this.getContent(t.params.uid),r()}},L=J,G=(r("9843"),Object(v["a"])(L,H,I,!1,null,"aff6c3ec",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("a",{attrs:{href:"/"}},[r("font-awesome-icon",{attrs:{icon:"long-arrow-alt-left"}}),r("span",[t._v("Portfolio")])],1),t.blog?r("prismic-rich-text",{attrs:{field:t.blog.data.intro}}):t._e(),r("div",{staticClass:"posts"},t._l(t.posts,(function(e,a){return r("div",{key:a,staticClass:"post"},[r("a",{attrs:{href:"/blog/"+e.uid}},[e.data.image?r("img",{attrs:{src:e.data.image.url}}):t._e(),r("h2",[t._v(t._s(t.$prismic.richTextAsPlain(e.data.title)))]),t.blog?r("prismic-rich-text",{attrs:{field:e.data.intro}}):t._e()],1)])})),0)],1)},V=[],W={name:"Blog",data:function(){return{blog:null,posts:[]}},methods:{getContent:function(t){var e=this;this.$prismic.client.query(this.$prismic.Predicates.any("document.type",["post","blog"])).then((function(t){e.home=t.results,t.results.map((function(t){"post"===t.type?e.posts.push(t):"blog"===t.type&&(e.blog=t)}))}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,r){this.getContent(t.params.uid),r()}},X=W,Y=(r("4ba5"),Object(v["a"])(X,Q,V,!1,null,"4608d87c",null)),Z=Y.exports;a["a"].use(C["a"]);var tt=new C["a"]({mode:"history",routes:[{path:"/",name:"home",component:q},{path:"/blog",name:"blog",component:Z},{path:"/blog/:uid",name:"blog-post",component:U},{path:"/:uid",name:"project",component:K},{path:"/not-found",name:"not-found",component:E},{path:"*",redirect:{name:"not-found"}}]}),et=r("4c95"),rt=r.n(et);a["a"].config.productionTip=!1,a["a"].use(rt.a,{scale:.95,delay:250}),a["a"].use(i["a"],{endpoint:window.prismic.endpoint,linkResolver:n,htmlSerializer:l}),new a["a"]({router:tt,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),i=r.n(a);i.a},6985:function(t,e,r){"use strict";var a=r("10f0"),i=r.n(a);i.a},"8e8f":function(t,e,r){"use strict";var a=r("e773"),i=r.n(a);i.a},9843:function(t,e,r){"use strict";var a=r("0db1"),i=r.n(a);i.a},"9c0c":function(t,e,r){},"9f46":function(t,e,r){},bd10:function(t,e,r){t.exports=r.p+"img/prismic-logo.c4913e51.svg"},e773:function(t,e,r){},f397:function(t,e,r){"use strict";var a=r("f8f8"),i=r.n(a);i.a},f8f8:function(t,e,r){}});
//# sourceMappingURL=app.4bb7b6ae.js.map