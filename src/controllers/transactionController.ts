import { Request, Response } from 'express';
import { TransactionRepository } from '../repositories/transactionRepository';

const transactionRepository = new TransactionRepository();

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await transactionRepository.getAllTransaction();
    res.status(200).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar transações' });
  }
};

export const addTransaction = async (req: Request, res: Response) => {
  const {  id_product, id_user } = req.body;
  try {
    const transaction = await transactionRepository.addTransaction( id_product, id_user);
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar a Transação' });
  }
};