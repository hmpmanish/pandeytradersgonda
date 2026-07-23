import express from 'express';
import { getCategories, createCategory, deleteCategory } from '../controllers/categoryController.js';
import { protect } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(protect, upload.single('image'), createCategory);

router.route('/:id')
  .delete(protect, deleteCategory);

export default router;
