import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  // retorna cuanto tiempo ha pasado entre las dos fechas
  transform(value: Date): string {
    return formatDistance(new Date(), value);
  }

}
