const logger = require('./src/utils/logger'); // Ajuste para o caminho correto

// Teste de logs
function testeLogger() {
  logger.info('Mensagem de INFO - O sistema está funcionando corretamente.');
  logger.warn('Mensagem de WARN - Algo pode estar errado.');
  logger.error('Mensagem de ERROR - Um erro ocorreu no sistema.');
}

// Executa o teste
testeLogger();

console.log('Teste de logs concluído. Verifique o arquivo logs/app.log para os registros.');
