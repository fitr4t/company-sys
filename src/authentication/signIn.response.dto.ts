import { User } from "src/users/users.schema";

export class SignInResponseDto{
  user: User;
  accessToken: string;
}