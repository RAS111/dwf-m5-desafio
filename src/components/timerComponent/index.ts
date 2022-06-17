class TimerComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: "open" });
	constructor() {
		super();

		this.countdown();
	}

	render(timeLeft) {
		this.shadow.innerHTML = `
        <div class="seconds-container">
            <h2 class="seconds">${timeLeft}</h2>
        </div>
        `;

		const style = document.createElement("style");
		style.textContent = `
            .seconds-container {
                width: 243px;
				height: 243px;
				color: black;
				display: flex;
				align-content: center;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				border: 30px solid black;
            }

			.seconds {
				font-size: 140px;
			}

			@media (min-width: 768px) {
				.seconds-container {
					width: 300px;
					height: 300px;
				}
			}

        `;
		this.shadow.appendChild(style);
	}

	countdown() {
		let counter = 3;
		const intervals = setInterval(() => {
			if (counter >= 0) {
				this.render(counter);
				counter--;
			} else {
				clearInterval(intervals);
			}
		}, 1000);
	}
}
customElements.define("custom-timer", TimerComponent);
