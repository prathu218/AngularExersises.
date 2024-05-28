import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  newProductForm: Products = {
    id: 0,
    name: '',
    price: 0,
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getProductsById(id);
    });
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute , private router:Router
  ) {}

  getProductsById(id: number) {
    this.productService.getProductsById(id).subscribe((data) => {
      this.newProductForm = data;
    });
  }

  updateProduct(){
    this.productService.updateProduct(this.newProductForm)
    .subscribe({
      next:()=>{
        this.router.navigate(['/products/home'])
      }
    }
    )
  }
}
