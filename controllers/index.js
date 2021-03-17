const index = (req, res) => {
  res.render('index');
};

// req = request = requisição
// res = response = resposta
const ola = (req, res) => {
  const { nome } = req.params;
  res.send(`Olá ${nome}`);
}

module.exports = {
  index,
  ola
};