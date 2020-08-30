(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(125));const i={id:"standalone",title:"Standalone Profiling"},a={id:"standalone",isDocsHomePage:!1,title:"Standalone Profiling",description:"Skyline also supports standalone profiling (i.e. profiling from the command",source:"@site/docs/standalone.md",permalink:"/docs/standalone",editUrl:"https://github.com/skylineprof/skyline/edit/master/website/docs/standalone.md",sidebar:"sidebar",previous:{title:"Remote Projects",permalink:"/docs/remote"},next:{title:"Command Line Interface",permalink:"/docs/cli"}},c=[{value:"Preparing Your Code",id:"preparing-your-code",children:[]},{value:"Run Time Profiling",id:"run-time-profiling",children:[]},{value:"Memory Profiling",id:"memory-profiling",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Skyline also supports standalone profiling (i.e. profiling from the command\nline like a traditional profiler). Standalone profiling is useful when you just\nwant access to Skyline\'s profiling functionality. Skyline will save the\nprofiling results (called a "report") into a ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.sqlite.org/"}),"SQLite database\nfile")," that you can then query yourself. We describe\nthe database schema for Skyline's run time and memory reports in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/run-time-report"}),"Run Time\nReport Format")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/memory-report"}),"Memory Report Format"),"\npages respectively."),Object(o.b)("h2",{id:"preparing-your-code"},"Preparing Your Code"),Object(o.b)("p",null,"You do not need to do anything special to prepare your code for standalone\nprofiling. You only need to write an ",Object(o.b)("em",{parentName:"p"},"entry point")," file just as if you were\ngoing to start an interactive profiling session. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting\nStarted")," page for an example of an entry point file."),Object(o.b)("h2",{id:"run-time-profiling"},"Run Time Profiling"),Object(o.b)("p",null,"To have Skyline perform run time profiling, you use the ",Object(o.b)("inlineCode",{parentName:"p"},"skyline time"),"\nsubcommand. In addition to the entry point file, you also need to specify the\nfile where you want Skyline to save the run time profiling report using the\n",Object(o.b)("inlineCode",{parentName:"p"},"--output")," or ",Object(o.b)("inlineCode",{parentName:"p"},"-o")," flag."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Just like when you use ",Object(o.b)("inlineCode",{parentName:"p"},"skyline interactive"),", you need to place your shell\ninside the project root and you need to specify a relative path to your entry\npoint file."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/my/project/root\nskyline time entry_point.py --output my_output_file.sqlite\n")),Object(o.b)("h2",{id:"memory-profiling"},"Memory Profiling"),Object(o.b)("p",null,"Launching memory profiling is almost the same as launching run time profiling.\nYou just need to use ",Object(o.b)("inlineCode",{parentName:"p"},"skyline memory")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"skyline time"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/my/project/root\nskyline memory entry_point.py --output my_output_file.sqlite\n")))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);