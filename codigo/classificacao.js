const item = $input.first();

// Pega resposta Gemini
const texto = item.json.content.parts[0].text;

// Converte texto JSON do Gemini em objeto
const dados = JSON.parse(texto);

// Soma os cinco critérios
const pontuacao =
  dados.cores +
  dados.roupa +
  dados.cabelo +
  dados.acessorios +
  dados.detalhes_pequenos;

// Define complexidade
let complexidade;

if (pontuacao <= 8) {
  complexidade = "Básica";
} else if (pontuacao <= 12) {
  complexidade = "Média";
} else {
  complexidade = "Elaborada";
}

// Retorna dados organizados
return [
  {
    json: {
      cores: dados.cores,
      roupa: dados.roupa,
      cabelo: dados.cabelo,
      acessorios: dados.acessorios,
      detalhes_pequenos: dados.detalhes_pequenos,
      pontuacao: pontuacao,
      complexidade: complexidade
    }
  }
];
