!function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.getAttribute("variant")||"body",e=this.attachShadow({mode:"open"}),n=document.createElement("div"),o=document.createElement("style");o.innerHTML="\n            .title {\n                font-family: 'American Typewriter';\n                font-style: normal;\n                font-weight: 700;\n                font-size: 80px;\n                line-height: 88.1%;\n                color: #009048;\n            }\n        ",n.className=t,n.textContent=this.textContent,e.appendChild(n),e.appendChild(o)}}customElements.define("custom-text",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.getAttribute("variant")||"primary",e=this.attachShadow({mode:"open"}),n=document.createElement("button"),o=document.createElement("style");o.innerHTML="\n            .primary {\n                background: #006CFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n                font-family: 'Odibee Sans';\n                font-style: normal;\n                font-weight: 400;\n                font-size: 45px;\n                line-height: 50px;\n                text-align: center;\n                letter-spacing: 0.05em;\n                color: #D8FCFC;\n                cursor:pointer;\n            }\n        ",n.className=t,n.textContent=this.textContent,e.appendChild(n),e.appendChild(o)}}customElements.define("custom-button",t)}();
//# sourceMappingURL=index.45afd76c.js.map
