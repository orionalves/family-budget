import * as yup from 'yup'

const getYupErrorMessage = (error: unknown) => {
  if (error instanceof yup.ValidationError) return error.message
  return String(error)
}

export { getYupErrorMessage }
