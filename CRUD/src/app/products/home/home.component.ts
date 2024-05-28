import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
    })
  }

  deleteProduct(id:number){
    alert("Are you sure..?");
    this.productService.deleteProduct(id).subscribe(
      ()=>{
        this.products=this.products.filter(product=>product.id!=id);
      }
    )
  }
}
