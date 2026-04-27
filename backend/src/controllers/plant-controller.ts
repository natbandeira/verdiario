import { Request , Response } from 'express';
import { IPlant } from '../models/plant-model'
import { PlantService } from '../services/plant-service';
import { criarPlantaSchema } from '../validators/plant-validator';

export class PlantController { 

    async criarPlanta (req: Request, res: Response): Promise<void> {
        try {
            const plantaParsed = criarPlantaSchema.parse(req.body);
            const novaPlanta = await PlantService.criarPlanta(plantaParsed);

            res.status(201).json({
                message: `Plantinha '${novaPlanta.nome}' cadastrada com sucesso :D`,
                data: novaPlanta
            })
       } catch (error) {
            res.status(500).json({
                message: 'Falha ao registrar a plantinha x_x',
                error: (error as Error).message
            })
       }
    };

    async atualizarPlanta (req: Request, res: Response): Promise<any> {
        try {
            const nomePlanta = req.body.nome;

            if (!nomePlanta || nomePlanta === 0) {
                return res.status(400).json({
                    message: "Nome da planta é obrigatório!"
                })
            }
            
            const plantaExiste = await PlantService.mostrarPlanta(nomePlanta);
   
            if (plantaExiste.length === 0) {
                return res.status(404).json({
                    message: `A plantinha ${nomePlanta} não existe na estufa`
                })
            }

            const novosDados = req.body;

            const plantaAtualizada = await PlantService.atualizarPlanta(nomePlanta, novosDados);
            res.status(200).json({
                message: `Plantinha '${nomePlanta}' atualizada com sucesso :D`
            })
        } catch (error) {
            console.error('Falha ao atualizar a plantinha x_x');
            res.status(500).json({
                message: 'Falha ao atualizar a plantinha x_x',
                error: (error as Error).message
            })
        }
    };

    async mostrarPlanta (req: Request, res: Response): Promise<any> {
        try {
            const nomePlanta = req.params.nomePlanta as string;

            if (!nomePlanta) {
                return res.status(400).json({
                    message: "Nome da planta é obrigatório!"
                })
            }

            const planta = await PlantService.mostrarPlanta(nomePlanta);
            res.status(200).json(planta);
        } catch (error) {
            console.error('Falha ao mostrar plantinha x_x');
            res.status(500).json({
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
