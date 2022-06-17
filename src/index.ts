import "./components/textComponent";
import "./components/buttonComponent";
import "./components/handComponent";
import "./components/timerComponent"
import { initRouter } from "./router";


(function() {
    const root = document.querySelector(".root");
    initRouter(root);
})();