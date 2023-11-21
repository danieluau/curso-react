import express from 'express'; //importando o módulo express

const app = express() //  Você está criando uma instância do aplicativo Express chamada app. 
//Essa instância representa o seu aplicativo web e é usada para configurar o servidor e definir rotas.

app.listen(3001, ()=> {
    console.log('rodando na porta 3001')
})

