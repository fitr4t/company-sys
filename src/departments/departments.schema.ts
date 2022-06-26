import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type DepartmentDocument = Department & Document;
@Schema()
export class Department {
  _id: number;
  name: string;
  description: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
