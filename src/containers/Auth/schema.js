import yup from 'yup'

export const sessionSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
})

export const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
})
