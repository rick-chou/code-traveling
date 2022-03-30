import express from 'express';

import UserInfo from '../dao/user';
import Validator from '../validator/user';
import { ReqUtils, ResUtils } from '../utils';
import { logger } from '../log';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    console.log(req);
    await ReqUtils.validateParams(res, Validator.add.validateAsync(req.body));
    await ReqUtils.validateParams(res, UserInfo.create(req.body));
    ResUtils.success(res);
  } catch (error: any) {
    logger('error').error({
      api: req.originalUrl,
      param: req.body,
      error: error.message,
    });
  }
});

router.delete('/delete/:id', async (req, res) => {
  await ReqUtils.validateParams(res, Validator.del.validateAsync(req.params));
  await ReqUtils.validateParams(
    res,
    UserInfo.destroy({ where: req.params as any })
  );
  ResUtils.success(res);
});

router.put('/update', async (req, res) => {
  await ReqUtils.validateParams(res, Validator.update.validateAsync(req.body));
  await ReqUtils.validateParams(
    res,
    UserInfo.update(req.body, { where: { id: req.body?.id } })
  );
  ResUtils.success(res);
});

router.get('/read', async (req, res) => {
  await ReqUtils.validateParams(res, Validator.read.validateAsync(req.query));
  const result = await ReqUtils.validateParams(
    res,
    UserInfo.findAll({ where: req.query as any })
  );
  res.json(result);
});

export default router;
