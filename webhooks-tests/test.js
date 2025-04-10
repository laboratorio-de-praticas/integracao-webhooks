const express = require('express');

const app = express();
const PORT = 4000;

// Middleware para permitir JSON no corpo da requisição
app.use(express.json());

// Endpoint para receber votos de representantes
app.post('/votacao_representantes', (req, res) => {
  console.log('Novo voto recebido para representantes:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ message: 'Voto recebido com sucesso!' });
});

// Endpoint para receber votos de projetos
app.post('/votacao_projetos', (req, res) => {
  console.log('Novo voto recebido para projetos:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ message: 'Voto recebido com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
}).on('error', (err) => {
  console.error('Erro no servidor:', err);
});
