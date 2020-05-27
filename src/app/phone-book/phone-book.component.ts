import { Component, OnInit } from '@angular/core';
import { IPhoneBook } from './phoneBook.interface';
import { PhoneBook } from './phoneBook.class'



@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  newName: string;
  newSecondName: string;
  newNumber: string;
  phoneList: Array<IPhoneBook> = [
    {
      firstName: 'Stiven',
      secondName: 'King',
      phoneNumber: '09862540969'
    },
    {
      firstName: 'Quentin',
      secondName: 'Tarantino',
      phoneNumber: '09662420963'
    },
    {
      firstName: 'Guy',
      secondName: 'Ritchie',
      phoneNumber: '09720420966'
    },
    {
      firstName: 'Kate',
      secondName: 'Zena',
      phoneNumber: '07362420313'
    },
    {
      firstName: 'Ann',
      secondName: 'Dnistrova',
      phoneNumber: '05062420314'
    },
  ];
  searchValue: string;
  addNew: boolean;
  addStatus: boolean;
  saveStatus: boolean;
  indexOfInfo: number;
  orderToCompare: string = 'default';
  reverseTable:boolean;
  constructor() {}

  ngOnInit(): void {
  }

  setOrder(itemToCompare: string) {
   if (this.orderToCompare === itemToCompare) {
      this.reverseTable = !this.reverseTable;
    }else{
      this.orderToCompare = itemToCompare;
      this.reverseTable = false;
    }
  }
  openFormForNewInfo() {
    this.resetForm();
    this.addNew = true;
    this.addStatus = true;
    this.saveStatus = false;
  }
  closeModal() {
    this.addNew = false;
    this.resetForm();
  }
  addNewPerson() {
    if (this.newName, this.newSecondName, this.newNumber) {
      const newUser: IPhoneBook = new PhoneBook(this.newName, this.newSecondName, this.newNumber);
      this.phoneList.push(newUser);
      console.log(this.phoneList);
      
      this.addNew = false;
      this.resetForm();
    }
  }
  editUser(index: number) {
    let editThisUser = this.phoneList[index];
    this.addNew = true;
    this.addStatus = false;
    this.saveStatus = true;
    this.newName = editThisUser.firstName;
    this.newSecondName = editThisUser.secondName;
    this.newNumber = editThisUser.phoneNumber;
    this.indexOfInfo = index;
  }
  deleteUser(index: number) {
    this.phoneList.splice(index, 1);
  }
  saveNewPerson() {
    const editedInfoToSave: IPhoneBook = new PhoneBook(this.newName, this.newSecondName, this.newNumber);
    this.phoneList.splice(this.indexOfInfo, 1, editedInfoToSave);
    this.addNew = false;
    this.resetForm();
  }
  private resetForm() {
    this.newName = '';
    this.newSecondName = '';
    this.newNumber = '';
  }
}
