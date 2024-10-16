// Renderizar a view de alunos
app.get('/', (req, res) => {
  let sql = 'SELECT * FROM alunos';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('alunos', { alunos: results });
  });
});

  