import { celebrate, Joi, Segments } from 'celebrate';

export const verifyOrderShow = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const verifyOrderCreate = celebrate({
  [Segments.BODY]: {
    customer_id: Joi.string().uuid().required(),
    products: Joi.required(),
  },
});
