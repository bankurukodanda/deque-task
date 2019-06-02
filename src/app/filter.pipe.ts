import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( items: any[], value: any, args?: any): any {
    if(value && items){
      let text = value.toLowerCase()
      return items.filter((item)=>{
        return (item.name.toLowerCase().indexOf(text) != -1 || item.alpha3Code.toLowerCase().indexOf(text) !=-1)
      });
    } else{
      return [];
    }
    
    
  }

}
