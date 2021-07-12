import express from 'express';

import makerController from './maker.controller';

const createMakerRoutes = (router) => {
  const makerRouter = express.Router();

  makerRouter.get('/', makerController.findAll);
  makerRouter.post('/', makerController.create);

  router.use('/makers', makerRouter);
};

export default createMakerRoutes;
