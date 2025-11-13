const express = require('express'); //importar o framework
const router = express.Router(); //modularizar as rotas

//conectar ao banco
const db = require('../db');
//const e = require('express');

//definir as rotas
//rota = cadastrar o usuário
//tipo: POST (REQUEST)
//caminho: /api/users/
router.post('/', (req, res)=>{
    //JSON
    const {nome, email} = req.body;

    //executar uma instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        //verificação de erro
        (err, result) =>{
            if (err) return res.status(500).send(err); //código 500 = erro interno no lado servidor
            res.status(201).json({id: result.insertID, nome, email}); //código 201 = sucesso e que foi criado o registro
        }
        
    )
})

//criar a rota para trazer os usuários do banco
router.get('/', (req, res)=>{
    //executar a instrução sql
    db.query('SELECT * FROM users', (err, results) =>{
        if (err) return res.status(500).send(err); 
        res.json(results);
    })
})

//rota para editar o usuário: PUT (UPDATE)
router.put('/:id', (req, res) =>{
    //extrair os dados que vem do front
    const {nome, email} = req.body; //corpo da requisição
    const {id} = req.params; //pegar o parâmetro (id)
    console.log(nome, email, id);

    //executar a instrução sql
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], 
    (err) =>{
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    })
})

//rota para excluir o usuário: DELETE
router.delete('/:id', (req, res) =>{
    //pegar o id do usuário (parametro da URL)
    const {id} = req.params;

    //executar a instrução sql
    db.query('DELETE FROM users WHERE id = ?', [id], 
        (err) =>{
            if(err) return res.status(500).send(err);
            res.sendStatus(204);
        }
    )
})


//exportar as rotas
module.exports = router;
