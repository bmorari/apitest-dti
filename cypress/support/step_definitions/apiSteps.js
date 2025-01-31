import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Validar a listagem de usuários

Given("que realizo uma requisição GET para {string}", () => {
    cy.request({
        method: 'GET',
        url: `https://automationexercise.com/api/productsList`
    }).as('getProducts')
})

When("a resposta da API for recebida", function () {
    cy.get('@getProducts').then((response) => {
        expect(response).to.have.property('status')
        expect(response.body).to.exist
    })
})

Then("o status da resposta deve ser {int}", function (status) {
    cy.get('@getProducts').its('status').should('eq', status)
})

// Produtos com o termo "Mull"

Given('que eu faça uma requisição POST para {string} passando {string} de parametro', (url, searchTerm) => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/searchProduct',
        form: true,
        body: {
            search_product: searchTerm,
        },
    }).as('searchProducts')
})

When('a resposta for recebida', () => {
    cy.get('@searchProducts').then((response) => {
        expect(response.status).to.eq(200)
    })
})

Then('a resposta deve conter produtos que tenham {string} no nome ou descrição', (searchTerm) => {
    cy.get('@searchProducts').then((response) => {
        const products = response.body
        expect(products).to.not.be.empty
    })
})

// Parâmetro search_product não é enviado

Given('que eu faça uma requisição POST para {string} sem o parâmetro {string}', (url, param) => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      failOnStatusCode: false,
      form: true,
      body: {},
    }).as('response')
  })
  
  When('a resposta {int} for recebida', (staus) => {
    cy.get('@response').then((response) => {
        expect(response.status).to.eq(200)
    })
  })
  
  Then('a resposta deve conter a mensagem {string}', (expectedMessage) => {
    cy.get('@response').its('body').should('include', expectedMessage)
  })