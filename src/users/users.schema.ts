import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: number;

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

  @Prop()
  department: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
