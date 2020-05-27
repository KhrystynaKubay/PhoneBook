import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(phoneList: Array<any>, searchValue: string, reverse: boolean): unknown {
    if (searchValue === 'default'){
      return phoneList;
    }
    if (reverse) {
      return phoneList.reverse();
    }
    if (searchValue === 'firstName') {
      return phoneList.sort((a, b) => a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()))
    }else if(searchValue === 'secondName'){
      return phoneList.sort((a, b) => a.secondName.toLowerCase().localeCompare(b.secondName.toLowerCase()))
    }else if(searchValue === 'phoneNumber'){
      return phoneList.sort((a, b) => a.phoneNumber.toLowerCase().localeCompare(b.phoneNumber.toLowerCase()))
    }
  }
}
