import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from 'src/departments/departments.schema';
import { RolesService } from 'src/roles/roles.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { UserService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Department.name,
        schema: DepartmentSchema
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UserService, RolesService],
  exports: [UserService],
})
export class UserModule {}
