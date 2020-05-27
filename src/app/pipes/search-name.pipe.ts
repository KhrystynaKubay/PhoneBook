import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  transform(phoneList: Array<any>, searchValue: string){
    if (!searchValue) {
      return phoneList;
    }
    if (!phoneList) {
      return [];
    }
    return phoneList.filter((userInfo) => {
      return userInfo.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 
      || userInfo.secondName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 
      || userInfo.phoneNumber.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  }

}
