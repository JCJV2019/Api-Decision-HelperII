import Router from 'express';
import create from './create.js';
import listOne from './listOne.js';
import updateOne from './updateOne.js';
import removeOne from './removeOne.js';
import list from './list.js';
import remove from './remove.js';
import auth from "../../middleware/jwt_auth.js";

const router = Router();

router.route('/')
    .post(auth.isAuth,create);

router.route('/:id')
    .get(auth.isAuth,listOne)
    .put(auth.isAuth,updateOne)    
    .delete(auth.isAuth,removeOne);

router.route('/pregunta/:id_quest')
    .get(auth.isAuth,list)
    .delete(auth.isAuth,remove);

export default router;  