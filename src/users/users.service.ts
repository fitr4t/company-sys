import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.schema";

@Injectable()
export class UserService{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ){}

  createUser() {}
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