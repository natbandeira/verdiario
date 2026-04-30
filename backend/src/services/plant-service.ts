import { PlantModel, IPlant, IPlantDocument } from '../models/plant-model'

export class PlantService {
    
    static async criarPlanta(novaPlanta: IPlant): Promise<IPlantDocument> {
        return await PlantModel.create(novaPlanta);
    };

    static async atualizarPlanta(id: string, novosDados: Partial<IPlant>): Promise<IPlantDocument | null> {
        const plantaAtualizada = await PlantModel.findByIdAndUpdate(id, novosDados, { new: true });    
        return plantaAtualizada;
    };

    static async mostrarPlantaPorId(id: string): Promise<IPlantDocument | null> {
        return await PlantModel.findById(id);
    };

    static async mostrarEstufa(): Promise<IPlantDocument[]> {
        return await PlantModel.find();
    };
}