
const express = require('express');
const app = express();

const statusRoutes = require('./src/controller/statuscontroller');

app.use(express.json()); // Middleware para parse de JSON
app.use('/status', statusRoutes); // Use a rota '/status'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
});

// Função principal
async function executarConsulta() {
  try {
    await client.connect();
    console.log('Conexão estabelecida!');

    // Executar uma consulta
    const res = await client.query('SELECT * FROM sicredi');
    console.log('Resultado:', res.rows);
  } catch (err) {
    console.error('Erro ao executar consulta:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

// Executar a função
executarConsulta();