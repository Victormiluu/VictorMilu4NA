import { UserRepository } from '../repositories/userRepository';
import { isValidEmail, isValidName } from '../helpers/validationHelper';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, passwordHash:string) {
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    if (!isValidName(name)){
      throw new Error('Nome inválido');
    }
    return await this.userRepository.addUser(name, email,passwordHash);
  }

  async getUserByEmail(email:string) {
  return await this.userRepository.getUserByEmail(email);
  }
}