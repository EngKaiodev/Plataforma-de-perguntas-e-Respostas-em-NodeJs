# Guia de Perguntas

Aplicação web de perguntas e respostas, desenvolvida com Node.js e Express. O projeto está em desenvolvimento e permite enviar perguntas, que são armazenadas no banco de dados MySQL.

## Tecnologias

- Node.js
- Express
- EJS
- Sequelize
- MySQL
- Bootstrap 5

## Funcionalidades atuais

- Página inicial em `/`.
- Formulário para escrever uma pergunta em `/perguntar`.
- Salvamento do título e da descrição enviados por `POST /salvarpergunta`.
- Redirecionamento para a página inicial após o envio.
- Listagem dos títulos das perguntas na página inicial, ordenadas das mais recentes para as mais antigas.
- Link “Responder” em cada pergunta abre a página de detalhes correspondente.
- Página de detalhes em `/pergunta/:id`, que exibe o título e a descrição da pergunta; se o ID não existir, redireciona para a página inicial.
- Envio de respostas pela rota `POST /responder`, associado à pergunta pelo ID e com redirecionamento para a página de detalhes.
- Exibição das respostas cadastradas na página da pergunta, ordenadas das mais recentes para as mais antigas.
- Modelo `Resposta` definido para armazenar o texto da resposta e o ID da pergunta relacionada.
- Conexão com o MySQL por meio do Sequelize e sincronização dos modelos `Pergunta` e `Resposta`.

> As respostas são armazenadas com o ID da pergunta e filtradas por esse ID na página de detalhes. Ainda não foi configurado um relacionamento formal entre os modelos no Sequelize.

## Estrutura do projeto

```text
.
├── database/
│   ├── database.js       # Configuração da conexão com o MySQL
│   ├── Pergunta.js       # Modelo de pergunta
│   └── Resposta.js       # Modelo de resposta
├── public/
│   ├── css/              # Bootstrap e estilos da aplicação
│   ├── img/              # Imagens
│   └── js/               # JavaScript do Bootstrap
├── views/
│   ├── partials/         # Partes compartilhadas das páginas
│   ├── index.ejs
│   ├── pergunta.ejs      # Detalhes de uma pergunta
│   └── perguntar.ejs
├── index.js              # Configuração do Express e rotas
└── package.json
```

## Pré-requisitos

- Node.js e npm
- MySQL Server instalado e em execução. O MySQL Workbench é opcional e pode ser usado para administrar o banco.
- Dependências Node.js `sequelize` e `mysql2`, usadas pelo projeto para conectar ao MySQL. Elas já estão declaradas no `package.json` e são instaladas com `npm install`.

## Instalação e execução

1. Instale as dependências:

   ```bash
   npm install
   ```

   Caso queira instalar apenas os pacotes da conexão manualmente, use:

   ```bash
   npm install sequelize mysql2
   ```

2. Instale e inicie o MySQL Server, se ainda não estiver instalado. O Workbench não substitui o servidor; é apenas uma ferramenta opcional para administrá-lo.

3. Crie no MySQL o banco de dados `guiaperguntas`.

4. Confira e ajuste as credenciais e o endereço do servidor no arquivo `database/database.js`. A configuração atual usa `localhost`, usuário `root`, senha `root` e o banco `guiaperguntas`; altere esses valores conforme o seu ambiente.

5. Inicie o servidor:

   ```bash
   node index.js
   ```

6. Acesse [http://localhost:8080](http://localhost:8080).

Na inicialização, o Sequelize tenta se conectar ao banco e sincroniza as tabelas dos modelos `Pergunta` e `Resposta`.

## Rotas

| Método | Caminho | Descrição |
|---|---|---|
| `GET` | `/` | Busca e exibe os títulos das perguntas cadastradas, da mais recente para a mais antiga |
| `GET` | `/perguntar` | Exibe o formulário de pergunta |
| `POST` | `/salvarpergunta` | Salva o título e a descrição no MySQL e redireciona para `/` |
| `GET` | `/pergunta/:id` | Exibe o título e a descrição da pergunta; redireciona para `/` se o ID não existir |
| `POST` | `/responder` | Salva a resposta associada à pergunta e redireciona para `/pergunta/:id` |

## Testes

Não há testes configurados no momento. O comando `npm test` permanece como um placeholder no `package.json`.

## Licença

Este projeto é de caráter educacional. O `package.json` declara a licença ISC.
