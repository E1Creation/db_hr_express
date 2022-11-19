class GenericService {
  constructor(model) {
    this.model = model;
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  async get() {
    console.log(this.model);
    const data = await this.model.findAll();
    return data;
  }
  async getById(id) {
    const data = await this.model.findOne({
      where: {
        id: id,
      },
    });
    return data;
  }

  async create(data) {
    const newData = await this.model.create(data);
    return newData;
  }
  async update(id, data) {
    const newData = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    const respon = await this.model.findOne({
      where: {
        id: id,
      },
    });
    return respon;
  }
  async delete(id) {
    const respon = await this.model.findOne({
      where: {
        id: id,
      },
    });
    const newData = await this.model.destroy({
      where: {
        id: id,
      },
    });

    return respon;
  }
}
export default GenericService;
