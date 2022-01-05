import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type:'postgres',
    //   host:'1.116.37.473',
    //   port:9700,
    //   username: 'postgres',
    //   password: 'AAaa123456789',
    //   database: '[my-server]pg',
    //   entities: [],
    //   synchronize: true,
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
