import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private serviceProduct: ProductService) {}

  ngOnInit(): void {
    this.serviceProduct.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  startEditing(product: Product): void {
    product.isEditing = true;
  }
  confirmEdit(productId: string | undefined, product: Product): void {
    if (productId) {
      this.serviceProduct.editProduct(productId, product).subscribe(() => {
        product.isEditing = false;
      });
    }
  }
  

  cancelEdit(product: Product): void {
    product.isEditing = false;
  }

  deleteProduct(productId: string | undefined, product: Product): void {
    if (productId) {
      this.serviceProduct.deleteProduct(productId).subscribe(() => {
        // Remove the deleted product from the products array
        this.products = this.products.filter(p => p._id !== productId);
      });
    }
  }
}
