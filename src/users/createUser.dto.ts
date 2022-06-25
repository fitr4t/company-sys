import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from 'src/roles/role.enum';

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
  role: Role;

  @IsEmail()
  email: string;
}
