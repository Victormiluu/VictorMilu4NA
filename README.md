# bookstore Star

O Bookstore Star é uma aplicação de uma livraria que visa ajudar os clientes e funcionarios a manter tudo organizado e dinamico.

## Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Aqui estão alguns exemplos:

- O sistema deve permitir que os funcionarios da livraria publiquem e editem sobre disponibilidades e status dos livros.

- O sistema deve permitir que os funcionarios bloqueem e desbloqueem os perfis de usuarios com status diferentes.

- O sistema deve permitir que os usuários reservem livros e agende a data de devolção.

- O sistema deve permitir que os usuarios após a entrega do livro alugado, avaliem e conte uma breve esperiencia do livro com filtro de spoiler para outros usuarios.

- O sistema deve permitir que usuarios com pagamento pendente ou livros ja alugados não possam reservar outros.

## Requisitos Não Funcionais

Os requisitos não funcionais são critérios que podem ser usados para julgar a operação de um sistema, em vez de comportamentos específicos. Exemplos incluem:

- O sistema deve ser capaz de suportar até 500 usuários simultâneos.

- O tempo de resposta para qualquer operação deve ser inferior a 5 segundos.

- O sistema deve ser compatível com os navegadores mais populares.

- O sistema deve garantir a segurança dos dados do usuário através de criptografia.

- O sistema deve garantir que livros esgotados ou ja alugados não possam ser reservados por outro usuario

- O sistema deve garantir a confiabilidade de dados e sistemas de transação segura.

## Dependências

As dependências são bibliotecas ou ferramentas necessárias para o funcionamento do projeto. Aqui estão algumas que você pode precisar:

- Node.js (versão 14 ou superior)
- TypeScript (versão 4 ou superior)
- Express (versão 4 ou superior)
- Mongoose (para conexão com MongoDB)
- dotenv (para gerenciamento de variáveis de ambiente)

Para instalar as dependências, execute:

```bash
npm install
```

## Análise de Riscos

A análise de riscos é uma parte importante do planejamento de qualquer projeto. Aqui estão alguns riscos potenciais e suas mitig ações:

- **Risco:** Falhas de segurança
  - **Mitigação:** Implementar práticas de codificação segura e realizar testes de segurança regulares.
  
- **Risco:** Baixo desempenho sob carga
  - **Mitigação:** Realizar testes de carga e otimizar o código e a infraestrutura conforme necessário.

- **Risco:** Dependências desatualizadas
  - **Mitigação:** Monitorar e atualizar as dependências regularmente.

## Comandos de Inicialização do TypeScript

Para iniciar o projeto com TypeScript, siga os passos abaixo:

1. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

2. **Compile o código TypeScript:**

   ```bash
   npx tsc
   ```

3. **Inicie o servidor:**

   ```bash
   node dist/index.js
   ```

4. **Para desenvolvimento, você pode usar o comando:**

   ```bash
   npx ts-node src/index.ts
   ```

## Contribuição

Sinta-se à vontade para contribuir com o projeto! Veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para mais informações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).


Autos: Victor Milu
