import * as bcrypt from 'bcrypt';
import { User } from '../entity/user.entity';

export class UserRepository {
  _users: User[];
  constructor() {
    this._users = [];
  }

  async addUser(userDto: User) {
    const user = new User();
    if (this._users.find((d) => d.email == userDto.email)) {
      return {
        isSucces: false,
        message: 'User with email exist',
      };
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
    user.id = this._users.length + 1;
    user.email = userDto.email;
    user.name = userDto.name;
    user.password = hashedPassword;
    this._users.push(user);
    return user;
  }

  findOne(name: string): User | null {
    return this._users.find((d) => d.name == name) || null;
  }
}
