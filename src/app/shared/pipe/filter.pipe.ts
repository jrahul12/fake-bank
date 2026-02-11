import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ITransaction[], searchVal: string): ITransaction[] {

    if (!value || value.length === 0) {
      return [];
    }

    if (!searchVal) {
      return value;
    }

    searchVal = searchVal.toLowerCase();

    return value.filter((item: ITransaction) =>
      item.description.toLowerCase().includes(searchVal) ||
      item.category.toLowerCase().includes(searchVal) ||
      item.transactionDate.includes(searchVal) ||
      item.id.toString().includes(searchVal)
    );
  }
}
