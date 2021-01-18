import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const HOST = configService.get<string>('MONGO_HOST');
        const PORT = configService.get<string>('MONGO_PORT');
        const DB_NAME = configService.get<string>('DB_NAME');

        return {
          uri: `mongodb://${HOST}:${PORT}/${DB_NAME}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
