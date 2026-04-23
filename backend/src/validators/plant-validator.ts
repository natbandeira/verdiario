import { z } from 'zod';

export const createPlantSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    nomeCientifico: z.string().optional(),
    dataChegada: z.coerce.date(),
    origem: z.string().min(1, "Origem é obrigatória"),
    dataUltimaAdubacao: z.coerce.date().optional(),
    tipoAdubo: z.string().optional(),
    dataUltimoTratamento: z.coerce.date().optional(),
    tipoTratamento: z.string().optional(),
    nomePraga: z.string().optional(),
    plantaAtiva: z.boolean().optional()
});