import { Router } from 'express';
import { PlantController } from '../controllers/plant-controller';

const router = Router();
const plantController = new PlantController();

router.post('/planta', plantController.criarPlanta);
router.get('/planta/:id', plantController.buscarPlanta);
router.put('/planta/:id', plantController.atualizarPlanta);
router.get('/plantas', plantController.mostrarEstufa);

export default router;

