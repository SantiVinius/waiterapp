import { Request, Response } from 'express';
import { User } from '../../models/User';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Validação de email e senha
    if (!email) {
      return res.status(422).json({ error: 'Email is required!' });
    }

    if (!password) {
      return res.status(422).json({ error: 'Password is required!' });
    }

    // Verificar se já existe um usuário com o mesmo e-mail
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    // Verificar se a senha bate com a resgistrada
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ error: 'Invalid password!' });
    }

    // Login
    const secret = `${process.env.SECRET}`;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret as string
    );

    res
      .status(200)
      .json({ sucess: 'Authentication performed successfully', token });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
