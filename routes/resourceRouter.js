import express from 'express';
import { protect } from '../controllers/userController.js';
import {
  createResource,
  deleteResource,
  findResources,
  updateResource,
} from '../controllers/resourceController.js';

const router = express.Router();

router.post('/', protect, createResource);
router.get('/:subjectId', protect, findResources);
router.delete('/:id', protect, deleteResource);
router.put('/:id', protect, updateResource);

export default router;
