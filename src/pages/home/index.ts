
//Images
const fondo = require("url:../../images/fondo.png");
const tijerasImg = require("url:../../images/tijera.png");
const piedraImg = require("url:../../images/piedra.png");
const papelImg = require("url:../../images/papel.png");

export function initHomePage(params) {
    const div = document.createElement("div");
    div.classList.add("root");
    div.innerHTML = `
    <main>
        <section class="home-section">
            <custom-text class="title" variant="title">Piedra Papel ó Tijera</custom-text>
            <custom-button class="button">Empezar</custom-button>
            <div class="images">
                <img class="img" src="${tijerasImg}">
                <img class="img" src="${piedraImg}">    
                <img class="img" src="${papelImg}">
            </div>
        </section>
    </main>

    `;

    const style = document.createElement("style");
    style.innerHTML = `
        body {
            background-image: url(${fondo});
        }

        .root {
            width: 100%;
            height: 100vh;
        }

        .home-section {
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
        }

        .button {
            margin-bottom: 58px;
        }

        .images {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
        }

        @media (max-width: 360px) {
            .images {
                margin-top: 70px;
            }
        }


        @media (min-width: 390px){
            .home-section {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                align-items: center;
                justify-content: flex-start;
                gap: 88px;
            }
        }

        @media (min-width: 412px){
            .home-section {
                gap: 123px;
            }
        }

        @media (min-width: 414px){
            .home-section {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                align-items: center;
                justify-content: flex-start;
                gap: 114px;
            }
        }

        @media (min-width: 540px) {
            .title, .button, .images {
                margin: 0px;
            }

            .home-section {
                gap: 92px;
            }
        }

        @media (min-width: 768px) {
            .home-section {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                align-items: center;
                justify-content: flex-start;
                gap: 177px;
            }

            .images {
                margin: 0px;
            }

            .img {
                height: 200px
            }
        }

        @media (min-width: 820px){
            .home-section {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                align-items: center;
                justify-content: flex-start;
                gap: 256px;
            }

            .img {
                height: 200px;
            }
        }

        @media (min-width: 912px) {
            .home-section {
                gap: 349px;
            }
        }

        @media (min-width: 1024px) {
            .home-section {
                padding: 0px;
                gap: 23px;
            }
        }

        @media (min-width: 1280px){
            .home-section {
                padding: 115px 27px 0px 27px;
                gap: 65px;
            }
        }

        @media (min-width: 1360px){
            .home-section {
                gap: 23px;
            }

            .img {
                height: 100%;
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
