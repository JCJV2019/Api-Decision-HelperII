import usuarioDAO from "../../models/usuario/dao.js";
import HTTPerror from "http-errors";

const update = async (req, res, next) => {
  try {
    // Tenemos que verificar que no exista ya en la BD
    if (req.body.id) {
      if (req.params.id === req.body.id) {
        let okUsuario = true;
        let okCorreo = true;
        let id = req.params.id;
        if (req.body.name) {
          let usuario = await usuarioDAO.checkUser({"name": req.body.name});
          if (usuario && usuario._id != id)
            okUsuario = false;
        }
        if (req.body.email) {
          let correo = await usuarioDAO.checkUser({"email": req.body.email});
          if (correo && correo._id != id)
            okCorreo = false;
        }
        let codigo = await usuarioDAO.checkUserbyId(req.body.id);
        if (codigo) {
          if(okUsuario && okCorreo)  {
            const cuerpo = Object.assign({},req.body);
            delete cuerpo.id;
            const usuarioUpdated = await usuarioDAO.update(
              req.params.id,
              Object.assign(codigo,cuerpo)
            );
            res.json(usuarioUpdated);
          } else {
            next(HTTPerror(400, { message: "Ya existe esta información" }));
          }
        } else {
          next(HTTPerror(404, { message: "No existe el id" }));
        }
      } else {
        next(HTTPerror(400, { message: "Los id's no son iguales" }));
      }
    } else {
      next(HTTPerror(400, { message: "Falta el id en el body" }));
    }
  } catch (error) {
    next(HTTPerror(500));
  }
};

export default update;
