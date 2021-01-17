import positivoDAO from "../../models/positivo/dao.js";

import HTTPerror from "http-errors";

const create = async (req, res, next) => {
  try {
    if (!req.body.desc || !req.body.point || !req.body.question || !req.body.user) {
        next(HTTPerror(400, { message: "desc o point o question o user no encontrado en body" }));
      } else {
      const positivo = await positivoDAO.create(
        Object.assign({}, req.body)
      );

      res.send(positivo);
    }
  } catch (error) {
    next(HTTPerror(500));
  }
};

export default create;