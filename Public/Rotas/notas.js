const express = require('express');
const router = express.Router();

// Rota para a página de Cadastro de Notas
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../views/cadastro-notas.html');
});

module.exports = router;
