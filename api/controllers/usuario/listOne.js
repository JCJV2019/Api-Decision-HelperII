import usuarioDAO from "../../models/usuario/dao.js";
import jwt from "jwt-simple";
import HTTPerror from "http-errors";

// El Usuario CJORDAN podrá ver el que pida, los demás sólo podrán ver el suyo

const decodeToken = (token, name) => {
  const decoded = new Promise((resolve, reject) => {
    const payload = jwt.decode(token, process.env.SECRET_TOKEN);
    if (payload.sub === "CJORDAN" || payload.sub === name)
      resolve();
    else
      reject({});
    });
  return decoded;
};

const listOne = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  decodeToken(token, req.params.name)
  .then(async () => {
    const user = await usuarioDAO.listOne(req.params.name);
    res.json(user);
  })
  .catch(response => {
    next(HTTPerror(404, { message: "No puedes ver el usuario " + req.params.name }))
  });
};

export default listOne;