# Chatbot de Orçamento Artesanal

Protótipo de chatbot com Inteligência Artificial desenvolvido para auxiliar na geração automatizada de orçamentos de produtos artesanais.

## Sobre o projeto

Este projeto faz parte do Trabalho de Conclusão de Curso (TCC) em Engenharia de Computação.

A proposta consiste no desenvolvimento de um chatbot capaz de analisar a descrição de um produto artesanal solicitada pelo cliente, identificar características da peça e classificá-la de acordo com seu nível de complexidade.

O protótipo atual está sendo desenvolvido inicialmente para a classificação de chaveiros artesanais de biscuit.

## Funcionamento

Atualmente, o fluxo realiza as seguintes etapas:

1. Recebe a descrição do pedido do cliente;
2. Envia a descrição para um modelo de Inteligência Artificial;
3. A IA analisa critérios como cores, roupa, cabelo, acessórios e pequenos detalhes;
4. Cada critério recebe uma pontuação;
5. Um código JavaScript soma as pontuações;
6. O produto é classificado como Básico, Médio ou Elaborado.

## Tecnologias utilizadas

- n8n — automação e construção do fluxo;
- Google Gemini — análise da descrição do pedido;
- JavaScript — cálculo da pontuação e classificação;
- GitHub — armazenamento do código e documentação.

## Estrutura do repositório

```text
chatbot-orcamento-artesanal/
│
├── README.md
│
├── workflow/
│   ├── README.md
│   └── fluxo-n8n.json
│
├── codigo/
│   └── classificacao.js
│
└── documentacao/
    └── README.md
```

## Autora

Sebastiana de Paula Luz Sousa
Bacharelado em Engenharia de Computação
