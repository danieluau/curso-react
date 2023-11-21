const express = require('express'); //importando o módulo express

const app = express() //  Você está criando uma instância do aplicativo Express chamada app. 
//Essa instância representa o seu aplicativo web e é usada para configurar o servidor e definir rotas.

const db = require('./models')

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=> {
        console.log('rodando na porta 3001')
    })
}) 


//esse código está sincronizando os modelos definidos com o banco de dados usando o Sequelize e, em seguida, 
   //iniciando um servidor HTTP na porta 3001 para lidar com as solicitações do cliente. 



