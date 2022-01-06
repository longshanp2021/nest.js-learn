import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Students } from '../model/students.entities';
import { Response } from "express";
import { StudentsService } from "../students/students.service";


@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }

    @Get()
    query() {
        return this.studentsService.queryStudents();
    }

    @Post()
    create(@Body() data: { name: string; age: number }) {
        return this.studentsService.createStudents(data);
        // let students = new Students();
    }

}
