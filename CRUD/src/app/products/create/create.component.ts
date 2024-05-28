import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProductForm: Products = {
    id:0,
    name:'',
    price: 0
  }

  constructor(private productService: ProductService, 
              private router: Router){}

  ngOnInit(): void {
    
  }
  createProduct():void{
    this.productService.createProduct(this.newProductForm)
    .subscribe({
      next: () =>{
        this.router.navigate(['/products/home']);
      },
      error: (e) =>{
        console.error(e);
      }
    });
  }
}
