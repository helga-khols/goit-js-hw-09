function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector('button[type="submit"]');let d=0,a=0,s=0;function f(t,n){new Promise(((e,o)=>{setTimeout((()=>{Math.random()>.3?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}l.addEventListener("input",(function(e){e.preventDefault(),d=Number(l.delay.value),a=Number(l.step.value),s=Number(l.amount.value)})),u.addEventListener("click",(function(e){e.preventDefault();for(let e=0;e<s;e++)f(e+1,d),d+=a,e+1===s&&(d=0)}));
//# sourceMappingURL=03-promises.7dbf6af2.js.map