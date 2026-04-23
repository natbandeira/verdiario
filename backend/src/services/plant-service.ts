import { PlantModel, IPlant, IPlantDocument } from '../models/plant-model'

export class PlantService {
    
    static async criarPlanta(novaPlanta: IPlant): Promise<IPlantDocument> {
        return await PlantModel.create(novaPlanta);
    };

    static async atualizarPlanta(nomePlanta: string, novosDados: Partial<IPlant>): Promise<IPlantDocument> {
        const plantaAtualizada = await PlantModel.findOneAndUpdate({nome: nomePlanta }, novosDados, { new: true }); // para retornar o documento atualizado
        if(!plantaAtualizada) {
            throw new Error(`Nenhuma planta com o nome '${nomePlanta}' foi encontrada :/`);
        }
        return plantaAtualizada;
    };

    static async mostrarPlanta(nomePlanta: string): Promise<IPlantDocument[]> {
        return await PlantModel.find({ nome: nomePlanta });
    };

    static async mostrarEstufa(): Promise<IPlantDocument[]> {
        return await PlantModel.find();
    };
}