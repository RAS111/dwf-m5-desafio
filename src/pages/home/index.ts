export function initHomePage(params) {
    const div = document.createElement("div");
    div.innerHTML = `
      <main>
        <section>
            <custom-text variant="title">Piedra Papel <custom-text variant="span">ó</custom-text>  Tijera</custom-text>
            <custom-button>Empezar</custom-button>
        <section>
      </main
    
    `;
  
    const style = document.createElement("style");
    style.innerHTML = `
      
    `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", () => {
      params.goTo("/desafio-modulo-5/instructions");
    });
    return div;
  }
  