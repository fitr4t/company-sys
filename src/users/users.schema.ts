import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Department } from 'src/departments/departments.schema';
import { Role } from 'src/roles/role.enum';

export type UserDocument = User & mongoose.Document;
@Schema()
export class User {
  @Prop()
  id: string;

  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  role: Role;

  @Prop({
    type: mongoose.Schema.Types.ObjectId, ref: 'Department'
  })
  department: Department;
}

export const UserSchema = SchemaFactory.createForClass(User);
