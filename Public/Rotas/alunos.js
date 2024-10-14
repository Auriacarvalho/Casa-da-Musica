const express = require('express');
const router = express.Router();

// Rota para a página de Cadastro de Alunos
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../views/cadastro-alunos.html');
});

module.exports = router;
