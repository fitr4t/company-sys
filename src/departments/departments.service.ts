import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/users.schema';
import { CreateDepartmentDto } from './createDepartment.dto';
import { Department, DepartmentDocument } from './departments.schema';
import { UpdateDepartmentDto } from './updateDepartment.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  createDepartment(dto: CreateDepartmentDto) {
    const department = new this.departmentModel(dto);
    return department.save();
  }
  async deleteDepartment(id: string) {
    return this.departmentModel.findOneAndRemove({ _id:id });
  }
  findAll() {
    return this.departmentModel.find();
  }
  findOne(id: string) {
    return this.departmentModel.findOne({ _id:id }).orFail();
  }
  async updateDepartment(id: string, dto: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    if (dto.name) {
      department.name = dto.name;
    }
    if (dto.description) {
      department.description = dto.description;
    }
    return department.save();
  }
  async assignUserToDepartment(userId: string, departmentId: string) {
    const user = await this.userModel.findOne({ _id:userId });
    const department = await this.findOne(departmentId);
    user.department = department;
    return user.save();
  }
}
