import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { RequiresPermissions } from 'src/roles/permission.decorator';
import { Permission } from 'src/roles/permission.enum';
import { UsersQueryDto } from './users.query.dto';
import { User } from './users.schema';
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
  ) {}

  @Get()
  @RequiresPermissions(Permission.LIST_USERS)
  public getUsers(@Query() dto:UsersQueryDto ):User[]{
    return []
  }
}
