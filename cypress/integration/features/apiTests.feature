Feature: Teste da API de usuários

    Scenario: Validar a listagem de usuários
        Given que realizo uma requisição GET para "https://automationexercise.com/api/usersList"
        When a resposta da API for recebida
        Then o status da resposta deve ser 200

    Scenario: Produtos com o termo "Mull"
        Given que eu faça uma requisição POST para "https://automationexercise.com/api/searchProduct" passando "Mull" de parametro
        When a resposta for recebida
        Then a resposta deve conter produtos que tenham "Mull" no nome ou descrição

    Scenario: Parâmetro search_product não é enviado
        Given que eu faça uma requisição POST para "https://automationexercise.com/api/searchProduct" sem o parâmetro "search_product"
        When a resposta 400 for recebida
        Then a resposta deve conter a mensagem "Bad request, search_product parameter is missing in POST request."