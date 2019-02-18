import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PersonsResolvers } from './persons.resolvers';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    providers: [PersonService, PersonsResolvers],
    controllers: [PersonController],
})
export class PersonModule {
}
