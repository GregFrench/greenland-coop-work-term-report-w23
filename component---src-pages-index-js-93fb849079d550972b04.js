(self.webpackChunkgreenland_coop_work_term_report_w23=self.webpackChunkgreenland_coop_work_term_report_w23||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!a(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",l),d}}},7998:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return xe}});var r,o,a,i,l=n(7294),s=n(5697),c=n.n(s),u=n(4839),d=n.n(u),h=n(2993),p=n.n(h),f=n(6494),m=n.n(f),g="bodyAttributes",y="htmlAttributes",w="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",E="href",A="http-equiv",k="innerHTML",S="itemprop",I="name",C="property",O="rel",P="src",j="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",M="defer",L="encodeSpecialCharacters",_="onChangeClientState",H="titleTemplate",N=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),F=[b.NOSCRIPT,b.SCRIPT,b.STYLE],q="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=X(e,b.TITLE),n=X(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,R);return t||r||void 0},K=function(e){return X(e,_)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],s=l.toLowerCase();-1===t.indexOf(s)||n===O&&"canonical"===e[n].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==k&&l!==T&&l!==S||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],s=m()({},r[l],o[l]);r[l]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,h=e.titleAttributes;se(b.BODY,r),se(b.HTML,o),le(d,h);var p={baseTag:ce(b.BASE,n),linkTags:ce(b.LINK,a),metaTags:ce(b.META,i),noscriptTags:ce(b.NOSCRIPT,l),scriptTags:ce(b.SCRIPT,c),styleTags:ce(b.STYLE,u)},f={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,f,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(b.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(q):n.getAttribute(q)!==i.join(",")&&n.setAttribute(q,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(q,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},he=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=de(n,r),[l.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===k||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,h=e.titleAttributes;return{base:he(b.BASE,t,r),bodyAttributes:he(g,n,r),htmlAttributes:he(y,o,r),link:he(b.LINK,a,r),meta:he(b.META,i,r),noscript:he(b.NOSCRIPT,l,r),script:he(b.SCRIPT,s,r),style:he(b.STYLE,c,r),title:he(b.TITLE,{title:d,titleAttributes:h},r)}},fe=d()((function(e){return{baseTag:J([E,j],e),bodyAttributes:V(g,e),defer:X(e,M),encode:X(e,L),htmlAttributes:V(y,e),linkTags:$(b.LINK,[O,E],e),metaTags:$(b.META,[I,v,A,C,S],e),noscriptTags:$(b.NOSCRIPT,[k],e),onChangeClientState:K(e),scriptTags:$(b.SCRIPT,[P,k],e),styleTags:$(b.STYLE,[T],e),title:Q(e),titleAttributes:V(w,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),me=(o=fe,i=a=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return z({},o,((t={})[r.type]=i,t.titleAttributes=z({},a),t));case b.BODY:return z({},o,{bodyAttributes:z({},a)});case b.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((n={})[r.type]=z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(o,r)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind;var ge=n.p+"static/greenland-logo-c407e8eeec273f986434c51981a07469.png",ye=n.p+"static/react-icon-7fc1ee8dcf2d6567f645d2243800563d.png",we=n.p+"static/os-icon-c5ea348605f7d9eefff54a258e4dbc9d.png",be=n.p+"static/api-icon-b7d2b22ae5c861b41d2742e12e103353.png",ve=n.p+"static/threats-water-quality-1fdbd599af3b57ad05a153424140e3f5.png",Te={backgroundColor:"#FFFFFF",color:"#232129",paddingBottom:50,paddingTop:50,fontFamily:"-apple-system, Roboto, sans-serif, serif"},Ee={fontSize:"28px",marginTop:0,marginBottom:32,textAlign:"center"},Ae={fontSize:"18px"},ke={marginBottom:25,textAlign:"center"},Se={width:"50%"},Ie={paddingRight:"15px"},Ce={maxHeight:"100px",maxWidth:"100px"},Oe={display:"flex"},Pe={marginTop:10,textAlign:"center"},je={display:"block",margin:"auto",maxWidth:"75%"},xe=function(){return l.createElement("main",{style:Te},l.createElement(me,null,l.createElement("meta",{charSet:"utf-8"}),l.createElement("title",null,"Greenland Co-op Winter 2023 Work Term Report")),l.createElement("div",{id:"content"},l.createElement("title",null,"Greenland Co-op Winter 2023 Work Term Report"),l.createElement("div",{style:ke},l.createElement("img",{src:ge,style:Se,alt:"Greenland Logo"})),l.createElement("h1",{style:Ee},"Greenland Co-op Winter 2023 Work Term Report"),l.createElement("h2",{style:Ae},"Introduction"),l.createElement("p",null,"My name is Greg French and I‘m a 4th-year computer science co-op student at the University of Guelph. The following is the final report for my 4th co-op work term, highlighting my experience at Greenland over the winter of 2023, as well as giving an overview of the goals I had made at the beginning of the term and my progress in achieving them. I had previously completed my 3rd co-op term at Greenland over the summer of 2022. At the end of that term, they asked if I‘d like to return. We came to an agreement for me to return the following winter. The following is my experience."),l.createElement("h2",{style:Ae},"About Greenland"),l.createElement("p",null,"Greenland is an engineering consulting firm based in Collingwood Ontario. The firm works in conjunction with individuals across governments, industry, and academia on many different engineering projects. The company is spread across multiple divisions, with some employees working in the office and others working remotely from home. With the software team that I was a part of working entirely remotely, the primary method of communication was over Microsoft Teams. Teams enables the ability to instantly message coworkers whenever something is needed, such as help with a software issue or requesting access to a company resource. It also enables the ability to hop on a call with someone if you need additional assistance in solving a problem, or need more clarification with the task at hand. Everyone is very cordial and willing to help at a moment's notice."),l.createElement("h2",{style:Ae},"Job Description"),l.createElement("p",null,"As a software developer, the most significant task I had throughout the term was building out the Software Monitoring and Alerts System (SMAS). This is an internal web application that monitors various aspects of Greenland’s existing EC2 instances and sends alerts to employees over email and SMS if it notices an existing issue. Some of the aspects that SMAS tracks are volume storage, CPU load, memory usage, the healthiness of endpoints, and error logs. The front end was built from the ground up entirely in React, with the assistance of an existing dashboard template. The backend was built with Python Flask which managed the entire API for the application and was responsible for making calls to the database and sending that data back as a response to the client using JSON objects. The DBMS that is used is Postgresql, with the database schema being integrated on top of their existing database infrastructure. I also built an internal library that was installed on each instance used for SMAS that was responsible for collecting all server data and then sending that data back to the backend server to be stored in the database."),l.createElement("p",null,"The main software application the software team at Greenland works on is called THREATS. THREATS is a web application used for tracking changes in environmental data over time such as air quality and water quality. The platform itself is mainly written in PHP, jQuery, and Python and utilizes many AWS EC2 instances, each handling different parts of the application. Each instance may also have zero or more Docker containers, each running a separate sub-application used to support the larger application. As you can probably infer, managing all of this can be quite complex. SMAS helps deal with this complexity by storing all data collected in one central place, making it easy to track specific issues across many different instances."),l.createElement("p",null,l.createElement("figure",null,l.createElement("img",{src:ve,style:je,alt:"THREATS - Air Quality Alberta"}),l.createElement("figcaption",{style:Pe},l.createElement("em",null,"THREATS: Water Quality Tool")))),l.createElement("p",null,"The second most significant task I had at Greenland was the integration of React into the front end of the main THREATS platform. The goal was to have the original codebase still written in jQuery, while any new features developed would be written in React. This initially proved challenging as the bulk of the code running on the front end is written in jQuery, a library that does not exactly play nice with React out of the box. However, utilizing a rapid development tool called Vite.js along with a few tricks up my sleeve, I was able to get it integrated and working properly."),l.createElement("p",null,"Once React was properly integrated into THREATS, another big issue that came up was that of sending data produced by the application running the jQuery code and passing that data into a React component so that they could communicate with one another. Solving this issue in my opinion was the most clever trick I came up with throughout the term. The solution involved attaching a custom object to the window object used by one of the jQuery scripts and setting up a watcher for that custom object from one of the React components. Then whenever data is updated in the jQuery script, the watcher event would fire, executing a callback that would update the local state of that React component. The React component would then be free to do whatever it wanted with the data. This came in especially useful for the new dashboard feature I was building within THREATS that required knowing how big the resizable panel it was contained in was. Users could expand this panel to display more or less data on the screen. With this panel controlled by jQuery, the panel width could now be passed into the React component, letting the component know the exact size of the panel it was residing in, allowing it to perfectly tailor the content on the screen based on the width."),l.createElement("h2",{style:Ae},"Goals"),l.createElement("p",null,"Around the beginning of my co-op term, I made three 3 different goals that I would work to achieve throughout the term. The following are those goals:"),l.createElement("div",{style:Oe},l.createElement("div",{style:Ie},l.createElement("p",null,l.createElement("img",{src:ye,style:Ce,alt:"React Icon"}))),l.createElement("div",null,l.createElement("p",null,l.createElement("strong",null,"Further Improve on React Programming Skills -")," my first goal was to improve my overall React programming skills. React has become a very important part of my software engineering toolkit over the years. As it is one of the most useful tools for building modern web and mobile applications on the front end, it is imperative that I continue building this skillset so that I can continue to provide more and more value, and have that value compound over time, years into the future."),l.createElement("p",null,"During the co-op term, one of the ways I was able to heavily use React was during the development of the new SMAS platform, as the front end for this application was built entirely in React. This meant building out components for each page, using libraries to render things like charts and modals, building out helper components to be used across page components, utilizing local state, and using both built-in as well as custom hooks to achieve the different functionality that was required for each page. This experience allowed me to get more comfortable with React, building upon the skills I already had which allows me to further utilize these skills well into the future."))),l.createElement("div",{style:Oe},l.createElement("div",{style:Ie},l.createElement("p",null,l.createElement("img",{src:we,style:Ce,alt:"OS Icon"}))),l.createElement("div",null,l.createElement("p",null,l.createElement("strong",null,"Improve on Operating Systems Knowledge -")," my second goal was to improve my overall operating systems knowledge. Becoming proficient in operating systems is a very important skill for any computer scientist to have. This is because operating systems are crucial components of just about any application you build for. Whether you are building a web application, mobile application, an IoT device, or something similar, you will most certainly be building on top of an operating system, so it is very important to know how they work and how you can leverage them to solve problems in the real world."),l.createElement("p",null,"Over the co-op term, when building out the SMAS application, I built out the internal library that was used to help gather system data from each instance and send it to the backend API using REST API calls. This data was collected via system calls to the operating system, data such as volume storage, CPU load, and memory usage were all collected periodically via cron jobs that were scheduled to operate at different intervals for each instance on the machine. Another aspect that was important to the system was the collecting and reporting of error log data that the machine had generated whenever an error occurred. This allowed an error alert to be sent over both email and SMS whenever an error occurred, allowing developers on the team to take action on a system failure a lot sooner, nipping problems in the bud before they snowball and become much bigger system failures. This experience allowed me to build on my fundamental operating systems knowledge, a skill I will continue to build on going into the future."))),l.createElement("div",{style:Oe},l.createElement("div",{style:Ie},l.createElement("p",null,l.createElement("img",{src:be,style:Ce,alt:"API Icon"}))),l.createElement("div",null,l.createElement("p",null,l.createElement("strong",null,"Improve API Design Skills -")," my third goal was to improve my overall API design skills. Having good API design skills is a very important aspect of application building. Knowing how to design and build an API that is clean, easy to modify, and easy to extend is an important skill to have in the past, in the present, and the future. APIs are certainly not going away anytime soon, so the earlier you get good at building APIs, the better."),l.createElement("p",null,"The greatest example of improving my API design skills came when developing the SMAS application. For this application, I wrote the entire backend API using Python Flask. This API was developed in conjunction with the React frontend, allowing me to perfectly anticipate exactly what data needed to be fetched from the database for each endpoint, the naming of each endpoint, and where each endpoint should be located within the API. This also included setting up routing for all routes used by the app, building out all core methods associated with each route, and building out all helper methods to be used across multiple core route methods. Building out the entire API for this application has allowed me to level up my API design skills to a place I‘m both proud of currently, as well as putting myself in a good position to continue growing into the future."))),l.createElement("h2",{style:Ae},"Conclusions"),l.createElement("p",null,"In conclusion, over my past co-op work term, I was able to grow tremendously as a developer. Working at Greenland enabled me to work day in and day out on a multitude of different technologies and platforms, and grow my skills in areas such as React, operating systems, and API design. These skills will be with me for a long time as I continue this journey along this ever-evolving software landscape."),l.createElement("h2",{style:Ae},"Acknowledgments"),l.createElement("p",null,"I‘d like to thank Mark Palmer for originally hiring me and allowing me the opportunity to work at the organization. I‘d also like to thank Trevor Boston for being a good boss overall and providing help and guidance whenever it was needed.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-93fb849079d550972b04.js.map