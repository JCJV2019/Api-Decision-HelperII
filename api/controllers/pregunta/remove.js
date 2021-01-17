import preguntaDAO from "../../models/pregunta/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id_user) {
      next(HTTPerror(400,{ message: "id_user no existe" }));
    } else {
      const pregunta = await preguntaDAO.remove(req.params.id_user);

      res.json(pregunta);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id_user no encontrado en BD" }));
  }
};

export default remove;