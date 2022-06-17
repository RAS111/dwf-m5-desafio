const fondo = require("url:../../images/fondo.png");

export function initTimeOutPage(params){
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <section class="timeOut-section">
        <custom-text class="title" variant="subtitle"> Se te acabó el tiempo</custom-text>
        <custom-button class="button">Volver a jugar</custom-button>
    </section>
    `;

    const style = document.createElement("style");
    style.innerHTML = ` 
        body {
            background-image: url(${fondo});
        }
        
        .timeOut-section {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
            gap: 190px;
        }

        .title {
            margin-top: 100px;
        }


        @media (max-width: 360px) {

            .title {
                margin-top: 100px !important;
            }
        }

        @media (max-width: 414px) {
            .timeOut-section {
                gap: 200px;
            }

            .title {
                margin-top: 200px;
            }
        }

        @media (min-width: 768px) {
            .timeOut-section {
                height: 100vh;
                justify-content: space-evenly;
                gap: 0px;
            }
        }
    `;
    div.appendChild(style);

    const buttonEl = div.querySelector(".button") as any;

    buttonEl.addEventListener("click", function () {
        params.goTo("/instructions");
    });

    return div;
}