import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name : '',
    price:0
  }
  
  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createProduct(){
    if(this.validationForm()){
      this.productService.create(this.product).subscribe( () =>{
        this.productService.showMessage('Salvo com sucesso !!');
        this.router.navigate(['/products']);
      })
    }
  }

  validationForm(){
    if(!this.product.name || !this.product.price){
      this.productService.showMessage('Preencha todos os campos!!');
      return false
    }
    return true
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
