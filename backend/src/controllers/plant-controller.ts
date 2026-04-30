import { Request , Response } from 'express';
import { IPlant } from '../models/plant-model';
import { PlantService } from '../services/plant-service';
import { criarPlantaSchema, buscarPlantaSchema, atualizarPlantaSchema } from '../validators/plant-validator';
import { ZodError } from 'zod';


export class PlantController { 

    async criarPlanta (req: Request, res: Response): Promise<any> {
        try {
            const novaPlantaParsed = criarPlantaSchema.parse(req.body);
            const novaPlanta = await PlantService.criarPlanta(novaPlantaParsed);

            res.status(201).json({
                message: `Plantinha '${novaPlanta.nome}' cadastrada com sucesso :D`,
                data: novaPlanta
            })
        } catch (error) {       
                if(error instanceof ZodError){
                     return res.status(400).json({
                        message: "Dados inválidos",
                        errors: error.flatten()
                     })
                } 
                return res.status(500).json({
                    message: 'Falha ao registrar a plantinha x_x',
                    error: (error as Error).message
                });
            }
    };

    async atualizarPlanta (req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.id as string;
            const plantas = await PlantService.mostrarPlantaPorId(id);

            if (!plantas) {
                return res.status(404).json({
                    message: `Nenhuma planta com o ID ${id} foi encontrada.`
                })
            }
            
            const dadosAtualizadosParsed = atualizarPlantaSchema.parse(req.body);

            const plantaAtualizada = await PlantService.atualizarPlanta(id, dadosAtualizadosParsed);
            res.status(200).json({
                message: 'Plantinha atualizada com sucesso :D'
            })
        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    message: "Dados inválidos",
                    errors: error.flatten()
                })
            }
            return res.status(500).json({
                    message: 'Falha ao atualizar a plantinha x_x',
                    error: (error as Error).message
                })
        }
    };

    async mostrarPlanta (req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.id as string;

            const plantas = await PlantService.mostrarPlantaPorId(id);

            if (!plantas) {
                return res.status(404).json({
                    message: `Nenhuma planta com o ID ${id} foi encontrada.`
                })
            }

            res.status(200).json(plantas);

        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    message: "Dados inválidos",
                    errors: error.flatten()
                })
            }
            return res.status(500).json({
                message: 'Falha ao mostrar plantinha x_x',
                error: (error as Error).message
            })
        }
    };

    async mostrarEstufa (req: Request, res: Response): Promise<void> {
        try {
            const plantasEstufa = await PlantService.mostrarEstufa();
            res.status(200).json(plantasEstufa);
        } catch (error) {
            console.error('Falha ao mostrar plantinhas da estufa x_x');
            res.status(500).json({
                message: 'Falha ao mostrar plantinhas da estufa x_x',
                error: (error as Error).message
            })
        }
    };
}
