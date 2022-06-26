import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Permission } from './permission.enum';
import { RoleGuard } from './role.guard';

export const RequiresPermissions = (...permissions: Permission[]) => {
  return applyDecorators(
    SetMetadata('permissions', permissions),
    UseGuards(RoleGuard),
  );
};
