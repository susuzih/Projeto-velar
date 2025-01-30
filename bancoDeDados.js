const mysql = require('mysql2');

// Carregar variáveis de ambiente do arquivo .env
//require('dotenv').config();
// backend/configuracoes/bancoDeDados.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') }); // Caminho relativo até o arquivo .env

// Criar a conexão com o banco de dados usando as variáveis de ambiente
const connection = mysql.createConnection({
  host: process.env.DB_HOST,           // Lê do arquivo .env
  port: process.env.DB_PORT,           // Lê do arquivo .env
  user: process.env.DB_USER,           // Lê do arquivo .env
  password: process.env.DB_PASSWORD,   // Lê do arquivo .env
  database: process.env.DB_NAME,      // Lê do arquivo .env
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
  }
  console.log('Conectado ao banco de dados da Loja!');
});

module.exports = connection;