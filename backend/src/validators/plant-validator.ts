import { xid, z } from 'zod';


export const criarPlantaSchema = z.object({
    nome: z.string().min(3, "Nome é obrigatório"),
    nomeCientifico: z.string().optional(),
    dataChegada: z.coerce.date("Esta não é uma data válida"),
    origem: z.string().min(2, "Origem é obrigatória"),
    dataUltimaAdubacao: z.coerce.date("Esta não é uma data válida").optional(),
    tipoAdubo: z.string().optional(),
    dataUltimoTratamento: z.coerce.date("Esta não é uma data válida").optional(),
    tipoTratamento: z.string().optional(),
    nomePraga: z.string().optional(),
    plantaAtiva: z.boolean().optional()
});

export const atualizarPlantaSchema = z.object({
    nome: z.string().min(3, "Nome é obrigatório"),
    nomeCientifico: z.string().optional(),
    dataChegada: z.coerce.date("Esta não é uma data válida"),
    origem: z.string().min(3, "Origem é obrigatória"),
    dataUltimaAdubacao: z.coerce.date("Esta não é uma data válida").optional(),
    tipoAdubo: z.string().optional(),
    dataUltimoTratamento: z.coerce.date("Esta não é uma data válida").optional(),
    tipoTratamento: z.string().optional(),
    nomePraga: z.string().optional(),
    plantaAtiva: z.boolean().optional()
});