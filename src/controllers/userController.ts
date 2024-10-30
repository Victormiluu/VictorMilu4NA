import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const addUser = async (req: Request, res: Response) => {
  const { name, email,passwordHash } = req.body;

  try {
    const user = await userService.createUser(name, email,passwordHash);
    res.status(201).json(user);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
};