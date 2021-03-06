import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DepartmentDocument = Department & Document;
@Schema()
export class Department {
  @Prop()
  name: string;
  @Prop()
  description: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
