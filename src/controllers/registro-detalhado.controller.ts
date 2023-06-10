import { Request, Response } from "express";
import {Registro} from '../model/RegistrosModel';


export const registrosGetId = async (req: Request, res: Response)=>
{
    let slug: number = parseInt(req.params.slug);
    let list = await Registro.getFromId(slug);
    res.render('registro-detalhado',{
        registro: list
    });
};

export const exluirPorId = async (req: Request, res: Response)=>
{
    let id: number = parseInt(req.body.id);
    await Registro.deleteFromId(id);
    res.redirect('/registros?modal=show&deletado='+id);
};
export const editarPorId = async (req: Request, res: Response)=>
{
    
    let id: number = parseInt(req.body.id);
    let list = await Registro.getFromId(id);
    res.render('editar-registro',{
        registro: list
    });
};
export const idEditado = async (req: Request, res: Response)=>
{
    let id: number = parseInt(req.body.id);
    let data = req.body;
    await Registro.editFromId(id, data.nome, data.email, data.telefone, data.link, data.resumo);
    res.redirect('/registros');
    
}