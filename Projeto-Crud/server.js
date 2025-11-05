const express = require('express');
const app = express();
const port = 3000;

//definir o caminho
const path = require('path');

//informar onde os arquivos estáticos estão
app.use(express.static('public'));



//conectar ao banco de dados
const db = require('./db');

//rota
//http://localhost:3000/
app.get('/', (req, res) =>{
    //res.send('Front funcionando!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//linkar com o arquivo API (contém as rotas do nosso sistema)
const apiRoutes = require('./routes/api');

//informar para o server.js (receber arquivos no formato JSON)
app.use(express.json());

//informar a rota que está presente no API.js
app.use('/api/users/', apiRoutes);

app.listen(port, () =>{
    console.log("Servidor funcionando!");
});
