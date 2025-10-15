function tamanhoTexto(botao) {
    // Obtém todos os elementos de parágrafo (p) da página
    let p = document.querySelectorAll("p");

    // Para cada elemento "p"
    for (let i = 0; i < p.length; i++) {
      // Obtém o tamanho da fonte do parágrafo atual 
      let tamanhoAtual = parseFloat(window.getComputedStyle(p[i]).fontSize);
      
      // Aumenta ou diminui o tamanho da fonte dependendo do texto do botão
      if(botao.textContent == "A+") {
        // Aumenta 2px o tamanho da fonte do parágrafo atual
        p[i].style.fontSize = (tamanhoAtual + 2) + "px";
      } else if (botao.textContent == "A-") {
        // Diminui 2px o tamanho da fonte do parágrafo atual
        p[i].style.fontSize = (tamanhoAtual - 2) + "px";
      }
    }
  }