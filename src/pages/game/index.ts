const fondo = require("url:../../images/fondo.png");
import { state } from "../../state";

export function initGamePage(params) {
    let counter = 3;

	const intervals = setInterval(() => {
		counter--;
		if (counter < -1) {
			clearInterval(intervals);
			params.goTo("/timeout",);
		}
	}, 1000)

    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <custom-timer class="timer"></custom-timer>
    <div class="images">
        <custom-hand class="hand" type="tijeras" hand="tijeras"></custom-hand>
        <custom-hand class="hand" type="piedra" hand="piedra"></custom-hand>
        <custom-hand class="hand" type="papel" hand="papel"></custom-hand>
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            background-image: url(${fondo});  
        }
        .images {
            display: flex;
			justify-content: center;
			align-content: center;
			margin-top: 151px;
        }

		.timer{
			height: 243px;
			display: flex;
			align-content: center;
			justify-content: center;
			align-items: center;
			margin-top: 128px;
		}

		@media (max-width: 280px) {
			.images {
				margin-top: 139px !important;
			}
		}

		@media (max-width: 360px) {
			.images {
				margin-top: 226px;
			}
		}

		@media (min-width: 390px) {
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				align-items: center;
				gap: 270px;
			}

			.images {
				margin-top: 0px;
			}

			.timer {
				height: 303px;
			}
		}

		@media (min-width: 412px) {
			.container {
				gap: 269px;
			}
			.images {
				margin-top: 71px;
			}
		}

		@media (min-width: 414px) {
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				align-items: center;
				gap: 322px
			}

			.images {
				margin-top: 0px;
			}

			.timer {
				height: 303px;
			}
		}

		@media (min-width: 540px) {
			.container {
				gap: 146px;
			}
		}

		@media(min-width: 768px) {
			.container {
				gap: 279px;
			}
		}

		@media (min-width: 820px) {
			.container {
				gap: 435px;
			}
		}

		@media (min-width: 912px){
			.container {
				gap: 623px;
			}
		}

		@media (min-width: 1024px){
			.container {
				gap: 125px;
			}

			.timer {
				margin-top: 29px;
			}
		}

		@media (min-width: 1280px){
			.container {
				gap: 154px;
			}
		}

		@media (min-width: 1360px) {
			.container {
				gap: 110px;
			}
		}
    `;

    div.appendChild(style);


    const images = div.querySelector(".images").children;
	
	for (const play of images) {
		play.addEventListener("click", (e) => {
			e.preventDefault();
			const myPlay = play.getAttribute("type");
			const computerPlay = ["piedra", "papel", "tijeras"][
				Math.trunc(Math.random() * 3)
			];
			console.log(myPlay, computerPlay);
			state.setMoves(myPlay, computerPlay);

			const style = document.createElement("style");

			style.textContent = `

				.computerPlay-container {
					height: 64vh;
					display: flex;
					justify-content: center;
					align-content: center;
				}

				.myPlay-container {
					display: flex;
					align-items: flex-end;
					justify-content: center;
				}

				@media (min-width: 280px) {
					.computerPlay-container {
    					height: 63vh;
					}
				}

				@media (min-width: 360px) {
					.computerPlay-container {
						height: 68vh;
					}
				}

				@media (min-width: 390px) {
					.computerPlay-container {
						height: 71vh;
					}
				}

				@media (min-width: 414px) {
					.computerPlay-container {
						height: 73vh;
					}
				}

				@media (min-width: 540px) {
					.computerPlay-container {
						height: 67vh;
					}
				}

				@media (min-width: 768px) {
					.computerPlay-container {
						height: 76vh;
					}
				}

				@media(min-width: 820px) {
					.computerPlay-container {
						height: 80vh;
					}
				}

				@media (min-width: 912px) {
					.computerPlay-container {
						height: 82vh;
					}
				}

				@media (min-width: 1024px) {
					.computerPlay-container {
						height: 60vh;
					}
				}

				@media (min-width: 1280px){
					.computerPlay-container {	
						height: 70vh;
					}
				}

				@media (min-width: 1360px) {
					.computerPlay-container {
						height: 63vh;
					}
				}
			`;

			div.innerHTML = `
			<div class="computerPlay-container">
			<custom-hand class="computer-hand" type="${computerPlay}" hand="${computerPlay}">
			</custom-hand>
			</div>
			<div class="myPlay-container">
			<custom-hand class="player-hand" type="${myPlay}" hand="${myPlay}"></custom-hand>
			</div>
			`;

			const playerHand = div.querySelector(".player-hand") as any;
			const playerHandImg =
			playerHand.shadowRoot.querySelector(".hand-img");
			playerHandImg.setAttribute(
				"style",
						`
						height: 100%;
						width: 100px;
					`,
			);

			const computerHand = div.querySelector(".computer-hand") as any;
			const computerHandImg =
			computerHand.shadowRoot.querySelector(".hand-img");
			computerHandImg.setAttribute(
				"style",
					`
					height: 100%;
					width: 100px;
					transform: rotate(180deg);
				`
			);

			div.appendChild(style);

			let counterResult = 0.7;
			const intervalResultAppearance = setInterval(() => {
				counterResult--;
				if (counterResult < 0) {
					clearInterval(intervals);
					clearInterval(intervalResultAppearance);
					params.goTo("/result");
				}
			}, 1000);
		});
	}

    return div;
}