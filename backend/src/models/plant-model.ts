import mongoose, { Schema , Document } from 'mongoose';
export interface IPlant {
    nome: string;
    nomeCientifico?: string;
    dataChegada: Date;
    origem: string;
    dataUltimaAdubacao?: string;
    tipoAdubo?: string;
    dataUltimoTratamento?: string;
    tipoTratamento?: string;
    nomePraga?: string;
    plantaAtiva?: boolean;
}
export interface IPlantDocument extends Document {
    nome: string;
    nomeCientifico?: string;
    dataChegada: Date;
    origem: string;
    dataUltimaAdubacao?: string;
    tipoAdubo?: string;
    dataUltimoTratamento?: string;
    tipoTratamento?: string;
    nomePraga?: string;
    plantaAtiva?: boolean;
}

const PlantSchema: Schema = new Schema<IPlantDocument>({
    nome: { type: String, required: true },
    nomeCientifico: { type: String},
    dataChegada: { type: Date, required: true },
    origem: { type: String, required: true },
    dataUltimaAdubacao: { type: String },
    tipoAdubo: { type: String },
    dataUltimoTratamento: { type: String },
    tipoTratamento: { type: String },
    nomePraga: { type: String },
    plantaAtiva: { type: Boolean },
}, {
  timestamps: true // add createdAt e updatedAt automaticamente
});

export const PlantModel = mongoose.model<IPlantDocument>('Plant', PlantSchema);