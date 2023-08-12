import api from '@/services/api'

export async function signInRequest(email, senha) {
  const userRequest = await api.post('/login/auth', { email: email, senha: senha })
  if (userRequest.data.length) {
    const usuario = userRequest.data[0]
    return {
      token: usuario.token,
      token_validade: usuario.token_validade,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
        permissao: usuario.permissoes_id,
        cliente: usuario.clientes_id,
        permissoes: usuario.permissoes
      }
    }
  } else {
    return false
  }
}

export async function signInVerify(token) {
  const tokenRequest = await api.post('/login/authVerify', { token: token })
  if (tokenRequest.data.length) {
    const usuario = tokenRequest.data[0].usuarios
    return {
      token: usuario.token,
      token_validade: usuario.token_validade,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
        permissao: usuario.permissoes_id,
        cliente: usuario.clientes_id
      }
    }
  } else {
    return false
  }
}
