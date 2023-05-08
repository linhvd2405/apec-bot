// import { Command } from 'nestjs-command';
// import { Injectable } from '@nestjs/common';
// import { StockService } from 'src/modules/stock/services/stock.service';
// import { StockBulkService } from 'src/modules/stock/services/stock.bulk.service';
// import { PermissionService } from 'src/modules/permission/services/permission.service';
// import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
// import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';
// import { ENUM_AUTH_ACCESS_FOR } from 'src/common/auth/constants/auth.enum.constant';

// @Injectable()
// export class StockSeed {
//     constructor(
//         private readonly permissionService: PermissionService,
//         private readonly stockBulkService: StockBulkService,
//         private readonly stockService: StockService
//     ) {}

//     @Command({
//         command: 'insert:stock',
//         describe: 'insert stocks',
//     })
//     async insert(): Promise<void> {
//         const permissions: PermissionDocument[] =
//             await this.permissionService.findAll({
//                 code: { $in: Object.values(ENUM_AUTH_PERMISSIONS) },
//             });

//         try {
//             const permissionsMap = permissions.map((val) => val._id);
//             await this.stockService.createSuperAdmin();
//             await this.stockBulkService.createMany([
//                 {
//                     name: 'Stock_recive',
//                     permissions: permissionsMap,
//                     accessFor: ENUM_AUTH_ACCESS_FOR.STOCK_RECIVE,
//                 },
//                 {
//                     name: 'Stock_send',
//                     permissions: [],
//                     accessFor: ENUM_AUTH_ACCESS_FOR.STOCK_SEND,
//                 },
//             ]);
//         } catch (err: any) {
//             throw new Error(err.message);
//         }

//         return;
//     }

//     @Command({
//         command: 'remove:stock',
//         describe: 'remove stocks',
//     })
//     async remove(): Promise<void> {
//         try {
//             await this.stockBulkService.deleteMany({});
//         } catch (err: any) {
//             throw new Error(err.message);
//         }

//         return;
//     }
// }
