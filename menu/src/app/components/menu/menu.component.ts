import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  categories: string[] = ['appetizer', 'first course', 'main course', 'dessert', 'other'];

  products: Product[] = []
  constructor(/* private product: Product */ private serviceProduct: ProductService){}


  ngOnInit(): void {
      this.serviceProduct.getAllProducts().subscribe((data: Product[]) => {
        this.products = data; // Store the retrieved products in the array
      });

  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }
  
  trackByProduct(index: number, product: any): number {
    return index;
  }
}
