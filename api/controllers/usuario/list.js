import usuarioDAO from "../../models/usuario/dao.js";
import jwt from "jwt-simple";
import HTTPerror from "http-errors";

// El Usuario CJORDAN podrá ver todos, los demás no podrán ver ninguno

const decodeToken = (token) => {
  const decoded = new Promise((resolve, reject) => {
    const payload = jwt.decode(token, process.env.SECRET_TOKEN);
    if (payload.sub === "CJORDAN")
      resolve();
    else
      reject({});
    });
  return decoded;
};

const list = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  decodeToken(token)
  .then(async () => {
    const users = await usuarioDAO.list();
    res.json(users);
  })
  .catch(response => {
    next(HTTPerror(404, { message: "No puedes listar los usuarios."}));
  });
};

export default list;
