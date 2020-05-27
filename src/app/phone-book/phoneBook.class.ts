import { IPhoneBook } from './phoneBook.interface';

export class PhoneBook implements IPhoneBook{
    constructor(
        public firstName: string,
        public secondName: string,
        public phoneNumber: string
    ){}
}