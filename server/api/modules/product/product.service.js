import productModel from './product.model';

class ProductService {
  async create(createProductDto) {
    try {
      return await productModel.create(createProductDto);
    } catch (err) {
      console.error(err);
    }
  }

  async findAll() {
    try {
      return await productModel.find({});
    } catch (err) {
      console.error(err);
    }
  }
}

export default new ProductService();
