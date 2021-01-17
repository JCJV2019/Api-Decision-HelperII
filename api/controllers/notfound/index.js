import HTTPError from "http-errors";

const notfound = (req, res, next) => {
    next(HTTPError(404, { message: "Ruta no encontrada" }));
}

export default notfound;
