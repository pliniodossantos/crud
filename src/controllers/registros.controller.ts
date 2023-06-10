import { Request, Response } from "express";
import {Registro} from '../model/RegistrosModel';

export const registrosGetAll = async (req: Request, res: Response)=>
{
    let list = await Registro.getAll();
    let modal: string = req.query.modal as string;
    let deletado: string = req.query.deletado as string;
    res.render('registros',{
        registros: list,
        modal: modal,
        deletado: deletado
    });
};