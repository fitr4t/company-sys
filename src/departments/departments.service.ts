import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './departments.schema';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private readonly departmentModel: Model<Department>) {}
}
