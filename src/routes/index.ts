import { Router, Request, Response } from "express";
import * as RegistroController from '../controllers/registros.controller';
import * as HomeController from '../controllers/home.controller';
import * as RegistroDetalhadoController from '../controllers/registro-detalhado.controller'

const router = Router();

router.get('/', HomeController.homeGet);

router.post('/', HomeController.homePost);

router.get('/registros', RegistroController.registrosGetAll);

router.get('/registro-detalhado/:slug', RegistroDetalhadoController.registrosGetId );
router.post('/excluir', RegistroDetalhadoController.exluirPorId );
router.post('/editar', RegistroDetalhadoController.editarPorId );
router.post('/edicao', RegistroDetalhadoController.idEditado)
export default router;