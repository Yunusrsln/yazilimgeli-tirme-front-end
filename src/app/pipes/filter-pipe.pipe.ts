import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filtetText: string): Product[] {
    filtetText = filtetText?filtetText.toLocaleLowerCase():""
    return filtetText?value
    .filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filtetText)!==-1)
    :value;
  }

}
