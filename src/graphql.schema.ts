/* tslint:disable */
export abstract class IMutation {
    abstract createPerson(firstName: string, lastName: string): Person | Promise<Person>;

    abstract deletePerson(id: number): Person | Promise<Person>;
}

export class Person {
    id?: number;
    firstName?: string;
    lastName?: string;
}

export abstract class IQuery {
    abstract persons(): Person[] | Promise<Person[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
