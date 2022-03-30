import express from 'express';

import UserInfo from '../dao/user';
import Validator from '../validator/user';
import { ReqUtils, ResUtils } from '../utils';

const { add, read, del, update } = Validator;

const { validateParams } = ReqUtils;

const router = express.Router();

router.post('/add', async (req, res) => {
  await validateParams(req, res, add.validateAsync(req.body));
  await UserInfo.create(req.body);
  ResUtils.success(res);
});

router.delete('/delete/:id', async (req, res) => {
  await validateParams(req, res, del.validateAsync(req.params));
  await UserInfo.destroy({ where: req.params });
  ResUtils.success(res);
});

router.put('/update', async (req, res) => {
  await validateParams(req, res, update.validateAsync(req.body));
  await UserInfo.update(req.body, { where: { id: req.body?.id } });
  ResUtils.success(res);
});

router.get('/read', async (req, res) => {
  await validateParams(req, res, read.validateAsync(req.query));
  const result = await UserInfo.findAll({ where: req.query as any });
  res.json(result);
});

export default router;
