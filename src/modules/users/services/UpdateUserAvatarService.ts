import AppError from '@shared/errors/AppError';
import path from 'path';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '@config/upload';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  user_id: string;
  avatarFilename?: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError('User not found.');

    if (user.avatar) {
      const userAvatarFilepath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilepath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilepath);
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user.avatar = avatarFilename!;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
