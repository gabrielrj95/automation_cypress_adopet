/* Cenário 01: Usuário tenta acessar sem informar uma estrutura de e-mail/senha válido */
describe('Falha no login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });
    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        cy.login('marjorie3','123');
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    });
});

/* Cenário 02: Usuário informa um e-mail/senha com estrutura válido, mas não está cadastrado no sistema */
describe('Falha no login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });
    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        cy.login('gabriel@teste.com','gabrielRj!@1')
        cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
    });
});

/* Cenário 03: Usuário informa um e-mail cadastrado no sistema, mas informa a senha incorreta */
describe('Falha no login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        });
    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('gabriel@teste1.com');
        cy.get('[data-test="input-loginPassword"]').type('gabrielRj!@1');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
    });


});

// STUBS
describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400, }).as('stubPost')
        });
    it('Verifica mensagem de falha no login', ()=> {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })
    
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente',() => {
        cy.login('gabriel.justin@5455155este.com.br','Gabrielteste@1')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
});



