import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    // console.log(111,user);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      // console.log(2222222222222,result);
      // console.log(33333,user);

      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(1, user);

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      expired: +new Date() + 1000 * 60 * 60 * 24
    };
  }
}
