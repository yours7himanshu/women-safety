const Joi = require('joi');

// Register validation schema
const authSchemaRegister = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required()
})

// Login validation schema
const authSchemaLogin = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required()
})

// Product validation schema


// Cart validation schema


module.exports = { authSchemaRegister, authSchemaLogin }