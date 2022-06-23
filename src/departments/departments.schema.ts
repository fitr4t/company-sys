import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Department{
  id:number;
  name:string;
  description:string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);