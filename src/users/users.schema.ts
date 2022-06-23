import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
  @Prop()
  id:number;

  @Prop()
  username:string;

  @Prop()
  firstName:string;

  @Prop()
  lastName:string;

}

export const UserSchema = SchemaFactory.createForClass(User);