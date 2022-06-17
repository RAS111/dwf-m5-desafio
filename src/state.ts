
type Jugada = "piedra" | "papel" | "tijeras";

type Game = {
	computerPlay: Jugada;
	myPlay: Jugada;
};

const state = {
	data: {
		currentGame: {
			computerPlay: "", 
			myPlay: "",
		},
		history: {
			computer: "0",
			player: "0",
			result: "",
		},
	},
	listeners: [],

	init() {
		const localData = JSON.parse(localStorage.getItem("game-state-cache") as any);
		if (!localData) {
			return;
		} else {
			this.setState(localData);
		}
	},

	getState() {
		return this.data;
	},

	setState(newState: any) {
		this.data = newState; 
		for (const callback of this.listeners) {
			callback();
		}
		localStorage.setItem("game-state-cache", JSON.stringify(newState));
	},

	setMoves(myMove, computerMove) {
		const currentState = this.getState();
		currentState.currentGame.myPlay = myMove;
		currentState.currentGame.computerPlay = computerMove;

		this.whoWins(myMove, computerMove);

		this.setState(currentState);
	},
	whoWins(myPlay: Jugada, computerPlay: Jugada) {
		const currentState = this.getState();
		if (
			(myPlay == "piedra" && computerPlay == "tijeras") ||
			(myPlay == "tijeras" && computerPlay == "papel") ||
			(myPlay == "papel" && computerPlay == "piedra")
		) {
			currentState.history.player++;
			currentState.history.result = "Ganaste!";
		} else if (myPlay == computerPlay) {
			currentState.history.result = "Empate";
		} else {
			currentState.history.computer++;
			currentState.history.result = "Perdiste";
		}
	},

	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
};
// modificar cosas
export { state };
