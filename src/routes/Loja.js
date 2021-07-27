const express = require('express');
const router = express.Router();
const pg = require('pg').Pool;


exports.InserirLoja('/', (req, res, next) => {
    pg.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error}) }
        conn.query(
            'INSERT INTO   loja (nomeLoja, endereco) VALUES (?,?)',
            [req.body.nomeLoja, req.body.endereco],
            (error, result, field)=> {
                conn.release();
                if(error) { return res.status(500).send({error:error}) }
                const response = {
                    mensagem: 'Loja inserida com sucesso',
                    LojaCriado: {
                        id: result.id,
                        nomeLoja: req.body.nomeLoja,
                        endereco: req.body.endereco,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todas as lojas',
                            url: 'http://localhost:3000/loja'
                        }
                    }
                }
                return res.status(201).send(response);
            }
       )
    });
});