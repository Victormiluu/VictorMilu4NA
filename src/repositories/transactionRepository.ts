import { Pool } from 'pg';
import pool from '../config/database';
import { Transaction } from '../models/transactionModel';

export class TransactionRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todas as Transações

  async getAllTransaction(): Promise<Transaction[]> {
    const { rows } = await this.pool.query('SELECT * FROM transactions');
    return rows;
  }

  // Método para adicionar novas Transações
  async addTransaction(id_product: number, id_user: number): Promise<Transaction> {
    const queryText = 'INSERT INTO transactions( id_user,id_product ) VALUES( $1,$2) RETURNING *';
    const { rows } = await this.pool.query(queryText, [id_user,id_product, ]);
    return rows[0];
  }
}