import { criarRegistro } from "./DataBaseModel";
import { type Registro } from "./RegistrosModel";




export const Registrar = {
    register: async (nome: string, email: string, telefone: string, link: string, resumo: string): Promise<Registro[]>=>{
        let data = await criarRegistro(nome, email, telefone, link, resumo)
        return data;
    }
}