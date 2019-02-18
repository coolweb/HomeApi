import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) { }

    async getAll(): Promise<Person[]> {
        return this.personRepository.find();
    }

    async create(firstName: string, lastName: string): Promise<Person> {
        const person = this.personRepository.create();
        person.firstName = firstName;
        person.lastName = lastName;

        const personCreated = await this.personRepository.save<Person>(person);

        return personCreated;
    }

    async delete(id: number): Promise<Person> {
        const person = await this.personRepository.findOne(id);
        await this.personRepository.delete(id);

        return person;
    }
}
