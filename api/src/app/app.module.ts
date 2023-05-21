import { Module } from '@nestjs/common';
import { JobsModule } from 'src/jobs/jobs.module';
import { AppController } from './controllers/app.controller';
import { RouterModule } from 'src/router/router.module';
import { CommonModule } from 'src/common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';
@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        CommonModule,

        // Jobs
        JobsModule.register(),

        // Routes
        RouterModule.register(),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            exclude: ['/api/(.*)'],
        }),
    ],
})
export class AppModule {}
