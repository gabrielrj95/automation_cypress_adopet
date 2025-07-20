/* Cenário 01: Usuário realiza login pela página home e faz logout.*/
describe('Fluxo de login e logout pela home', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();  
  });

  it("Deve preencher os campos do login corretamente e autenticar o usuário na página", () => {
    cy.login('gabriel.justin@5455155este.com.br','Gabrielteste@1');
    cy.get('.header__user').click();
    cy.contains('a','Ver Perfil').should('be.visible');
    cy.contains('button','Logout').should('be.visible');
    cy.get('[data-test="submit-button"]').click();
  })
}) 

/* Cenário 02:
Caso 1: Usuário clica no ícone de "Carta" sem ter feito login no sistema, o sistema direciona para página de login
e o usuário faz login.
Caso 2: Após login sistema direciona para a página de adoção.
Caso 3: Usuário clica no ícone de "Carta" e faz o envio sem informar nenhum dado nos campos, sistema notifica os campos de informe obrigatório.
Caso 4: Usuário preenche todos campos e faz o envio do formulário. */


describe('Fluxo de Login e envio de mensagem', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
 
  it('Realiza o login e preenche os campos e envia a mensagem ', () =>{
        cy.get('.header__message').click();
        cy.login('gabriel.justin@5455155este.com.br','Gabrielteste@1');
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
