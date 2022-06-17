import { state } from "../../state";

const winnerImg = require("url:../../images/ganaste.png");
const loserImg = require("url:../../images/perdiste.png");
const drawImg = require("url:../../images/empate.png");

export function initResultsPage(params) {
	const div = document.createElement("div");
	div.classList.add("container");

	function getImgResult() {
		const currentState = state.getState();
		if (currentState.history.result == "Ganaste!") {
			return winnerImg;
		} else if (currentState.history.result == "Perdiste") {
			return loserImg;
		} else {
			return drawImg;
		}
	}

    function getScores() {
		const currentState = state.getState();
        console.log(currentState.history.player, currentState.history.computer)
		return [currentState.history.player, currentState.history.computer];
	}

	div.innerHTML = `
    <img class="result-img" src="${getImgResult()}">
    <div class="score-container">
        <h2 class="score-title">Score</h2>
        <p class="player-score">Jugador: ${getScores()[0]}</p>
        <p class="computer-score">Máquina: ${getScores()[1]}</p>
    </div>
    <div class="button-container">
        <custom-button class="restart-button">Volver a Jugar</custom-button>
    </div>
    `;

	const style = document.createElement("style");
	style.textContent = `
        .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 0 30px;
        }

        .result-img {
            width: 200px;
        }

        .result-title {
            margin: 0;
            font-family: "Koulen", sans-serif;
            font-size: 50px;
            font-weight: 400;
        }

        .score-container {
            width: 259px;
            height: 217px;
            background: #FFFFFF;
            border: 10px solid #000000;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
        }

        .score-title {
            font-family: 'Odibee Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 55px;
            letter-spacing: 0.05em;
            margin: 0px;
        }

        .player-score, .computer-score {
            font-family: 'Odibee Sans';
            font-size: 45px;
            letter-spacing: 0.05em;
            margin: 0px;
        }
    `;

	div.appendChild(style);

	const buttonEl = div.querySelector(".restart-button") as any;
	buttonEl.addEventListener("click", () => {
		params.goTo("/instructions");
	});


	return div;
}