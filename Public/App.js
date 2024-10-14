const express = require('express');
const path = require('path');
const app = express();
const notasRouter = require('./rotas/notas');
const alunosRouter = require('./rotas/alunos');

const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas
app.use('/notas', notasRouter);
app.use('/alunos', alunosRouter);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
