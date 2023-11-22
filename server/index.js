const express = require('express'); //importando o módulo express
const cors = require('cors')
const app = express() //  Você está criando uma instância do aplicativo Express chamada app. 
//Essa instância representa o seu aplicativo web e é usada para configurar o servidor e definir rotas.
app.use(express.json())
app.use(cors())
const db = require('./models')

const postRouter = require('./routes/Posts')
app.use('/posts', postRouter)


db.sequelize.sync().then(()=>{
    app.listen(3001, ()=> {
        console.log('rodando na porta 3001')
    })
}) 


//esse código está sincronizando os modelos definidos com o banco de dados usando o Sequelize e, em seguida, 
//iniciando um servidor HTTP na porta 3001 para lidar com as solicitações do cliente. 



