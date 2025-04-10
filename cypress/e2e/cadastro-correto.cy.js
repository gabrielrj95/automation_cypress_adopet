describe('Página de Cadastro', () => {
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="input-name"]').type('Gabriel TESTE');
      cy.get('[data-test="input-email"]').type('gabriel.justin@5455155este.com.br');
      cy.get('[data-test="input-password"]').type('Gabrielteste@1');
      cy.get('[data-test="input-confirm-password"]').type('Gabrielteste@1');
      cy.get('[data-test="submit-button"]').cslick();
    })
  }) 