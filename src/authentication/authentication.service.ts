import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { SignInDto } from './signin.dto';
import { compare } from 'bcrypt';
import { User } from 'src/users/users.schema';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDto } from './signIn.response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  public async signIn(dto: SignInDto): Promise<SignInResponseDto> {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw new BadRequestException('Invalid Email');
    }
    const matchPass = await compare(dto.password, user.password);
    if (!matchPass) {
      throw new BadRequestException('Invalid Password');
    }
    return { user: user, accessToken: this.generateToken(user) };
  }

  public guest() {
    return {
      user: null,
      accessToken: this.generateToken({
        _id: '0',
        email: 'guest@email.com',
        role: null,
      } as User),
    };
  }

  private generateToken(user: User) {
    const payload = { username: user.email, sub: user._id, role: user.role };
    return this.jwtService.sign(payload);
  }
}
