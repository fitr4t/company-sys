import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { UserService } from 'src/users/users.service';
import { AuthController } from './authentication.controller';
import { AuthService } from './authentication.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Constants } from './constansts';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, JwtStrategy],
})
export class AuthModule {}
