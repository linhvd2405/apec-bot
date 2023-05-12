import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/common/auth/auth.module';
import { SettingAdminController } from 'src/common/setting/controllers/setting.admin.controller';
import { PermissionAdminController } from 'src/modules/permission/controllers/permission.admin.controller';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleAdminController } from 'src/modules/role/controllers/role.admin.controller';
import { RoleModule } from 'src/modules/role/role.module';
import { UserAdminController } from 'src/modules/user/controllers/user.admin.controller';
import { UserModule } from 'src/modules/user/user.module';
import {StockModule} from 'src/modules/stock/stock.module';
import {StockAdminController} from 'src/modules/stock/controllers/stock.admin.controller';
import { CronModule } from 'src/modules/cron/cron.module';
import { StockBulkService } from 'src/modules/stock/services/stock.bulk.service';

@Module({
    controllers: [
        SettingAdminController,
        UserAdminController,
        RoleAdminController,
        PermissionAdminController,
        StockAdminController,
    ],
    providers: [],
    exports: [],
    imports: [
        UserModule,
        AuthModule,
        RoleModule, 
        PermissionModule, 
        StockModule,
        MongooseModule.forRoot('mongodb://localhost:27017/db_pm'),
        CronModule,
       
    ],
})
export class RoutesAdminModule {}
