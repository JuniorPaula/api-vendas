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
