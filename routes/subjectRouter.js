import express from 'express';
import { protect } from '../controllers/userController.js';
import {
  createSubject,
  deleteSubject,
  findSubject,
  findSubjectByUser,
  updateSubject,
} from '../controllers/subjectController.js';

const router = express.Router();

router.post('/', protect, createSubject);
router.get('/', protect, findSubjectByUser);
router.get('/:id', protect, findSubject);
router.delete('/:id', protect, deleteSubject);
router.put('/:id', protect, updateSubject);

export default router;
