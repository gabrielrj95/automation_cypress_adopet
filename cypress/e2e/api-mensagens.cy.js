describe('Api Adopet', () => {

    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.
     
     it('Mensagens da API', () => {
            cy.request({
             method: 'GET' ,
             url: 'https://adopet-api-i8qu.onrender.com/mensagem/fa969ae0-ac51-4a36-9419-9c75b5bca',
             headers: Cypress.env()                 
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('msg')
                })
    })
})
    

