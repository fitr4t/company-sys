import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Permission } from './permission.enum';
import { Role } from './role.enum';
import { RolesService } from './roles.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly rolesService: RolesService,
  ) {}
  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<Permission[]>(
      'permissions',
      context.getHandler(),
    );
    if (!permissions) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userRole = request.user.role as Role;
    const userPermissions = this.rolesService.getPermissionsByRole(userRole);
    return this.matchRoles(permissions, userPermissions);
  }
  private matchRoles(permissions: Permission[], userPermissions: Permission[]): boolean {
    for (let permission of permissions) {
      const found = userPermissions.find((item) => {
        return permission === item;
      });

      if (!found) {
        return false;
      }
    }
    return true;
  }
}
