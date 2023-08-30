import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'categorySort',
})
export class CategorySortPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    const categoriesOrder = [
      'appetizer',
      'first course',
      'main course',
      'dessert',
      'other',
    ];

    return products.sort((a, b) => {
      const categoryIndexA = categoriesOrder.indexOf(a.category);
      const categoryIndexB = categoriesOrder.indexOf(b.category);
      return categoryIndexA - categoryIndexB;
    });
  }
}
