class GenericController {
  constructor(service) {
    this.service = new service();
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  async get(req, res) {
    try {
      const data = await this.service.get();
      res.status(200).json({
        status: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  async getById(req, res) {
    try {
      const data = await this.service.getById(req.params.id);
      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  async create(req, res) {
    try {
      const data = await this.service.create(req.body);
      res.status(201).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  async update(req, res) {
    try {
      const data = await this.service.update(req.params.id, req.body);
      res.status(201).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const data = await this.service.delete(req.params.id);
      res.status(201).json({
        status: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
}

export default GenericController;
