![capa (1)](https://user-images.githubusercontent.com/51785898/203780007-2f7a7532-11b8-489c-99cf-09399c1c935e.png)
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
- Baixe o repositório com git clone e entre na pasta do projeto.<br/>
```bash
$ git clone https://github.com/SantiVinius/waiterapp
```
* Back-end
##### no .env file, digite uma chave aleatória para o SECRET, para assim poder gerar o token de autenticação para utilizar nas requisições
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
