// Выход из профиля

export async function logout(req, res, next) {
  res.clearCookie('jwt')
  res.json({ ok: true })
}
