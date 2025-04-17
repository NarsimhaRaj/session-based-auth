import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = this.usersService.getUser(username);
    const passwordValid = await bcrypt.compare(
      password,
      (user as User)?.password,
    );
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.name,
      };
    }
    return null;
  }
}
