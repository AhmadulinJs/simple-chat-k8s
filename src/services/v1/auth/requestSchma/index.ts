import Joi from 'joi'

const schema = {
  signUp: Joi.object().keys({
    body: Joi.object()
      .keys({
        username: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string(),
        confirmPassword: Joi.ref('password'),
      })
      .required(),
  })
}

export default schema