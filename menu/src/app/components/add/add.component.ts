import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  namevalidation: string = "";
  newProduct: Product = {
    name: '',
    category: 'appetizer',
    price: 0,
    image: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    if(this.newProduct.name.length < 2){
      this.namevalidation = "Name has to have at least 2 characters"
    }else{
      this.productService.addProduct(this.newProduct).subscribe(() => {
        this.router.navigate(["/menu"])
        
      });
    }
    }
}
