!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.605d3da1.js.map
