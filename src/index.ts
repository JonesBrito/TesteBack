const express = require('express');
const router = express.Router();

const controlRes = require('../src/routes/Restaurante');
const controlCli = require('../src/routes/Cliente');
const controlLoja = require('../src/routes/Loja');
const controlPro = require('../src/routes/Profissional');


router.post('/', controlRes.InserirRestaurante);
router.post('/', controlCli.InserirCliente);
router.post('/', controlLoja.InserirLoja);
router.post('/', controlPro.InserirProfissional);

module.exports = router;
