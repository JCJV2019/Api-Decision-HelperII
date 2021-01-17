import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const updateOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(400,{ message: "id no no existe" }));
    } else {
      if (!req.body) {
        next(HTTPerror(400,{ message: "body no existe" }));
      } else {
        const positivo = await positivoDAO.updateOne(req.params.id, req.body);

        res.json(positivo);
      }
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id no encontrado en BD" }));
  }
};

export default updateOne;