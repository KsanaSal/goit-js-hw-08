!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),d?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=b();if(O(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?m(n,a-(e-c)):n}(e))}function w(e){return f=void 0,g&&o?p(e):(o=i=void 0,u)}function S(){var e=b(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=h(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(h(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},S.flush=function(){return void 0===f?u:w(b())},S}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");document.querySelector("[name = email]").value="fgh";var O=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(O);var T={email:"",message:""};j.addEventListener("input",n((function(e){"email"===e.target.name?T.email=e.target.value:"message"===e.target.name&&(T.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(T)),console.log(T),console.log(e.target.name),console.dir(e.target),console.dir(e.currentTarget)}),500)),console.log("feedbackForm"),j.children[0].value="hjh"}();
//# sourceMappingURL=03-feedback.422d6eb4.js.map
