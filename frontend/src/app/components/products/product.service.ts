import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }


  showMessage(msg: string){
    this.snackBar.open(msg, 'x' , {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'

    });
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }
}
