describe('Fluxo de login e logout pela home', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();  
  });

  it("Deve preencher os campos do login corretamente e autenticar o usuário na página", () => {
    cy.get('[data-test="input-loginEmail"]').type('gabriel.justin@5455155este.com.br');
    cy.get('[data-test="input-loginPassword"]').type('Gabrielteste@1');
    cy.get('[data-test="submit-button"]').click();
    cy.get('.header__user').click();
    cy.contains('a','Ver Perfil').should('be.visible');
    cy.contains('button','Logout').should('be.visible');
    cy.get('[data-test="submit-button"]').click();
  })
}) 

describe('Fluxo de Login e envio de mensagem', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
 
  it('Realiza o login e preenche os campos e envia a mensagem ', () =>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();  
        cy.contains('p', 'Olá! ',' Veja os amigos disponíveis para adoção!').should('be.visible');
        cy.contains('p', 'Quem ama adota!').should('be.visible');
        cy.get('.header__message').click();
        cy.contains('label','Nome').should('be.visible');
        cy.contains('label','Telefone').should('be.visible');
        cy.contains('label','Nome do animal').should('be.visible');
        cy.contains('label','Mensagem').should('be.visible');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('p','É necessário informar seu nome').should('be.visible');
        cy.contains('p','Informe um número de telefone').should('be.visible');
        cy.contains('p','É necessário informar o nome do animal').should('be.visible');
        cy.contains('p','É necessário escrever uma mensagem').should('be.visible');
        cy.get('#name').type('Gabriel Teste | Gabriel Teste')
        cy.get('#phone').type('51995357130');
        cy.get('#petName').type('Amora TESTE |')
        cy.get('#msg').type('Olá, estou interessado no Sirius. Ele parece ser um ótimo companheiro. Poderia me passar mais informações sobre ele? | Olá, estou interessado no Sirius. Ele parece ser um ótimo companheiro. Poderia me passar mais informações sobre ele?')
        cy.get('[data-test="submit-button"]').click();
    })
})    
