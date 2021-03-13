const index = (req, res) => {
  res.render('login/index');
}

const cadastro = (req, res) => {
  res.render('login/cadastro');
}

const novoCadastro = (req, res) => {
  const {email, password} = req.body;
  res.send(`Novo cadastro: ${JSON.stringify({email, password})}`)
}

module.exports = {
  index,
  cadastro,
  novoCadastro
}