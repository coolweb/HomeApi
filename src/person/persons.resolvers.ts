import { PersonService } from './person.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Person')
export class PersonsResolvers {
    constructor(private personsService: PersonService) {
    }

    @Query('persons')
    async getPersons() {
        return await this.personsService.getAll();
    }

    @Mutation('createPerson')
    async createPerson(@Args('firstName') firstName: string, @Args('lastName') lastName: string) {
        return await this.personsService.create(firstName, lastName);
    }

    @Mutation('deletePerson')
    async deletePerson(@Args('id') id: number) {
        return await this.personsService.delete(id);
    }
}
