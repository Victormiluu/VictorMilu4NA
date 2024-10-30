import pool from "../config/database";

const createTransactionsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        id_user INTEGER UNIQUE NOT NULL,
        id_product INTEGER UNIQUE NOT NULL,
        FOREIGN KEY (id_user) REFERENCES users(id),
        FOREIGN KEY (id_product) REFERENCES products(id)
      );
    `;

    await client.query(queryText);
    console.log('Tabela "Transaction" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createTransactionsTable().then(() => process.exit(0));
