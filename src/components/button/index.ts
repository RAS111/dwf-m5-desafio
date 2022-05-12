export function initCustomButton() {
    class ButtonComponent extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const variant = this.getAttribute("variant") || "primary";
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        const style = document.createElement("style");
        style.innerHTML = `
            .primary {
                background: #006CFC;
                border: 10px solid #001997;
                border-radius: 10px;
                font-family: 'Odibee Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 45px;
                line-height: 50px;
                text-align: center;
                letter-spacing: 0.05em;
                color: #D8FCFC;
                cursor:pointer;
            }
        `;
        button.className = variant;
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
      }
    }
    customElements.define("custom-button", ButtonComponent);
}