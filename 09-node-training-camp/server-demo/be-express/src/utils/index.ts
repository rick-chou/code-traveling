import { logger } from '../log';

const validateParams = async (req: any, res: any, statement: Promise<any>) => {
  try {
    await statement;
  } catch (error: any) {
    logger('error').error({
      api: req.originalUrl,
      param: req.body,
      error: error.message,
    });
    res.status(400);
    res.json({
      message: error.message,
      status: false,
    });
  }
};

const success = (res: any) =>
  res.json({
    message: 'success',
    status: true,
  });

export const ReqUtils = {
  validateParams,
};

export const ResUtils = {
  success,
};
