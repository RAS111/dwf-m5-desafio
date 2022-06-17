
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
          font-family: 'Permanent Marker', cursive;
          font-style: normal;
          font-weight: 700;
          font-size: 80px;
          line-height: 88.1%;
          color: #009048;
          width: 310px;
          height: 204px;
        }

        .subtitle {
          font-family: 'Permanent Marker', cursive;
          font-style: normal;
          font-size: 80px;
          line-height: 88.1%;
          width: 310px;
          height: 204px;
          text-align: center;
        }

        .body {
          font-family: Odibee Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 100%;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 100px;
            width: 640px;
          }

          .body {
            font-size: 70px;
          }

          .subtitle {
            width: 100%;
          }
        }

        @media (min-width: 912px) {
          .body {
            font-size: 85px;
          }
        }

        @media (min-width: 1024px) {
          .body {
            font-size: 70px;
          }
        }

        @media (min-width: 1280px) {
          .body {
            font-size: 85px;
          }
        }
    `;
    div.className = variant;
    div.textContent = this.textContent;
    shadow.appendChild(div);
    shadow.appendChild(style);
  }
}
customElements.define("custom-text", TextComponent);

  