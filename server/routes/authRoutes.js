import express from 'express';
import { login, seedAdmin, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/seed', seedAdmin);
router.get('/profile', protect, getProfile);

export default router;
