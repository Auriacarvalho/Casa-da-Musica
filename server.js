const express = require('express');
<<<<<<< HEAD
const mysql = require('mysql2'); // Importação correta do módulo mysql2
=======
const mysql = require('mysql2');
>>>>>>> a79fcc6d1187050e0615e352addf900b531ea5ca
const cors = require('cors');

// Criando o servidor Express
const app = express();

// Habilitando CORS
app.use(cors());

// Permitindo o uso de JSON
app.use(express.json());

// Criando a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: 'admin',  // Certifique-se de que essa senha está correta
  database: 'casa_da_musica'
=======
  password: 'k.dev2024',
  database: 'controle_de_alunos'
>>>>>>> a79fcc6d1187050e0615e352addf900b531ea5ca
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conectado ao banco de dados');
});

<<<<<<< HEAD
// Resto do código para as rotas...
=======
// Buscar todos os alunos
app.get('/alunos', (req, res) => {
  console.log('Recebida requisição GET para buscar todos os alunos');
  let sql = 'SELECT * FROM aluno';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar alunos:', err);
      res.status(500).send({ message: 'Erro ao buscar alunos' });
      return;
    }
    console.log('Alunos encontrados:', results);
    res.send(results);
  });
});

// Inserir um novo aluno
app.post('/alunos', (req, res) => {
  console.log('Recebida requisição POST para inserir um novo aluno:', req.body);
  let sql = 'INSERT INTO aluno SET ?';
  let data = {
    nome: req.body.nome,
    idade: req.body.idade,
    curso: req.body.curso,
    matricula: req.body.matricula
  };

  console.log('Dados que serão inseridos no banco:', data);

  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao inserir aluno:', err);
      res.status(500).send({ message: 'Erro ao inserir aluno' });
      return;
    }
    console.log('Aluno inserido com sucesso:', results);
    res.send(results);
  });
});

// Atualizar um aluno existente
app.put('/alunos/:matricula', (req, res) => {
  console.log('Recebida requisição PUT para atualizar aluno:', req.params.matricula, req.body);
  let sql = 'UPDATE aluno SET ? WHERE matricula = ?';
  let data = [req.body, req.params.matricula];
  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao atualizar aluno:', err);
      res.status(500).send({ message: 'Erro ao atualizar aluno' });
      return;
    }
    console.log('Aluno atualizado com sucesso:', results);
    res.send(results);
  });
});

// Excluir um aluno
app.delete('/alunos/:matricula', (req, res) => {
  console.log('Recebida requisição DELETE para excluir aluno:', req.params.matricula);
  let sql = 'DELETE FROM aluno WHERE matricula = ?';
  db.query(sql, req.params.matricula, (err, results) => {
    if (err) {
      console.error('Erro ao excluir aluno:', err);
      res.status(500).send({ message: 'Erro ao excluir aluno' });
      return;
    }
    if (results.affectedRows === 0) {
      console.log('Aluno não encontrado:', req.params.matricula);
      res.status(404).send({ message: 'Aluno não encontrado' });
    } else {
      console.log('Aluno excluído com sucesso:', results);
      res.send({ message: 'Aluno excluído com sucesso' });
    }
  });
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
>>>>>>> a79fcc6d1187050e0615e352addf900b531ea5ca
