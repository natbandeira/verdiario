import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/plant-routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error(uri);
    }
    try {
        await mongoose.connect(uri);
        console.log('Conectado ao MongoDB :D')
    } catch (error) {
        console.log(`Falha ao conectar com o MongoDB: ${error}`);
    }
}

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
})