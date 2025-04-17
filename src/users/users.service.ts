import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepository } from './repositories/user.repositories';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  async insertUser(user: User) {
    const result = await this.userRepository.addUser(user);
    return {
      msg: 'User successfully registered',
      result,
    };
  }

  getUser(id): User | null {
    return this.userRepository.findOne(id);
  }
}
