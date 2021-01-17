import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const updateOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(400,{ message: "id no existe" }));
    } else {
      if (!req.body) {
        next(HTTPerror(400,{ message: "body no existe" }));
      } else {
        const negativo = await negativoDAO.updateOne(req.params.id, req.body);

        res.json(negativo);
      }
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id no encontrado en BD" }));
  }
};

export default updateOne;