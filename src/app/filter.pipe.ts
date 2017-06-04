import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from './contact.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Contact[], id?: any): any {
    console.log("contact = ", value, id);
    debugger;

    if (id === undefined) {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      if (item.tags.indexOf(id) !== -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
