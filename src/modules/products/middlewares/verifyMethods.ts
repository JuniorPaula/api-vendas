import { celebrate, Joi, Segments } from 'celebrate';

export const verifyMethosShow = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const verifyMethodCreate = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number(),
  },
});

export const verifyMethodUpdate = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number(),
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const verifyMethosDelete = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
