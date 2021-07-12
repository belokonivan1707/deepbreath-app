import express from 'express';

import createMakerRoutes from './modules/maker/maker.routes';
import createProductRoutes from './modules/product/product.routes';

const createRouter = (app) => {
  const router = express.Router();

  createMakerRoutes(router);
  createProductRoutes(router);

  app.use('/api', router);
  app.all('*', (req, res) =>
    res.sendStatus(404).json({
      status: 404,
      message: 'Source Not Found',
    })
  );
};

export default createRouter;
