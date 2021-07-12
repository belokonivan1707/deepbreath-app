import makerService from './maker.service';

class MakerController {
  async findAll(req, res) {
    const makers = await makerService.findAll();

    res.json({
      status: 200,
      makers,
    });
  }

  async create(req, res) {
    const maker = await makerService.create(req.body);

    res.json({
      status: 200,
      maker,
    });
  }
}

export default new MakerController();
