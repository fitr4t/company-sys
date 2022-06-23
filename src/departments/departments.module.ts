import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
  ],
  controllers:[DepartmentController],
  providers:[DepartmentService]
})
export class DepartmentModule {}
