import { Request, Response } from 'express';
import { User } from '../../models/User';

import bcrypt from 'bcrypt';

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name) {
      return res.status(422).json({ error: 'Name is required!' });
    }

    if (!email) {
      return res.status(422).json({ error: 'Email is required!' });
    }

    if (!password) {
      return res.status(422).json({ error: 'Password is required!' });
    }

    if (password !== confirmPassword) {
      return res.status(422).json({ error: 'Passwords must be the same!' });
    }

    // Verificar se já existe um usuário com o mesmo e-mail
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: 'The email used already exists!' });
    }

    // Criar senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Criar usuário
    await User.create({ name, email, password: passwordHash });

    res.status(201).json({ sucess: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
