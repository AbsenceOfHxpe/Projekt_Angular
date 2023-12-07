import { Pipe, PipeTransform } from '@angular/core';
import { Rower } from './rower';

@Pipe({
  name: 'sortBikes',
  standalone:true
})
export class SortBikesPipe implements PipeTransform {

  transform(list: Rower[], ...args: string[]): Rower[] {
    let orderedList = list;
    let order = args[0];
    if (!order) { return list; }
    for(let i = 0; i < orderedList.length; i++) {
      for(let j = 0; j < orderedList.length-1; j++) {
        if (order == 'asc')
        {
          if (orderedList[j].rodzaj.charCodeAt(0) > orderedList[j+1].rodzaj.charCodeAt(0)) {
            let temp = orderedList[j];
            orderedList[j] = orderedList[j+1];
            orderedList[j+1] = temp;
          }
        }
        if (order == 'dsc')
        {
          if (orderedList[j].rodzaj.charCodeAt(0) < orderedList[j+1].rodzaj.charCodeAt(0)) {
            let temp = orderedList[j];
            orderedList[j] = orderedList[j+1];
            orderedList[j+1] = temp;
          }
        }
      }
    }
    return orderedList;
  }

}