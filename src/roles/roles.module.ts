import { Module } from '@nestjs/common';
import { RoleGuard } from './role.guard';
import { RolesService } from './roles.service';

@Module({
  providers: [RolesService, RoleGuard],
  exports: [RoleGuard],
})
export class RolesModule {}
