import { Request, Response } from "express";
const { PrismaClient } = require('@prisma/client')
import { Registrar } from "../model/HomeModel";

const prisma = new PrismaClient();

export const homeGet = (req: Request, res: Response) => {
    res.render('home');
};

export const homePost = async (req: Request, res: Response) => {
    let data = req.body;
    await Registrar.register(data.nome, data.email, data.telefone, data.link, data.resumo)
    res.render('home');
};