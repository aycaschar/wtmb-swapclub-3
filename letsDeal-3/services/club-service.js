const BaseService = require("./base-service");
const ClubModel = require("../models/club");

class ClubService extends BaseService {
  constructor() {
    super(ClubModel, `${__dirname}/../club-database.json`);
  }
}

module.exports = new ClubService();
