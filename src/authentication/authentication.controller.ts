import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './authentication.service';
import { SignInDto } from './signin.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  public signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post('/guest')
  public guest() {
    return this.authService.guest();
  }
}
