const hands = {
	tijeras: require("url:../../images/tijera.png"),
	piedra: require("url:../../images/piedra.png"),
	papel: require("url:../../images/papel.png"),
};

class CustomHand extends HTMLElement {
	shadow = this.attachShadow({ mode: "open" });
	constructor() {
		super();

		const style = document.createElement("style");
		style.textContent = `
			.hand-img {
				margin: 10px 10px 0px 10px;
			}

			.hand-img:hover {
				width: 100px;
			}
			

			@media (min-width: 768px) {
				.hand-img {
					height: 300px;
				}
			}

			@media(min-width: 1024px) {
				.hand-img {
					height: 100%;
				}
			}

			@media (min-width: 1280px) {
				.hand-img {
					height: 300px;
				}
			}

			@media(min-width: 1360px) {
				.hand-img {
					height: 200px;
				}
			}
		`;

		this.render();
		this.shadow.appendChild(style);
	}

	connectedCallback() {}

	addListeners() {
		this.addEventListener("click", () => {
			const event = new CustomEvent("selectHand", {
				detail: {
					handPlay: this.getAttribute("hand"),
				},
			});
			this.dispatchEvent(event);
		});
	}

	render() {
		const type = this.getAttribute("type");
		const hand = this.getAttribute("hand") as any;
		this.shadow.innerHTML = `
		<div class="play-button" type="${type}"><img class="hand-img" src="${hands[hand]}"></div>
		`;
	}
}

customElements.define("custom-hand", CustomHand);
