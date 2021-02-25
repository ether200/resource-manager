import express from 'express';
import {
  registerUser,
  loginUser,
  protect,
  getUserProfile,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getUserProfile);

export default router;
