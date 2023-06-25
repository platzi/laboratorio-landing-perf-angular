import { Pipe, PipeTransform } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';

@Pipe({
  name: 'dateAgo',
})
export class DateAgoPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    return formatDistance(new Date(), value);
  }
}
