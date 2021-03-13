const fs = require('fs');
const bcrypt = require('bcrypt');

const validarSenhaDeCadastro = (password, confirmPassword) => {
  const senhasDiferentes = password !== confirmPassword;
  
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

const listarUsuarios = () => {
  const usuarios = fs.readFileSync('db/usuarios.json', { encoding: 'utf-8' });
  const listaDeUsuarios = usuarios ? JSON.parse(usuarios) : [];
  return listaDeUsuarios;
};

const cadastrarUsuario = ({ email, password, confirmPassword }) => {
  validarSenhaDeCadastro(password, confirmPassword);

  const senhaEncriptada = bcrypt.hashSync(password, 10);
  const novoUsuario = { email: email, password: senhaEncriptada };

  const usuarios = listarUsuarios();

  validarEmailDoUsuario(usuarios, email);

  usuarios.push(novoUsuario);

  fs.writeFileSync('db/usuarios.json', JSON.stringify(usuarios));
  return novoUsuario;
};


module.exports = {
  cadastrarUsuario
};