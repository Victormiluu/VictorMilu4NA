import { Router } from 'express';
import { getTransaction, addTransaction } from '../controllers/transactionController';

const router = Router();

router.get('/transactions', getTransaction);
router.post('/transactions', addTransaction);

export default router;