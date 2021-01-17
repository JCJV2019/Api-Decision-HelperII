import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(400,{ message: "id no existe" }));
    } else {
      const positivo = await positivoDAO.listOne(req.params.id);

      res.json(positivo);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id no encontrado en BD" }));
  }
};

export default listOne;