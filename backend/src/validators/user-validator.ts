import { z } from 'zod';

export const criarUsuarioSchema = z.object({
    email: z.email("Email é obrigatório"),
    userName: z.string().min(1, "Username é obrigatório!"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})