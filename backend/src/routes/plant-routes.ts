import { Router } from 'express';
import { PlantController } from '../controllers/plant-controller';

const router = Router();
const plantController = new PlantController();

router.post('/planta', plantController.criarPlanta);
router.get('/planta/:id', plantController.mostrarPlanta);
router.put('/planta/:id', plantController.atualizarPlanta);
router.get('/estufa', plantController.mostrarEstufa);

export default router;

