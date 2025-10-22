const mysql = require('mysql2');

//credencias de acesso
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //c@tolic@
    database: 'userdb_4',
    port: '3306' //3307
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log("conectado ao banco de dados");
});

//exportar
module.exports = db;
