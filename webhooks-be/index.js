const { client, connectDB } = require('./db-connection')
const axios = require('axios')

const url_representante = 'http://localhost:4000/votacao_representantes'
const url_projeto = 'http://localhost:4000/votacao_projetos'

// Envia os dados para o Webhook correto
const sendWebhook = async (url, data) => {
  try {
    await axios.post(url, data)
    console.log('Dados enviados com sucesso!')
  } catch (error) {
    console.error('Erro ao enviar dados para o Webhook:', error.message)
  }
}

// Escuta os canais e encaminha os dados
const listenNewVotes = async () => {
  try {
    await connectDB()

    await client.query('LISTEN new_vote')

    //evento notificação
    client.on('notification', async (msg) => {
      try {
        const payload = JSON.parse(msg.payload) //recebe JSON do Postgre
        let url

        //verificação do canal pelo qual o voto foi recebido
        if (payload.tipoevento == "Interno") {
          url = url_representante
        } else if (payload.tipoevento == "Externo") {
          url = url_projeto
        } else {
          console.log('Evento desconhecido:', payload.tipo_evento)
          return
        }
        await sendWebhook(url, payload)
      } catch (error) {
        console.error('Erro ao processar a notificação:', error.message)
      }
    })

  } catch (error) {
    console.error('Erro ao conectar ou ouvir o banco:', error.message)
  }
}

listenNewVotes()