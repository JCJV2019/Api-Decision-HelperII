import Router from 'express';
import create from './create.js';
import login from './login.js';
import list from './list.js';
import listOne from './listOne.js';
import remove from './remove.js';
import update from './update.js';
import auth from "../../middleware/jwt_auth.js";

const router = Router();

router.route('/register')
    .post(create)

router.route('/login')
    .post(login);

router.route('/list')
    .get(auth.isAuth,list);

router.route('/:id')
    .put(auth.isAuth,update)
    .delete(auth.isAuth,remove);

router.route('/:name')
    .get(auth.isAuth,listOne)

export default router;