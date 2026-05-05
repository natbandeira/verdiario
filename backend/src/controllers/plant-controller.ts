import { Request , Response } from 'express';
import { PlantService } from '../services/plant-service';
import { criarPlantaSchema, buscarPlantaSchema, atualizarPlantaSchema } from '../validators/plant-validator';
import { ZodError } from 'zod';


export class PlantController { 

    async criarPlanta (req: Request, res: Response): Promise<Response> {
        try {
            const novaPlantaParsed = criarPlantaSchema.parse(req.body);
            const novaPlanta = await PlantService.criarPlanta(novaPlantaParsed);

            return res.status(201).json({
                message: `Plantinha '${novaPlanta.nome}' cadastrada com sucesso :D`,
                data: novaPlanta
            })
        } catch (error) {       
                if(error instanceof ZodError){
                     return res.status(400).json({
                        message: "Dados inválidos",
                        error: error.flatten()
                     })
                } 
                return res.status(500).json({
                    message: 'Falha ao registrar a plantinha x_x',
                    error: (error as Error).message
                });
            }
    };

    async atualizarPlanta (req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id as string;
   
            const plantaAtualizadaParsed = atualizarPlantaSchema.parse(req.body);

            const plantaAtualizada = await PlantService.atualizarPlanta(id, plantaAtualizadaParsed);

            if (!plantaAtualizada) {
                return res.status(404).json({
                    message: `Nenhuma planta com o ID ${id} foi encontrada.`
                })
            }
            
            return res.status(200).json({
                message: 'Plantinha atualizada com sucesso :D',
                data: plantaAtualizada
            })
        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    message: "Dados inválidos",
                    error: error.flatten()
                })
            }
            return res.status(500).json({
                    message: 'Falha ao atualizar a plantinha x_x',
                    error: (error as Error).message
                })
        }
    };

    async buscarPlanta (req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id as string;

            const planta = await PlantService.buscarPlantaPorId(id);

            if (!planta) {
                return res.status(404).json({
                    message: `Nenhuma planta com o ID ${id} foi encontrada.`
                })
            }

            return res.status(200).json({
                message : `Aqui está a planta ${planta.nome}.`,
                data: planta
            });

        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    message: "Dados inválidos",
                    error: error.flatten()
                })
            }
            return res.status(500).json({
                message: 'Falha ao mostrar plantinha x_x',
                error: (error as Error).message
            })
        }
    };

    async mostrarEstufa (req: Request, res: Response): Promise<Response> {
        try {
            const plantasEstufa = await PlantService.mostrarEstufa();
            return res.status(200).json({
                message: 'Aqui estão todas suas plasntas cadastradas',
                data: plantasEstufa
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Falha ao mostrar plantinhas da estufa x_x',
                error: (error as Error).message
            })
        }
    };
}
