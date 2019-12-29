export const transformUserToSave = user => ({
  name: user.displayName,
  email: user.email,
  avatar: user.photoURL,
  firebase: user.providerData,
})
