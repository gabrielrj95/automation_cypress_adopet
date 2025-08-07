describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYTk2OWFlMC1hYzUxLTRhMzYtOTQxOS05Yzc1YjViY2EzNDMiLCJhZG9wdGVyTmFtZSI6IkdhYnJpZWwgSnVzdGluIiwiaWF0IjoxNzQ4OTAzMjU3LCJleHAiOjE3NDkxNjI0NTd9.AZBXDJy-VrXPHUol0h292GjI1mrIxXvd62tRkVt-7BI`  

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/fa969ae0-ac51-4a36-9419-9c75b5bca343',
            headers: { authorization }
        }).then((resposta) =>{
            expect(resposta.status).to.be.equal(200)
            expect(resposta.body).is.not.empty
            expect(resposta.body).to.have.property('msg')
        })
    })
});