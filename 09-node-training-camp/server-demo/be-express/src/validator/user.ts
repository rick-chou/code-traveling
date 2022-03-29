import Joi from 'joi';

const add = Joi.object({
  nickname: Joi.string().required(),
  password: Joi.string().required(),
  status: Joi.boolean(),
  address: Joi.string(),
  tel: Joi.string(),
});

const del = Joi.object({
  id: Joi.number().required(),
});

const update = Joi.object({
  id: Joi.number().required(),
  nickname: Joi.string(),
  password: Joi.string(),
  status: Joi.boolean(),
  address: Joi.string(),
  tel: Joi.string(),
});

const read = Joi.object({
  id: Joi.number(),
  nickname: Joi.string(),
  password: Joi.string(),
  status: Joi.boolean(),
  address: Joi.string(),
  tel: Joi.string(),
});

const schema = {
  add,
  del,
  update,
  read,
};

export default schema;
