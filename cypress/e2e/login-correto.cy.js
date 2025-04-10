describe('Página de login', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();  
  });
  
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {

      cy.get('[data-test="input-loginEmail"]').type('gabriel.justin@5455155este.com.br');
      cy.get('[data-test="input-loginPassword"]').type('Gabrielteste@1');
      cy.get('[data-test="submit-button"]').click();
    })
  }) 