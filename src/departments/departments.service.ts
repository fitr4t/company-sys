import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './createDepartment.dto';
import { Department, DepartmentDocument } from './departments.schema';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  createDepartment(dto: CreateDepartmentDto) {
    const department = new this.departmentModel(dto);
    return department.save();
  }
  async deleteDepartment(id: string) {
    return this.departmentModel.findOneAndRemove({ id });
  }
  findAll() {
    return this.departmentModel.find();
  }
  findOne(id: string) {
    return this.departmentModel.findOne({ id });
  }
  updateDepartment(id:string) {}
  assignUserToDepartment(userId:string, departmentId:string) {

  }
}
