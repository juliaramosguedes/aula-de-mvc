const model = require('../models/usuarios');

const index = (req, res) => {
  res.render('login/index');
};

const cadastro = (req, res) => {
  res.render('login/cadastro');
};

const novoCadastro = (req, res) => {
  const usuarioDoFormulario = { 
    email: req.body.email, 
    senha: req.body.password,
    confirmarSenha: req.body['confirm-password']
  };

  const usuarioCadastrado = model.cadastrarUsuario(usuarioDoFormulario);
  res.send(`Novo cadastro: ${JSON.stringify(usuarioCadastrado)}`);
};

const entrar = (req, res) => {
  const usuarioDoFormulario = { 
    email: req.body.email, 
    senha: req.body.password,
  };
  
  const usuarioAutenticado = model.autenticarUsuario(usuarioDoFormulario);
  res.send(`Usuário autenticado: ${JSON.stringify(usuarioAutenticado)}`);
}

module.exports = {
  cadastro,
  entrar,
  index,
  novoCadastro,
};