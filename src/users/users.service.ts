import {
  Body,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/roles/role.enum';
import { hash } from 'bcrypt';
import { CreateUserDto } from './createUser.dto';
import { UsersQueryDto } from './users.query.dto';
import { User, UserDocument } from './users.schema';
import { DepartmentDocument, Department } from 'src/departments/departments.schema';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}
  async onModuleInit() {
    const user = await this.userModel
      .findOne({ email: 'outcastapk@gmail.com' })
      .exec();

    if (!user) {
      const dto = new CreateUserDto();
      dto.firstName = 'Ahmed';
      dto.lastName = 'Bahaa';
      dto.email = 'outcastapk@gmail.com';
      dto.password = '123456789';
      dto.role = Role.SUPER_ADMIN;
      dto.username = 'outcast';
      this.createUser(dto).then(() => {
        console.log('Admin User Created');
      });
    }
  }

  async createUser(dto: CreateUserDto) {
    dto.password = await hash(dto.password, 5);
    const user = new this.userModel(dto);
    return user.save();
  }
  async deleteUser(id: string) {
    return this.userModel.findByIdAndRemove(id).orFail();
  }
  getUser(id: string) {
    return this.userModel.findById(id).orFail();
  }
  getUsers(dto: UsersQueryDto) {
    return this.userModel.find(dto).exec();
  }
  findByEmail(email: string) {
    return this.userModel.findOne({ email }).orFail();
  }
  async getUsersByDepartment(departmentId: string) {
    const department = await this.departmentModel.findById(departmentId).orFail();
    return this.userModel.find({ department:department });
  }
}
