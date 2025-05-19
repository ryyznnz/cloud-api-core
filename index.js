const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API Cloud ativa e rodando!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    updated: new Date().toISOString(),
    instance: 'api-core-v1'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API executando na porta ${port}`);
});
