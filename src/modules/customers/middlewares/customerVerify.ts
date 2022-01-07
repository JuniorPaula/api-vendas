import { celebrate, Segments, Joi } from 'celebrate';

export const showCustomerVefify = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const createCustomerVefify = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
});

export const updateCustomerVefify = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const deleteCustomerVefify = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
