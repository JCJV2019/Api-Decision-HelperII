import Negativo from "./model.js";
import mongo from "../../mongo/MongoManager.js";

class negativoDAO {
  constructor() {
    mongo.connect();
  }

  create(data) {
    const negativo = new Negativo();
    Object.assign(negativo, data);

    return negativo.save();
  }

  list(id) {
    return Negativo.find({question:id}).exec();
  }

  remove(id) {
    return Negativo.deleteMany({question:id}).exec();
  }

  listOne(id) {
    return Negativo.findById(id).exec();
  }

  updateOne(id, data) {
    return Negativo.findByIdAndUpdate(id,
      { $set: { desc: data.desc, point: data.point }}, {
      new: false,
      useFindAndModify: false
    }).exec();
  }

  removeOne(id) {
    return Negativo.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  }

  removeAll(idUser) {
    return Negativo.deleteMany({user: idUser}).exec();
  }
}

export default new negativoDAO();