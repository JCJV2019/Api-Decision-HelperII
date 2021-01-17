import HTTPErrors from "http-errors";
import HTTPStatuses from "statuses";

export default {
  logError(err, req, res, next) {
    req.error = err;
    //console.log("logError",err);
    next(err);
  },

  clientErrorHandler(err, req, res, next) {
    if (err instanceof HTTPErrors.HttpError) {
      console.log("clientErrorHandler",err)
      res.send(err);
      /* res
        .status(err.statusCode)
        .send(err.message || HTTPStatuses[err.statusCode]); */
    }
    next(err);
  },

  errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    console.log("errorHandler",err);
    res.send(err);
    //res.status(err.statusCode).send({message:"se ha producido un error: "}, err.type);
  }
};
