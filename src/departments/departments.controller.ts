import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDepartmentDto } from './createDepartment.dto';
import { DepartmentService } from './departments.service';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
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
