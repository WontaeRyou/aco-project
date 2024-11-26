// backend/src/routes/apiRoutes.js
import express from 'express';
import { CopyGenerationController } from '../controllers/copyGenerationController.js';

const router = express.Router();

router.post('/generate-copy', CopyGenerationController.generate);

export default router;