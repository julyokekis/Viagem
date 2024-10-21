function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}


function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}

let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de lugares para conhecer");
  createSpan("Quanto você pode gastar R$");
  campoOrcamento = createInput("1000");
  campoPraia = createCheckbox("Gosta de Praia?");
  campoCidadeGrande = createCheckbox("Gosta de cidades grandes?");
}

function draw() {
  background("white");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDePraia = campoPraia.checked();
  let gostaDeCidadesGrandes = campoCidadeGrande.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(25);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes) {
  if (orcamento >= 1000) {
    if (gostaDePraia) {
      return "Rio de Janeiro - ótimo para quem gosta de praias e cidade grande.";
    } else if (gostaDeCidadesGrandes) {
      return "São Paulo - ideal para quem gosta do agito das grandes cidades.";
    } else {
      return "Gramado - perfeito para quem busca um lugar tranquilo e charmoso.";
    }
  } else if (orcamento >= 500) {
    if (gostaDePraia) {
      return "Búzios - excelente para quem quer praias lindas com orçamento moderado.";
    } else if (gostaDeCidadesGrandes) {
      return "Curitiba - uma grande cidade com muitos parques e um custo de vida razoável.";
    } else {
      return "Ouro Preto - cidade histórica com muita cultura e beleza.";
    }
  } else {
    if (gostaDePraia) {
      return "Maragogi - conhecida como o Caribe brasileiro, com preços mais acessíveis.";
    } else if (gostaDeCidadesGrandes) {
      return "Belo Horizonte - cidade grande com muita cultura e opções de lazer econômicas.";
    } else {
      return "Petrópolis - cidade com clima de montanha e muita história.";
    }
  }
}

