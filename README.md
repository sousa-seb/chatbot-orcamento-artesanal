# Chatbot de Orçamento Artesanal

Protótipo de chatbot com Inteligência Artificial desenvolvido para auxiliar na geração automatizada de orçamentos de produtos artesanais.

## 1. Sobre o projeto

Este projeto faz parte do Trabalho de Conclusão de Curso (TCC II) do Bacharelado em Engenharia de Computação.

A proposta consiste no desenvolvimento de um chatbot capaz de interpretar descrições de produtos artesanais, identificar características, calcular a complexidade da peça e fornecer uma estimativa de orçamento.

O protótipo desenvolvido é direcionado à geração de orçamentos de referência para chaveiros de personagens fictícios em biscuit de até 5 cm.

## 2. Objetivo

Desenvolver um protótipo funcional que utilize Inteligência Artificial e automação para auxiliar artesãos na elaboração de orçamentos personalizados, reduzindo o trabalho manual e facilitando o atendimento aos clientes.

## 3. Tecnologias utilizadas

- **n8n:** automação e integração dos componentes do sistema.
- **Google Gemini:** interpretação das descrições e análise das características dos pedidos.
- **JavaScript:** cálculo da pontuação e classificação da complexidade.
- **PostgreSQL:** armazenamento temporário e gerenciamento das mensagens recebidas.
- **Google Sheets:** consulta de preços de referência e registro dos orçamentos.
- **Telegram:** interface de comunicação entre o cliente e o chatbot.
- **ngrok:** disponibilização de um endereço HTTPS para comunicação com o ambiente local de desenvolvimento.
- **GitHub:** versionamento, armazenamento e documentação do projeto.

## 4. Funcionamento do protótipo

O fluxo desenvolvido no n8n segue as seguintes etapas:

1. O cliente envia uma mensagem ao chatbot pelo Telegram.
2. A mensagem é recebida e registrada no PostgreSQL.
3. O sistema aguarda um intervalo de 15 segundos para permitir o agrupamento de mensagens enviadas em sequência.
4. As mensagens são reunidas para formar uma descrição completa do pedido.
5. A Inteligência Artificial verifica se existem informações suficientes para realizar o orçamento.
6. Caso a descrição esteja incompleta, o chatbot solicita mais detalhes ao cliente.
7. Caso seja suficiente, a IA analisa as características da peça.
8. Um código JavaScript calcula a pontuação total e classifica a complexidade.
9. O sistema consulta os preços de referência no Google Sheets.
10. O chatbot prepara e envia uma estimativa de orçamento pelo Telegram.
11. As informações do orçamento são registradas na planilha.

## 5. Critérios de classificação

A classificação considera cinco características da peça artesanal:

- Cores utilizadas;
- Roupa;
- Cabelo;
- Acessórios;
- Pequenos detalhes.

Cada característica recebe uma pontuação de 1 a 3, totalizando entre 5 e 15 pontos.

| Pontuação total | Complexidade |
|---|---|
| 5 a 8 pontos | Básica |
| 9 a 12 pontos | Média |
| 13 a 15 pontos | Elaborada |

A complexidade identificada é utilizada para consultar o preço de referência cadastrado na planilha.

O valor informado ao cliente representa uma estimativa inicial, sujeita a ajustes conforme as características específicas da encomenda.

## 6. Melhorias implementadas

Durante o desenvolvimento do protótipo, foram incorporadas melhorias para tornar o atendimento mais organizado e natural.

### 6.1. Humanização das mensagens

Foram elaboradas respostas mais amigáveis e compreensíveis para facilitar a interação entre cliente e chatbot.

### 6.2. Validação dos pedidos

Foi adicionada uma etapa de análise para identificar mensagens vagas ou descrições insuficientes.

Quando o pedido não apresenta informações suficientes, o chatbot solicita características adicionais antes de prosseguir com o orçamento.

### 6.3. Agrupamento de mensagens (debounce)

Foi implementada uma estratégia de agrupamento utilizando PostgreSQL e um nó de espera no n8n.

O objetivo é evitar o processamento isolado de várias mensagens enviadas rapidamente pelo mesmo cliente.

## 7. Estrutura do repositório

```text
chatbot-orcamento-artesanal/
│
├── README.md
│
├── workflow/
│   ├── README.md
│   └── fluxo-n8n.json
│
└── codigo/
    └── classificacao.js
```

**Descrição dos diretórios:**

- `workflow/`: contém o fluxo de automação desenvolvido no n8n.
- `codigo/`: contém código JavaScript relacionado à classificação de complexidade.
- `documentacao/`: reúne informações técnicas e materiais complementares.
- `README.md`: apresenta a visão geral do projeto.

## 8. Execução do protótipo

Para reproduzir o ambiente de desenvolvimento, são necessários:

1. Uma instalação do n8n.
2. Um banco de dados PostgreSQL configurado.
3. Uma conta e um bot no Telegram.
4. Acesso à API do Google Gemini.
5. Uma planilha Google Sheets com os dados dos produtos e orçamentos.
6. Credenciais configuradas no n8n para os serviços utilizados.

O arquivo `workflow/fluxo-n8n.json` pode ser importado no n8n.

Após a importação, é necessário configurar as credenciais, conferir as referências da planilha, preparar a tabela `mensagens_debounce` no PostgreSQL e configurar a comunicação com o Telegram.

O arquivo disponibilizado no repositório é destinado à documentação e não inclui as credenciais necessárias à execução.

## 9. Estado atual e limitações

O protótipo encontra-se funcional e foi avaliado por meio de dez pedidos simulados, executados três vezes cada, totalizando 30 execuções.

Nos testes realizados, a pontuação exata coincidiu com o gabarito em 80,0% das execuções, enquanto a classificação de complexidade e o preço de referência apresentaram 96,7% de acerto. Nove dos dez pedidos mantiveram classificação e preço corretos nas três execuções.

O sistema permanece limitado à geração de orçamentos de referência para chaveiros de personagens fictícios em biscuit de até 5 cm. Os preços utilizados são previamente cadastrados e não representam um cálculo financeiro individual realizado em tempo real.

A avaliação foi realizada com pedidos simulados e sem participação de clientes ou artesãos externos. Portanto, os resultados representam a avaliação técnica do protótipo dentro do escopo definido para o trabalho.

## 10. Próximas etapas

Como possibilidades de continuidade do projeto, podem ser consideradas:

- Ampliação para outros produtos e tamanhos;
- Utilização de imagens como entrada;
- Integração com outros canais de atendimento;
- Adoção de métodos mais detalhados de formação de preço;
- Avaliação de valores menores de temperatura do modelo de linguagem;
- Realização de testes com usuários reais.

## 11. Autoria

**Sebastiana de Paula Luz Sousa**

Bacharelado em Engenharia de Computação

**Orientador:** Renato de Sousa Gomide
