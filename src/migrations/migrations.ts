import db from '../config/database';

// Função para inicializar o banco de dados
const initializeDatabase = () => {
    // Criar uma tabela se não existir
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
    );`, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        } else {
            console.log('Tabela "usuarios" criada ou já existe.');
        }
    });

    // Inserir dados iniciais
    const insertUser = (nome: string) => {
        db.run(`INSERT INTO usuarios (nome) VALUES (?)`, [nome], function(err) {
            if (err) {
                console.error('Erro ao inserir usuário:', err.message);
            } else {
                console.log(`Usuário ${nome} inserido com sucesso. ID: ${this.lastID}`);
            }
        });
    };

    // Inserindo alguns usuários
    insertUser('João');
    insertUser('Maria');
};

// Inicializar o banco de dados e inserir dados
initializeDatabase();