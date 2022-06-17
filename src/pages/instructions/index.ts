const fondo = require("url:../../images/fondo.png");
const tijerasImg = require("url:../../images/tijera.png");
const piedraImg = require("url:../../images/piedra.png");
const papelImg = require("url:../../images/papel.png");

export function initInstructionPage(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <section class="instructions-section">
        <custom-text class="title">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
        <custom-button class="button">¡Jugar!</custom-button>
        <div class="images">
            <img class="img" src="${tijerasImg}">
            <img class="img" src="${piedraImg}">    
            <img class="img" src="${papelImg}">
        </div>
    <section>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            background-image: url(${fondo});  
        }

        .container {
            width: 100%;
            height: 100vh;
        }

        .instructions-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            padding: 115px 27px 0px 27px;
            height: 100vh;
        }

        .title {
            margin-bottom: 74px;
            text-align: center;
        }

        .button {
            margin-bottom: 102px;
        }

        .images {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
        }

        .img {
            height: 100%;
        }

        @media (max-width: 360px) {
            .instructions-section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                align-content: center;
                padding: 115px 27px 0px 27px;
                height: 100vh;
                gap: 36px;
            }
        }

        @media (min-width: 390px) {
            .instructions-section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding: 115px 27px 0px 27px;
                height: 100vh;
                align-content: center;
                gap: 88px;
            }
        }

        @media (min-width: 412px) {
            .instructions-section {
                gap: 143px;
            }
        }

        @media (min-width: 414px) {
            .instructions-section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding: 115px 27px 0px 27px;
                height: 100vh;
                align-content: center;
                gap: 134px;
            }
        }

        @media (min-width: 540px) {
            .instructions-section {
                gap: 66px;
            }
        }

        @media (min-width:768px){
            .instructions-section {
                gap: 86px;
            }

            .img {
                height: 200px;
            }
        }

        @media (min-width:820px){
            .instructions-section {
                gap: 165px;
            }

            .img {
                height: 200px;
            }
        }

        @media (min-width: 912px){
            .instructions-section {
                gap: 186px;
            }

            .img {
                height: 300px;
            }
        }

        @media (min-width:1024px){
            .instructions-section {
                gap: 55px;
                padding: 0px;
            }

            .title, .button {
                margin-bottom: 0px;
            }

            .img {
                height: 200px;
            }
        }

        @media (min-width: 1280px){
            .instructions-section {
                gap: 82px;
                padding: 115px 27px 0px 27px;
            }

            .title, .button {
                margin-bottom: 0px;
            }

            .img {
                height: 200px;
            }
        }

        @media(min-width: 1360px){
            .instructions-section {
                gap: 36px;
            }

            .img {
                height: 150px;
            }
        }
    `;

    div.appendChild(style);

    const buttonEl = div.querySelector(".button") as any;

    buttonEl.addEventListener("click", function () {
        params.goTo("/game");
    });

    return div;
}