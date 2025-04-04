const { Client } = require('pg')

// Configuração do cliente para conexão com o banco
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: 'admin',
  port: '5432' //só está com aspas para evitar erro
})

// Conectar ao banco de dados
const connectDB = async () => {
  try {
    await client.connect()
    console.log('Conectado ao banco com sucesso!')
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error.message)
  }
}

// Exporta cliente e a fução de conexão
module.exports = { client, connectDB }
