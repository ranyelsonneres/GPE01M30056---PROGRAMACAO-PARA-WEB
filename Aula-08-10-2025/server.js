// Importa o módulo HTTP do Node.js
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta (200 = sucesso)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Envia a resposta "Hello, World!" para o cliente
    res.end('Hello, World!');
});

// Define a porta do servidor
const port = 3000;

// Inicia o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
