// Только авторизованные пользователи

export const useAuth = (next) => (root, args, context, info) => {
  const { user } = context

  if (!user) throw new Error('Пользователь не авторизован')

  return next(root, args, context, info)
}
