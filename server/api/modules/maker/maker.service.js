import makerModel from './maker.model';

class MakerService {
  async create(createMakerDto) {
    try {
      return await makerModel.create(createMakerDto);
    } catch (err) {
      console.error(err);
    }
  }

  async findAll() {
    try {
      return await makerModel.find({});
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MakerService();
