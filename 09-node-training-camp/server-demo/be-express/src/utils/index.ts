const validateParams = async (res: any, statement: Promise<any>) => {
  return new Promise((resolve, reject) => {
    statement.then(resolve).catch((err) => {
      res.status(400);
      res.json({
        message: err.message,
        status: false,
      });
      reject(err);
    });
  });
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
