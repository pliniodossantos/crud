const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


export async function buscarBancodeDados(){
    return await prisma.Registro.findMany()
}

export async function buscarBancodeDadosPorId(id: number){
    return await prisma.Registro.findUnique({
        where: {
            id: id
        }
    })
}

export async function criarRegistro(nome: string, email: string, telefone: string, link: string, resumo: string) {
    return await prisma.Registro.create({
        data: {
            nome: nome,
            email: email,
            telefone: telefone,
            link: link,
            resumo: resumo
        }
    })
}

export async function excluirRegistroPorId(id: number){
    return await prisma.Registro.delete({
        where: {
            id: id
        }
    })
}

export async function editarRegistro(id: number, nome: string, email: string, telefone: string, link: string, resumo: string) {
    return await prisma.Registro.update({
        where: {
            id: id
        },
        data: {
            nome: nome,
            email: email,
            telefone: telefone,
            link: link,
            resumo: resumo
        }
    })
}