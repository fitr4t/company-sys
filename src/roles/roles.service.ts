import { Injectable } from '@nestjs/common';
import { Permission } from './permission.enum';
import { Role } from './role.enum';

class RolePermission {
  role: Role;
  permissions: Permission[];
}

@Injectable()
export class RolesService {
  private readonly rolesPermissions: RolePermission[] = [
    {
      role: Role.SUPER_ADMIN,
      permissions: [
        Permission.CREATE_USER,
        Permission.DELETE_USER,
        Permission.FIND_USER,
        Permission.LIST_USERS,
        Permission.CREATE_DEPARTMENT,
        Permission.DELETE_DEPARTMENT,
        Permission.FIND_DEPARTMENT,
        Permission.UPDATE_DEPARTMENT,
        Permission.ASSIGN_USER_TO_DEPARTMENT,
        Permission.LIST_DEPARTMENTS,
      ],
    },
    {
      role: Role.DEPARTMENT_MANAGER,
      permissions: [
        Permission.LIST_DEPARTMENT_USERS,
        Permission.UPDATE_OWN_DEPARTMENT,
      ],
    },
  ];
  public getPermissionsByRole(role: Role): Permission[] {
    return this.rolesPermissions.find((item) => {
      return item.role === role;
    }).permissions;
  }
}
