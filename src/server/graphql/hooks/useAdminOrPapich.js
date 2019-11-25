// Только администратор или Папич

export const useAdminOrPapich = (next) => (root, args, context, info) => {
  const { user } = context

  if (user.isAdmin || user.isPapich) {
    return next(root, args, context, info)
  } else {
    throw new Error('Недостаточно прав')
  }
}
