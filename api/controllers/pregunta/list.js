import preguntaDAO from "../../models/pregunta/dao.js";
import HTTPerror from "http-errors";

const list = async (req, res, next) => {
  try {
    if (!req.params.id_user) {
      next(HTTPerror(400,{ message: "id_user no existe" }));
    } else {
      const preguntas = await preguntaDAO.list(req.params.id_user);

      res.json(preguntas);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id_user no encontrado en BD" }));
  }
};

export default list;