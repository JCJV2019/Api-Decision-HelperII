import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(400,{ message: "id no existe" }));
    } else {
      const negativo = await negativoDAO.listOne(req.params.id);
      
      res.json(negativo);
    }
  } catch (error) {
    next(HTTPerror(404,{ message: "id no encontrado en BD" }));
  }
};

export default listOne;