import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt.guard';
import { RequiresPermissions } from 'src/roles/permission.decorator';
import { Permission } from 'src/roles/permission.enum';
import { CreateDepartmentDto } from './createDepartment.dto';
import { DepartmentService } from './departments.service';

@UseGuards(JwtAuthGuard)
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @RequiresPermissions(Permission.CREATE_DEPARTMENT)
  create(@Body() dto: CreateDepartmentDto) {
    return this.departmentService.createDepartment(dto);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.departmentService.deleteDepartment(id);
  }
}
