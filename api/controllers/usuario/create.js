import usuarioDAO from "../../models/usuario/dao.js";
import HTTPerror from "http-errors";

const create = async (req, res, next) => {
  try {
    if (!req.body.email | !req.body.password || !req.body.name) {
      next(HTTPerror(400, { message: "email o password o name not found" }));
    } else {
      // Tenemos que verificar que no exista ya en la BD
      let usuario = await usuarioDAO.checkUser({"name": req.body.name.toUpperCase()});
      if(usuario == null) {
        usuario = await usuarioDAO.create(
          Object.assign({}, req.body)
        );  
        res.status(200).send({
          message: "Sing-up Ok"
        });  
      } else {
        next(HTTPerror(400, { message: "Ya existe el usuario" }));
      }
    }
  } catch (error) {
    next(HTTPerror(500));
  }
};

export default create;