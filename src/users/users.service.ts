import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./createUser.dto";
import { User, UserDocument } from "./users.schema";

@Injectable()
export class UserService{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ){}

  createUser(@Body() dto:CreateUserDto) {
    const user = new this.userModel(dto);
    return user.save();
  }
  async deleteUser(id: number) {
    const user = await this.getUser(id);
    if(!user){
      throw new NotFoundException('user not found');
    }
    return this.userModel.remove(user);
  }
  getUser(id: number) {
    return this.userModel.findOne({id});
  }
  getUsers() {
    return this.userModel.find();
  }
  findByEmail(email: string){
    return this.userModel.findOne({email});
  }
  getUsersByDepartment() {}
  updateDepartment() {}
  assignUserToDepartment() {}

}