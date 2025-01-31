# Cypress e Cucumber - Testes de API

Este repositório contém testes de API automatizados usando Cypress e Cucumber para a API do site [Automation Exercise](https://automationexercise.com). O objetivo é validar os endpoints da API, garantindo que retornem os resultados esperados.

## Requisitos

Antes de rodar os testes, você precisa ter os seguintes pré-requisitos instalados:

- **Node.js** (versão 14 ou superior): Para instalar o Node.js, siga as instruções do [site oficial](https://nodejs.org/).
- **Yarn** ou **NPM**: Usado para gerenciar pacotes do projeto. Se não tiver o Yarn, instale a versão mais recente do [Yarn](https://classic.yarnpkg.com/en/docs/install/). Caso prefira usar NPM, você pode seguir com ele sem problemas.

## Instalando o Projeto

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/bmorari/apitest-dti
    cd apitest-dti
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

## Executando os Testes

Após a instalação das dependências, você pode rodar os testes.

1. Para rodar os testes no modo interativo, use o comando:

    ```bash
    npx cypress open
    ```

    Isso abrirá a interface do Cypress, onde você pode visualizar e rodar os testes.

2. Para rodar os testes em modo headless (sem a interface gráfica), use o comando:

    ```bash
    npx cypress run
    ```

    Isso executará os testes diretamente no terminal.
