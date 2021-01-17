import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(400,{ message: "id_question no existe" }));
    } else {
      const negativo = await negativoDAO.remove(req.params.id_quest);

      res.json(negativo);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id_question no encontrado en BD" }));
  }
};

export default remove;