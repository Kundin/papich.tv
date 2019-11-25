// Выход из профиля

export async function logout(req, res) {
  res.clearCookie('jwt')
  res.json({ ok: true })
}
