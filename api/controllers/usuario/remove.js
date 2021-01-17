import usuarioDAO from "../../models/usuario/dao.js";
import positivoDAO from "../../models/positivo/dao.js";
import negativoDAO from "../../models/negativo/dao.js";
import preguntaDAO from "../../models/pregunta/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(400, { message: "Falta el id" }));
    } else {
      // Borrado en cascada (Positivos-Negativos-Preguntas-Usuarios)
      const resultPositivo = await positivoDAO.removeAll(req.params.id);
      resultPositivo["Coleccion"] = "Positivos";
      const resultNegativo = await negativoDAO.removeAll(req.params.id);
      resultNegativo["Coleccion"] = "Negativos";
      const resultPregunta = await preguntaDAO.removeAll(req.params.id);
      resultPregunta["Coleccion"] = "Preguntas";
      const usuarioDeleted = await usuarioDAO.remove(req.params.id);
      //
      const mensaje = {};
      mensaje["Positivos"] = resultPositivo;
      mensaje["Negativos"] = resultNegativo;
      mensaje["Preguntas"] = resultPregunta;
    if (usuarioDeleted) {
        mensaje["Usuario"] = usuarioDeleted;
        res.json(mensaje);
      } else {
        mensaje["message"] = "No existe el id en Usuarios." ;
        next(HTTPerror(404, mensaje));
      }
    }
  } catch (error) {
    next(HTTPerror(500));
  }
};

export default remove;