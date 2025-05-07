describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastro('Gabriel TESTE','gabriel.justin@5x455155este.com.br','Gabrielteste@1','Gabrielteste@1');
    cy.get('[data-test="submit-button"]').click();
  })
}) 



