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
    let sortVariable = "model";
    if (args[1].length !== 0) {
      sortVariable = args[1];
    }
    if (!order) { return list; }
    for(let i = 0; i < orderedList.length; i++) {
      for(let j = 0; j < orderedList.length-1; j++) {
        if (order == 'asc')
        {
          if (sortVariable === "rodzaj")
          {
            if (orderedList[j].rodzaj.charCodeAt(0) > orderedList[j+1].rodzaj.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          } else if (sortVariable === "model") {
            if (orderedList[j].model.charCodeAt(0) > orderedList[j+1].model.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          } else if (sortVariable === "rozmiarRamy") {
            if (orderedList[j].rozmiarRamy.charCodeAt(0) > orderedList[j+1].rozmiarRamy.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          } else if (sortVariable === "cena") {
            if (orderedList[j].cena > orderedList[j+1].cena) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          }
          
        }
        if (order == 'dsc')
        {
          if (sortVariable === "rodzaj")
          {
            if (orderedList[j].rodzaj.charCodeAt(0) < orderedList[j+1].rodzaj.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          }
          else if (sortVariable === "model") {
            if (orderedList[j].model.charCodeAt(0) < orderedList[j+1].model.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          } else if (sortVariable === "rozmiarRamy") {
            if (orderedList[j].rozmiarRamy.charCodeAt(0) < orderedList[j+1].rozmiarRamy.charCodeAt(0)) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          } else if (sortVariable === "cena") {
            if (orderedList[j].cena < orderedList[j+1].cena) {
              let temp = orderedList[j];
              orderedList[j] = orderedList[j+1];
              orderedList[j+1] = temp;
            }
          }
        }
      }
    }
    return orderedList;
  }

}