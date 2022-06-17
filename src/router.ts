import { initHomePage } from "./pages/home";
import { initInstructionPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initTimeOutPage } from "./pages/timeout";
import { initResultsPage } from "./pages/result";

const BASE_URL = "/dwf-m5-desafio";

const routes = [
	{
		path: /\/home/,
		component: initHomePage,
	},
	{
		path: /\/instructions/,
		component: initInstructionPage,
	},
    {
		path: /\/game/,
		component: initGamePage,
	},
    {
        path: /\/timeout/,
		component: initTimeOutPage,
    },
    {
        path: /\/result/,
		component: initResultsPage,
    }
	
];

function isGithubPages() {
	return location.host.includes("github.io");
}

export function initRouter(container: Element) {
    function goTo(path){
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route) {
        console.log("route: ", route)
        
        for(const r of routes) {
            if(r.path.test(route)) {
                const el =  r.component({ goTo: goTo})

                if(container.firstChild) {
                    container.firstChild.remove();
                }
    
                container.appendChild(el as any);
            }
        }
    }

    if(isGithubPages() || location.pathname == "/") {
        goTo("/home");
    }else {
        handleRoute(location.pathname)
    }

    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}