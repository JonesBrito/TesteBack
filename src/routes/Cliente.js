const express = require('express');
const router = express.Router();
const pg = require('pg').Pool;


router.InserirCliente('/', (req, res, next) => {
    pg.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error}) }
        conn.query(
            'INSERT INTO   users (firstName, lastName, age) VALUES (?,?)',
            [req.body.firstName, req.body.lastName, req.body.age],
            (error, result, field)=> {
                conn.release();
                if(error) { return res.status(500).send({error:error}) }
                const response = {
                    mensagem: 'Cliente inserido com sucesso',
                    ClienteCriado: {
                        id: result.id,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        age: req.body.age,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os Clientes',
                            url: 'http://localhost:3000/clientes'
                        }
                    }

                }
                return res.status(201).send(response);
            }
       )
    });
});