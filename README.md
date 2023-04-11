# WaiterApp
## Sobre o projeto

O WaiterApp é um sistema web desenvolvido para gerenciar os pedidos feitos pelos garçons em um restaurante. A aplicação é composta por uma interface para os garçons realizarem os pedidos via app e uma interface para os gerentes acompanharem e gerenciarem os pedidos via web.

## :hammer_and_wrench: Tecnologias

#### Back-end
* Node + Express + Typescript
* Multer para upload de imagens
* Socket.io para interação com front-end
* Mongoose + MongoDb para banco de dados

#### Front-end
* React, Vite e Typescript
* Styled-Components para estilização
* Socket.io-client para interação em tempo real com back-end
* React-Toastify para exibição de mensagens
* Axios para acessar a API

#### Mobile
* React Native, Expo e Typescript
* Styled-Components para estilização
* Axios para acessar a API
* Dotenv para variáveis de ambiente

## Como executar o projeto
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en)
* [Yarn](https://yarnpkg.com/)
* [Expo](https://expo.dev/)

### :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ da pasta _web_ e _mobile_ para _.env_ e informe o _ip:porta_ da API.<br/>
```bash
$ git clone https://github.com/SantiVinius/waiterapp
```
* Back-end
```bash
$ cd api
$ yarn
$ yarn dev
```
* Front-end
```bash
$ cd ..
$ cd fe
$ yarn
$ yarn dev
```
* Mobile
```bash
$ cd ..
$ cd app
$ yarn
$ yarn start
```
## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).
