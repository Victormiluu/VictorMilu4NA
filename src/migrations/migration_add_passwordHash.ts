import pool from '../config/database';

const alterUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE users 
ADD COLUMN IF NOT EXISTS passwordhash VARCHAR(255) ;
    `;
    await client.query(queryText);
    console.log('Tabela "users" alterada com sucesso!');
  } catch (err) {
    console.error('Erro ao alterar tabela:', err);
  } finally {
    client.release();
  }
};

    alterUsersTable().then(() => process.exit(0));