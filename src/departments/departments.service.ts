import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './createDepartment.dto';
import { Department } from './departments.schema';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<Department>,
  ) {}

  createDepartment(dto: CreateDepartmentDto) {
    const department = new this.departmentModel(dto);
    return department.save();
  }
  async deleteDepartment(id: number) {
    return this.departmentModel.findOneAndRemove({ id });
  }
  findAll() {
    return this.departmentModel.find();
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.departmentModel.findOne({ id });
  }
}
