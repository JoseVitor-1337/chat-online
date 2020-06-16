const patterm = {
  name(name: string) {
    return /^[a-zA-Z]{3,}$/.test(name) ? true : "Nome inválido"
  },
  email(email: string) {
    return /[@][a-z]{3,}[.][a-z]{3,}/.test(email) ? true : "E-mail inválido"
  },
  password(Password: string) {
    return /^[a-zA-Z0-9]{3,}$/.test(Password) ? true : "Senha inválida"
  }
}

function validateRequestBody(requestBody) {
  let errors = {}

  for (let property in requestBody) {
    let item = requestBody[property]

    let validate = patterm[property]

    let hasValidated = validate(item)

    if (hasValidated !== true) {

      errors[property] = (hasValidated)
    }
  }

  return errors
}

export default validateRequestBody