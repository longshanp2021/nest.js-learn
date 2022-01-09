import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Students } from "./students/model/students.entities";
import { StudentsModule } from './students/students.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      // 外部
      type: 'postgres',
      host: '1.116.37.43',
      port: 9700,
      username: 'postgres',
      password: 'AAaa123456789',
      database: 'longshanpg-learn',
      // entities: [Students],手动导入实体
      autoLoadEntities: true,//自动导入实体
      synchronize: true,
      // 本地
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: '123456',
      // database: 'postgres',
      // autoLoadEntities:true,
      // synchronize: true,
    }),

    StudentsModule,
    BooksModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
