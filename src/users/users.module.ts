import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
    ]),
  ],
  controllers: [UsersController],
  providers: [UserService, RolesService],
  exports: [UserService],
})
export class UserModule {}
