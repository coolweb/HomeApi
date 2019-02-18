import { Controller, Get, Post, Body } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { CreateCatDto } from './CreatePersonDto';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('persons')
@Controller('persons')
export class PersonController {
    constructor(private readonly personService: PersonService) {
    }

    @ApiOperation({title: 'Get all persons'})
    @Get()
    async getAll(): Promise<Person[]> {
        return this.personService.getAll();
    }

    @ApiOperation({title: 'Create a new person'})
    @Post()
    async create(@Body() createPersonDto: CreateCatDto): Promise<Person> {
        return this.personService.create(createPersonDto.firstName, createPersonDto.lastName);
    }
}
