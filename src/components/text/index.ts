export function initCustomText() {
    class TextComponent extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const variant = this.getAttribute("variant") || "body";
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
            .title {
                font-family: 'American Typewriter';
                font-style: normal;
                font-weight: 700;
                font-size: 80px;
                line-height: 88.1%;
                color: #009048;
            }
        `;
        div.className = variant;
        div.textContent = this.textContent;
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
    customElements.define("custom-text", TextComponent);
}
  