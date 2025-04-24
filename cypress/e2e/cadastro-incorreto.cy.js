/*Cenário 01: Usuário tenta se cadastrar sem preencher nenhum dado no formulário */
describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  });
  it('Tentar cadastrar sem preencher os campos do formulário e exibir mensagens ao usuário', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible'); 
  })
}) 