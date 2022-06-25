import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './departments/departments.module';
import { RolesModule } from './roles/roles.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DB_CONNECTION'), // Loaded from .ENV
      }),
    }),
    UserModule,
    DepartmentModule,
    RolesModule,
  ],
})
export class AppModule {}
