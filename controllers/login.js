const model = require('../models/usuarios');

const index = (req, res) => {
  res.render('login/index');
};

const cadastro = (req, res) => {
  res.render('login/cadastro');
};

const novoCadastro = (req, res) => {
  console.log(req.body);
  const usuarioDoFormulario = { 
    email: req.body.email, 
    password: req.body.password,
    confirmPassword: req.body['confirm-password']
  };

  const usuarioCadastrado = model.cadastrarUsuario(usuarioDoFormulario);
  res.send(`Novo cadastro: ${JSON.stringify(usuarioCadastrado)}`);
};

const entrar = (req, res) => {
  
}

module.exports = {
  cadastro,
  entrar,
  index,
  novoCadastro,
};