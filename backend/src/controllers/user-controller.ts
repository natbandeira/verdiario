import { criarUsuarioSchema } from "../validators/user-validator";
import { ZodError } from 'zod';
import { UserService } from '../services/user-service';

export class UserController {
    
    async criarUsuario (req: Request, res: Response): Promise<Response> {
        try {
            const usuarioParsed = criarUsuarioSchema.parse(req.body);
            const novoUsuario = await UserService.criarUsuario(usuarioParsed);

            return res.status(201).json({
                message: `Usuário ${usuarioParsed.userName} criado!`,
                data: novoUsuario
            })
        } catch (error) {
            if (error instanceof ZodError){
                return res.status(400).json({
                    message: "Dados inválidos",
                    error: error.flatten()
                })
            }
            return res.status(500).json({
                message: ''
            })
        }

    };

    async atualizarUsuario (req: Request, res: Response): Promise<Response> {

    };
}