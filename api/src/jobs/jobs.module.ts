import { DynamicModule, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsRouterModule } from './router/jobs.router.module';
import { CronService } from './jobs.service';
import {StockModule} from 'src/modules/stock/stock.module'

@Module({})
export class JobsModule {
    static register(): DynamicModule {
        if (process.env.JOB_ENABLE === 'true') {
            return {
                module: JobsModule,
                controllers: [],
                providers: [CronService],
                exports: [],
                imports: [
                    ScheduleModule.forRoot(), 
                    JobsRouterModule,
                    MongooseModule.forRoot(process.env.MONGODB_URI),
                    StockModule,
                ],
            };
        }

        return {
            module: JobsModule,
            providers: [],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
}
