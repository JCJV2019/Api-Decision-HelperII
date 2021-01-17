import Usuario from "./model.js";
import mongo from "../../mongo/MongoManager.js";

class usuarioDAO {
  constructor() {
    mongo.connect();
  }

  create(data) {
    const usuario = new Usuario(data);
    return usuario.save();
  }

  checkUser(data) {
    return Usuario.findOne(data).lean();
  }

  checkUserbyId(id) {
    return Usuario.findById(id).lean();
  }

  list() {
    return Usuario.find({}, { name: 1, email: 1 }).exec();
  }

  listOne(nameSearch) {
    return Usuario.find({ name: nameSearch }, { name: 1, email: 1 }).exec();
  }

  update(id, data) {
    return Usuario.findByIdAndUpdate(id, data, {
      new: false,
      useFindAndModify: false,
    }).exec();
  }

  remove(id) {
    // Transacción, borrado en Cascada.
    return Usuario.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  }
}

export default new usuarioDAO();
