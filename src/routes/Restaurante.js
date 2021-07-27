const express = require('express');
const router = express.Router();
const pg = require('pg').Pool;
var async = require('async');


exports.InserirRestaurante = async ('/', (req, res, next) => {
    pg.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error}) }
        conn.query(
            'INSERT INTO   restaurante (nomeRestaurante, endereco) VALUES (?,?)',
            [req.body.nomeRestaurante, req.body.endereco],
            (error, result, field)=> {
                conn.release();
                if(error) { return res.status(500).send({error:error}) }
                const response = {
                    mensagem: 'Restaurante inserido com sucesso',
                    RestauranteCriado: {
                        id: result.id,
                        nomeRestaurante: req.body.nomeRestaurante,
                        endereco: req.body.endereco,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os Restaurantes',
                            url: 'http://localhost:3000/restaurantes'
                        }
                    }
                }
                return res.status(201).send(response);
            }
       )
    });
});