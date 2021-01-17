import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const list = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(400,{ message: "id_question no exiset" }));
    } else {
      const positivos = await positivoDAO.list(req.params.id_quest);

      res.json(positivos);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id_question no encontrado en BD" }));
  }
};

export default list;