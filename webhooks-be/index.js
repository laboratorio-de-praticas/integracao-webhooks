const { client, connectDB } = require('./config/db-connection');
const axios = require('axios');

const url_representante = 'http://localhost:4000/votacao_representantes';
const url_projeto = 'http://localhost:4000/votacao_projetos';

const sendWebhook = async (url, data) => {
  try {
    await axios.post(url, data);
    console.log('Dados enviados com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar dados para o Webhook:', error.message);
  }
};

const listenNewVotes = async () => {
  try {
    await connectDB();
    console.log('Conexão com o banco de dados estabelecida.');

    // Garantir que estamos escutando o canal correto
    await client.query('LISTEN new_vote'); // Canal único agora
    console.log('Escutando novos votos...');

    // Evento de notificação
    client.on('notification', async (msg) => {
      try {
        const payload = JSON.parse(msg.payload);
        let url;

        // Discriminar o tipo de evento no payload para escolher o webhook correto
        if (payload.tipoevento === 'Interno') {
          url = url_representante;
        } else if (payload.tipoevento === 'Externo') {
          url = url_projeto;
        } else {
          console.log('Evento desconhecido:', payload.tipoevento);
          return;
        }

        console.log('Recebido do canal:', msg.channel, 'com os dados:', JSON.stringify(payload, null, 2));
        await sendWebhook(url, payload);

      } catch (error) {
        console.error('Erro ao processar a notificação:', error.message);
      }
    });

  } catch (error) {
    console.error('Erro ao conectar ou ouvir o banco:', error.message);
  }
};

listenNewVotes();
module.exports = { sendWebhook, listenNewVotes };