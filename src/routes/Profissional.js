const express = require('express');
const router = express.Router();
const pg = require('pg').Pool;


exports.InserirProfissional('/', (req, res, next) => {
    pg.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error}) }
        conn.query(
            'INSERT INTO   profissional (nomeProfissional, telefone) VALUES (?,?)',
            [req.body.nomeProfissional, req.body.telefone],
            (error, result, field)=> {
                conn.release();
                if(error) { return res.status(500).send({error:error}) }
                const response = {
                    mensagem: 'Profissional inserido com sucesso',
                    ProfissionalCriado: {
                        id: result.id,
                        nomeProfissional: req.body.nomeProfissional,
                        telefone: req.body.telefone,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os profissionais',
                            url: 'http://localhost:3000/profissional'
                        }
                    }
                }
                return res.status(201).send(response);
            }
       )
    });
});