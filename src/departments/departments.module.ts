import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';
import { User, UserSchema } from 'src/users/users.schema';
import { DepartmentController } from './departments.controller';
import { Department, DepartmentSchema } from './departments.schema';
import { DepartmentService } from './departments.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Department.name,
        schema: DepartmentSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    RolesModule,
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService, RolesService],
})
export class DepartmentModule {}
