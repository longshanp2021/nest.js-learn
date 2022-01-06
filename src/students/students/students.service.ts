import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from '../model/students.entities';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Students)
        private studentsRepository: Repository<Students>,
    ) { }

    queryStudents(): any {
        return this.studentsRepository.find();
    }

    createStudents(data): any {
        return this.studentsRepository.create(data);
    }

}
