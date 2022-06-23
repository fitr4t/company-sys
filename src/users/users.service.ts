import { Body, Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./createUser.dto";
import { User } from "./users.schema";

@Injectable()
export class UserService{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ){}

  @Post()
  createUser(@Body() dto:CreateUserDto) {
    const user = new this.userModel(dto);
    return user.save();

  }
  deleteUser() {}
  getUser() {}
  getUsers() {}
  getUsersByDepartment() {}
  createDepartment() {}
  deleteDepartment() {}
  getDepartment() {}
  getDepartments() {}
  updateDepartment() {}
  assignUserToDepartment() {}

}