import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const list = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(400,{ message: "id_question no existe" }));
    } else {
      const negativos = await negativoDAO.list(req.params.id_quest);

      res.json(negativos);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id_question no encontrado en BD" }));
  }
};

export default list;