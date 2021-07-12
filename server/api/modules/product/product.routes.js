import express from 'express';

import productController from './product.controller';

const createProductRoutes = (router) => {
  const productRouter = express.Router();

  productRouter.get('/', productController.findAll);
  productRouter.post('/', productController.create);

  router.use('/products', productRouter);
};

export default createProductRoutes;
