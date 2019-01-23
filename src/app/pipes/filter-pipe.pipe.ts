import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  public transform(items: any[], term: string) {
    if (!term) return items;
    if (!items || items.length === 0) return items;
    const itemObject = items[0];
    const keys = Object.keys(itemObject) || [];
    const filtredObjects: any[] = [];
    let valid;
    for (const item of items) {
      for (const key of keys) {
        if ((typeof item[key] === 'object' && !(item[key] instanceof Array))) {
          const childKeys = Object.keys(item[key]);
          for (const childKey of childKeys) {
            const ob = item[key];
            if (ob[childKey] && ob[childKey].includes(term)) {
              valid = true;
              break;
            }
          }
        } else {
          if (item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])) {
            valid = true;
            break;
          }
        }
      }
      if (valid) {
        filtredObjects.push(item);
        valid = false;
      }
    }
    return filtredObjects;
  }
}
