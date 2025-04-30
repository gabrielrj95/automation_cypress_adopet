describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Gabriel TESTE');
    cy.get('[data-test="input-email"]').type('gabriel.justin@5x455155este.com.br');
    cy.get('[data-test="input-password"]').type('Gabrielteste@1');
    cy.get('[data-test="input-confirm-password"]').type('Gabrielteste@1');
    cy.get('[data-test="submit-button"]').click();
    
  })
}) 



