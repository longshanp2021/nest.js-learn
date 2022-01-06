import { Module } from '@nestjs/common';
import { TypeOrmModule  } from "@nestjs/typeorm";
import { Students } from "./model/students.entities";
import { StudentsController } from './controller/students.controller';
import { StudentsService } from './students/students.service';

@Module({
  imports:[TypeOrmModule.forFeature([Students])],
  controllers: [StudentsController],
  providers:[StudentsService]
})
export class StudentsModule {}
