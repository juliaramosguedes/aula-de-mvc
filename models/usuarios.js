const fs = require('fs');
const bcrypt = require('bcrypt');

const validarSenhaDeCadastro = (senha, confirmarSenha) => {
  const senhasDiferentes = senha !== confirmarSenha;
  
  if (senhasDiferentes) {
    throw Error('As senhas são diferentes. Informe senhas iguais.');
  }
};

const validarEmailDoUsuario = (usuarios, email) => {
  const usuarioJaEstaCadastrado = usuarios
    .find((usuario) => usuario.email === email);
  
  if (usuarioJaEstaCadastrado) {
    throw Error('Esse usuário já está cadastrado. Faça o login.');
  };
};

const validarSenhaDeLogin = (usuario, senha) => {
  const senhaValida = bcrypt.compareSync(senha, usuario.senha);
  
  if (!senhaValida) {
    throw Error('Login inválido.');
  }
};

const pegarUsuario = (email) => {
  const usuarios = fs.readFileSync('db/usuarios.json', { encoding: 'utf-8' });
  const usuario = JSON.parse(usuarios).find((usuario) => usuario.email === email);
  return usuario;
};

const listarUsuarios = () => {
  const usuarios = fs.readFileSync('db/usuarios.json', { encoding: 'utf-8' });
  const listaDeUsuarios = usuarios ? JSON.parse(usuarios) : [];
  return listaDeUsuarios;
};

const cadastrarUsuario = ({ email, senha, confirmarSenha }) => {
  validarSenhaDeCadastro(senha, confirmarSenha);

  const senhaEncriptada = bcrypt.hashSync(senha, 10);
  const novoUsuario = { email, senha: senhaEncriptada };

  const usuarios = listarUsuarios();

  validarEmailDoUsuario(usuarios, email);

  usuarios.push(novoUsuario);

  fs.writeFileSync('db/usuarios.json', JSON.stringify(usuarios));
  return novoUsuario;
};

const autenticarUsuario = ({ email, senha }) => {
  const usuarioCadastrado = pegarUsuario(email);

  if (!usuarioCadastrado) {
    throw Error('Esse usuário não está cadastrado.');
  }

  validarSenhaDeLogin(usuarioCadastrado, senha);

  return usuarioCadastrado;
};

module.exports = {
  cadastrarUsuario,
  autenticarUsuario
};