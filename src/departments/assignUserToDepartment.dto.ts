import { IsNotEmpty } from "class-validator";

export class AssignUserToDepartmentDto{
  @IsNotEmpty()
  userId:string;
}