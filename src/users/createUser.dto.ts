import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  password: string;

  lastName: string;

  department: string;

  @IsNotEmpty()
  role: string;

  @IsEmail()
  email: string;
}
