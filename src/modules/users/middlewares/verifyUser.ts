import { celebrate, Joi, Segments } from 'celebrate';

export const userCreateVefify = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export const sessionCreateVefify = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export const emailVefifyToForgotPassword = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
});

export const resetVefifyEmailToForgotPassword = celebrate({
  [Segments.BODY]: {
    token: Joi.string().uuid().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
});
