import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { RequiresPermissions } from 'src/roles/permission.decorator';
import { Permission } from 'src/roles/permission.enum';
import { CreateUserDto } from './createUser.dto';
import { UsersQueryDto } from './users.query.dto';
import { User } from './users.schema';
import { UserService } from './users.service';
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @RequiresPermissions(Permission.LIST_USERS)
  public getUsers(@Query() dto: UsersQueryDto) {
    return this.userService.getUsers(dto);
  }

  @Get(':id')
  @RequiresPermissions(Permission.FIND_USER)
  public getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  @RequiresPermissions(Permission.DELETE_USER)
  public deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Post()
  @RequiresPermissions(Permission.CREATE_USER)
  public createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get('/department/:id')
  @RequiresPermissions(Permission.LIST_DEPARTMENT_USERS)
  public getUsersByDep(@Param('id') id: string) {
    return this.userService.getUsersByDepartment(id);
  }
}
