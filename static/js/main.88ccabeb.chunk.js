(this.webpackJsonpkinoland=this.webpackJsonpkinoland||[]).push([[0],{29:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);n(29);var r=n(1),a=n.n(r),c=n(25),s=n.n(c),i=n(28),o=n(2),u=n(3),l=n.n(u),j=n(4),d=n(5),b=n.n(d),h=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/".concat(t.movieId,"?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/".concat(t.movieId,"/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/movie/".concat(t.movieId,"/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/search/movie?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1&include_adult=false&query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=n(0);var k=function(e){var t=e.details,n=Object(i.d)();return Object(w.jsxs)("div",{className:"btn-currentPage",children:[Object(w.jsx)("button",{onClick:function(){t.hasOwnProperty("original_name")?n.push("/kinoland/serial/".concat(t.id,"/details")):n.push("/kinoland/movies/".concat(t.id,"/details"))},children:"details"}),Object(w.jsx)("button",{onClick:function(){t.hasOwnProperty("original_name")?n.push("/kinoland/serial/".concat(t.id,"/videos")):n.push("/kinoland/movies/".concat(t.id,"/videos"))},children:"videos"}),Object(w.jsx)("button",{onClick:function(){t.hasOwnProperty("original_name")?n.push("/kinoland/serial/".concat(t.id,"/actors")):n.push("/kinoland/movies/".concat(t.id,"/actors"))},children:"actors"})]})};var y=function(e){var t=e.data,n=e.image;return Object(w.jsx)("div",{className:"header-currentPage-back_drop_image",children:Object(w.jsx)("img",{alt:"",src:n.base_url+n.backdrop_sizes[2]+t.backdrop_path})})};var _=function(e){var t=e.image,n=e.data;return Object(w.jsx)("div",{className:"showItem-image",children:Object(w.jsx)("img",{alt:"",src:t.base_url+t.poster_sizes[3]+n.poster_path})})};var N=function(e){var t=e.data;return Object(w.jsxs)("div",{className:"showItem-overview",children:[Object(w.jsx)("h1",{children:t.hasOwnProperty("title")?t.title:t.name}),Object(w.jsx)("p",{children:t.overview})]})};var S=function(e){var t=e.data,n=e.image;return 0!==n.length&&0!==t.length?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{data:t,image:n}),Object(w.jsxs)("div",{className:"header-currentPage",children:[Object(w.jsx)(_,{data:t,image:n}),Object(w.jsx)(N,{data:t})]})]}):null};var I=function(e){var t=e.details,n=Object(i.d)();return Object(w.jsx)("button",{className:"details",onClick:function(){t.hasOwnProperty("original_name")?n.push("/kinoland/serial/".concat(t.id,"/details")):n.push("/kinoland/movies/".concat(t.id,"/details"))},children:"details"})},P=n(27),R=n.n(P);var E=function(e){var t=e.image,n=e.item;return Object(w.jsx)(R.a,{className:"movies-image",height:200,children:Object(w.jsx)("img",{src:t.base_url+t.poster_sizes[4]+n.poster_path,alt:""})})};var C=function(e){var t=e.info;return Object(w.jsx)("div",{className:"movies-info",children:Object(w.jsx)("h4",{children:t.hasOwnProperty("original_title")?t.title:t.name})})};var U=function(e){var t=e.item,n=e.image;return 0!==t.length&&0!==n.length?t.map((function(e){return null!==e.backdrop_path?Object(w.jsxs)("div",{className:"movies-card",children:[Object(w.jsx)(E,{image:n,item:e}),Object(w.jsx)(C,{info:e}),Object(w.jsx)(I,{details:e})]},e.id):""})):""};var T=function(e){var t=e.similarItems,n=e.image,a=Object(r.useState)(!0),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(!0),l=Object(o.a)(u,2),j=l[0],d=l[1],b=Object(r.useState)(0),h=Object(o.a)(b,2),p=h[0],O=h[1],f=Object(r.useRef)(null);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{id:"text-similar-items",children:"\u041f\u041e\u0425\u041e\u0416\u0418\u0415"}),Object(w.jsxs)("div",{className:"similarItems",children:[Object(w.jsx)("div",{className:j?"btn-slider-prev":"false",onClick:function(e){O(p+=100),f.current.childNodes.forEach((function(e){e.style="transform: translatex(".concat(p,"%)")})),-1800!==p&&i(!0),p>=0&&d(!1)}}),Object(w.jsx)("div",{className:"slider-similar-items",ref:f,children:Object(w.jsx)(U,{item:t,image:n})}),Object(w.jsx)("div",{className:s?"btn-slider-next":"false",onClick:function(){O(p-=100),f.current.childNodes.forEach((function(e){e.style="transform: translatex(".concat(p,"%)")})),-1700===p&&i(!1),p<0&&d(!0)}})]})]})},z=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/configuration?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU");case 3:return t=e.sent,e.abrupt("return",t.data.images);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();var A=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)([]),b=Object(o.a)(d,2),h=b[0],p=b[1],O=Object(i.e)();return Object(r.useEffect)((function(){v(O).then((function(e){return c(e)})),z().then((function(e){return j(e)})),x(O).then((function(e){return p(e)}))}),[O]),Object(w.jsxs)("div",{className:"currentPage",children:[Object(w.jsx)(S,{data:a,image:l}),Object(w.jsxs)("div",{className:"container-Info-CurrentPage",children:[Object(w.jsx)(k,{details:a}),e.children]}),0!==h.length?Object(w.jsx)(T,{similarItems:h,image:l}):""]})},L=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/airing_today?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(t.serialId,"/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(t.serialId,"/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(t.serialId,"?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.themoviedb.org/3/search/tv?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1&include_adult=false&query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("something wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var W=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)([]),b=Object(o.a)(d,2),h=b[0],p=b[1],O=Object(i.e)();return Object(r.useEffect)((function(){J(O).then((function(e){return c(e)})),z().then((function(e){return j(e)})),G(O).then((function(e){return p(e)}))}),[O]),Object(w.jsxs)("div",{className:"currentPage",children:[Object(w.jsx)(S,{data:a,image:l}),Object(w.jsxs)("div",{className:"container-Info-CurrentPage",children:[Object(w.jsx)(k,{details:a}),e.children]}),0!==h.length?Object(w.jsx)(T,{similarItems:h,image:l}):""]})};var Y=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)([]),j=Object(o.a)(l,2),d=j[0],b=j[1];return Object(r.useEffect)((function(){h().then((function(e){return a(e)})),M().then((function(e){return u(e)})),z().then((function(e){return b(e)}))}),[]),Object(w.jsxs)("div",{className:"movies",children:[Object(w.jsx)(U,{item:i,image:d}),Object(w.jsx)(U,{item:n,image:d})]})};var B=function(){var e=Object(i.d)();return Object(w.jsx)("button",{className:"header-button",onClick:function(){e.push("/kinoland/")},children:"HOME"})};var H=function(){var e=Object(i.d)();return Object(w.jsxs)("div",{className:"dropdown-movies",children:[Object(w.jsx)("button",{className:"header-button",onClick:function(){e.push("/kinoland/movies")},children:"MOVIES"}),Object(w.jsxs)("div",{className:"dropdown-content",children:[Object(w.jsx)("button",{className:"dropdown-button",onClick:function(){e.push("/kinoland/movies/nowplaying")},children:"NOW PLAYING"}),Object(w.jsx)("button",{className:"dropdown-button",onClick:function(){e.push("/kinoland/movies/toprated")},children:"TOP RATED"})]})]})};var K=function(){var e=Object(i.d)();return Object(w.jsxs)("div",{className:"dropdown-movies",children:[Object(w.jsx)("button",{className:"header-button",onClick:function(){e.push("/kinoland/serials")},children:"TV"}),Object(w.jsxs)("div",{className:"dropdown-content",children:[Object(w.jsx)("button",{className:"dropdown-button",onClick:function(){e.push("/kinoland/serials/ontheair")},children:"NOW PLAYING"}),Object(w.jsx)("button",{className:"dropdown-button",onClick:function(){e.push("/kinoland/serials/toprated")},children:"TOP RATED"})]})]})};var $=function(){var e="",t=Object(i.d)(),n=Object(r.useRef)(null);return Object(w.jsxs)("form",{id:"search-header",onSubmit:function(r){e=n.current.value,t.push("/kinoland/search/".concat(e)),r.preventDefault()},children:[Object(w.jsx)("input",{placeholder:"find your movie",type:"search",ref:n}),Object(w.jsx)("button",{className:"btn-submit",type:"submit",children:"OK"})]})};var Q=function(e){return Object(w.jsxs)("header",{className:"header",children:[Object(w.jsx)($,{}),Object(w.jsx)(B,{}),Object(w.jsx)(H,{}),Object(w.jsx)(K,{})]})};var X=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(Q,{}),e.children]})};var Z=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){f().then((function(e){return a(e)})),z().then((function(e){return u(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:n,image:i})})};var ee=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){p().then((function(e){return a(e)})),z().then((function(e){return u(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:n,image:i})})};var te=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){L().then((function(e){return a(e)})),z().then((function(e){return u(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:n,image:i})})};var ne=function(){var e=Object(i.e)();e.name.toLowerCase();var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)([]),b=Object(o.a)(d,2),h=b[0],p=b[1];return Object(r.useEffect)((function(){e?(g(e.name).then((function(e){return c(e)})),V(e.name).then((function(e){return j(e)})),z().then((function(e){return p(e)}))):console.error("something wrong")}),[e]),Object(w.jsxs)("div",{className:"movies",children:[Object(w.jsx)(U,{item:l,image:h}),Object(w.jsx)(U,{item:a,image:h})]})};var re=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){F().then((function(e){return a(e)})),z().then((function(e){return u(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:n,image:i})})};var ae=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(i.e)();return Object(r.useEffect)((function(){s.hasOwnProperty("movieId")?v(s).then((function(e){return c(e)})):J(s).then((function(e){return c(e)}))}),[s]),0!==a.length?Object(w.jsxs)("div",{className:"showItem-info",children:[Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),a.status]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430: "})," ",a.hasOwnProperty("release_date")?a.release_date:a.first_air_date]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: "}),a.hasOwnProperty("episode_run_time")?a.episode_run_time:a.runtime," ","\u043c\u0438\u043d\u0443\u0442"]}),0!==a.production_countries.length?Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u0421\u0442\u0440\u0430\u043d\u0430: "}),a.production_countries[0].name]}):null,a.hasOwnProperty("budget")?Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u0411\u044e\u0434\u0436\u0435\u0442: "})," ",a.budget," $"]}):"",0!==a.genres.length?Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u0416\u0430\u043d\u0440\u044b: "}),a.genres.map((function(e){return"".concat(e.name.toLowerCase(),"; ")}))]}):null,Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"\u042f\u0437\u044b\u043a \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u0430:"})," ",a.original_language]})]}):null};var ce=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(i.e)();return Object(r.useEffect)((function(){s.hasOwnProperty("movieId")?m(s).then((function(e){return c(e)})):q(s).then((function(e){return c(e)}))}),[s]),0!==a.length?Object(w.jsx)("div",{id:"showItem-trailer",children:Object(w.jsx)("iframe",{title:"trailer",src:"https://www.youtube.com/embed/".concat(a[0].key),loading:"lazy",allowFullScreen:!0})}):Object(w.jsx)("h2",{children:"Sorry but at the moment we dont have the trailer"})};var se=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){O().then((function(e){return a(e)})),z().then((function(e){return u(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:n,image:i})})};var ie=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){D().then((function(e){return c(e)})),z().then((function(e){return l(e)}))}),[]),Object(w.jsx)("div",{className:"movies",children:Object(w.jsx)(U,{item:a,image:u})})},oe=n(11);var ue=function(){var e=Object(oe.a)();return Object(w.jsx)(i.b,{history:e,children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/serials",children:Object(w.jsx)(X,{children:Object(w.jsx)(re,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/serials/ontheair",children:Object(w.jsx)(X,{children:Object(w.jsx)(te,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/serials/toprated",children:Object(w.jsx)(X,{children:Object(w.jsx)(ie,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/",children:Object(w.jsx)(X,{children:Object(w.jsx)(Y,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/movies/nowplaying",children:Object(w.jsx)(X,{children:Object(w.jsx)(ee,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/movies",children:Object(w.jsx)(X,{children:Object(w.jsx)(Z,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/movies/toprated",children:Object(w.jsx)(X,{children:Object(w.jsx)(se,{})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/movies/:movieId/details",children:Object(w.jsx)(X,{children:Object(w.jsx)(A,{children:Object(w.jsx)(ae,{})})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/movies/:movieId/videos",children:Object(w.jsx)(X,{children:Object(w.jsx)(A,{children:Object(w.jsx)(ce,{})})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/serial/:serialId/details",children:Object(w.jsx)(X,{children:Object(w.jsx)(W,{children:Object(w.jsx)(ae,{})})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/serial/:serialId/videos",children:Object(w.jsx)(X,{children:Object(w.jsx)(W,{children:Object(w.jsx)(ce,{})})})}),Object(w.jsx)(i.a,{exact:!0,path:"/kinoland/search/:name",children:Object(w.jsx)(X,{children:Object(w.jsx)(ne,{})})})]})})};s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(ue,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.88ccabeb.chunk.js.map