var e=document.querySelectorAll("thead th"),t=document.querySelectorAll("tbody tr");e.forEach(function(e,r){e.addEventListener("click",function(){var e;(e=Array.from(t)).sort(function(e,t){var n=e.cells[r].textContent,o=t.cells[r].textContent;return n.localeCompare(o,void 0,{numeric:!0})}),e.forEach(function(e){return e.parentNode.append(e)})})});
//# sourceMappingURL=index.4acd8fdd.js.map
