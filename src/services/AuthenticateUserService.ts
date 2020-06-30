import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../entities/User';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) throw new AppError('Incorrect email/password combination', 401);

    const passwordCheck = await compare(password, user.password);

    if (!passwordCheck)
      throw new AppError('Incorrect email/password combination', 401);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    await usersRepository.save(user);

    return { user, token };
  }
}

export default AuthenticateUserService;
