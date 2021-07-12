import productService from './product.service';

class ProductController {
  async findAll(req, res) {
    const products = await productService.findAll();

    res.json({
      status: 200,
      products,
    });
  }

  async create(req, res) {
    const product = await productService.create(req.body);
    res.json({
      status: 200,
      product,
    });
  }
}

export default new ProductController();
