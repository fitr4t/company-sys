import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { RequiresPermissions } from 'src/roles/permission.decorator';
import { Permission } from 'src/roles/permission.enum';
import { CreateDepartmentDto } from './createDepartment.dto';
import { DepartmentService } from './departments.service';
import { UpdateDepartmentDto } from './updateDepartment.dto';

@UseGuards(JwtAuthGuard)
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @RequiresPermissions(Permission.CREATE_DEPARTMENT)
  create(@Body() dto: CreateDepartmentDto) {
    return this.departmentService.createDepartment(dto);
  }

  @Get(':id')
  @RequiresPermissions(Permission.FIND_DEPARTMENT)
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Get()
  @RequiresPermissions(Permission.LIST_DEPARTMENTS)
  findAll() {
    return this.departmentService.findAll();
  }

  @Delete(':id')
  @RequiresPermissions(Permission.DELETE_DEPARTMENT)
  delete(@Param('id') id: string) {
    return this.departmentService.deleteDepartment(id);
  }

  @Put(':id')
  @RequiresPermissions(Permission.UPDATE_DEPARTMENT)
  update(@Param('id') id: string, @Body() dto: UpdateDepartmentDto) {
    return this.departmentService.updateDepartment(id, dto);
  }
}
