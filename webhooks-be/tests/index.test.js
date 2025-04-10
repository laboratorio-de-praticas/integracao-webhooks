const webhookFunctions = require('../index.js');
const { client } = require('../config/db-connection.js');
const axios = require('axios');

//mock do axios
jest.mock('axios');

//mock bando de dados
jest.mock('../config/db-connection', () => {
  const mockClient = {
    query: jest.fn().mockResolvedValue({}),
    on: jest.fn(),
  };
  return {
    client: mockClient,
    connectDB: jest.fn().mockResolvedValue(true),
  };
});

describe('Webhook Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.url_representante = 'http://localhost:4000/votacao_representantes';
    global.url_projeto = 'http://localhost:4000/votacao_projetos';
  });

  afterEach(() => {
    delete global.url_representante;
    delete global.url_projeto;
  });
  //teste enviar dados para URL correta
  describe('sendWebhook', () => {
    it('deve enviar dados para a URL correta', async () => {
      const sendWebhookSpy = jest.spyOn(webhookFunctions, 'sendWebhook');
      const url = 'http://teste.com/webhook';
      const data = { id: 1, nome: 'Teste' };

      axios.post.mockResolvedValue({ status: 200 });

      await webhookFunctions.sendWebhook(url, data);

      expect(sendWebhookSpy).toHaveBeenCalledWith(url, data);
      sendWebhookSpy.mockRestore();
    });  
  });
  //Teste conexão com o banco de dados e escuta de notificações
  describe('listenNewVotes', () => {
    it('deve conectar ao banco e escutar o canal correto', async () => {
      await webhookFunctions.listenNewVotes();

      expect(client.query).toHaveBeenCalledWith('LISTEN new_vote');
      expect(client.on).toHaveBeenCalledWith('notification', expect.any(Function));
    });

    it('deve tratar erro ao tentar escutar canal do banco', async () => {
      client.query.mockRejectedValue(new Error('Erro na conexão com o banco'));

      await expect(webhookFunctions.listenNewVotes()).resolves.toBeUndefined();
    });
  });
});