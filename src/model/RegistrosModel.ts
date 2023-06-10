import { editarPorId } from "../controllers/registro-detalhado.controller";
import { editarRegistro } from "./DataBaseModel";
import { buscarBancodeDados, buscarBancodeDadosPorId, excluirRegistroPorId } from "./DataBaseModel";

export type Registro = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    link: string,
    resumo: string
};

export const Registro = {
    getAll: async (): Promise<Registro[]> => {
        let data = await buscarBancodeDados();
        return data;
    },
    getFromId: async (id: number): Promise<Registro[]> =>{
        let data = await buscarBancodeDadosPorId(id);
        return data;
    },
    deleteFromId: async (id: number): Promise<Registro[]> =>{
        let data = await excluirRegistroPorId(id);
        return data;
    },
    editFromId: async (id: number, nome: string, email: string, telefone: string, link: string, resumo: string): Promise<Registro[]>=>{
        let data = await editarRegistro(id, nome, email, telefone, link, resumo)
        return data;
    }
    
};
    
    









