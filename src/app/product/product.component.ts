import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: product[] = [];
  productFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ProductService
    ){
    this.productFormGroup = formBuilder.group({
      id:[''],
      name:[''],
      price:['']
    });
  }
  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: data => this.products = data
    });
  }

  save(){
    this.products.push(this.productFormGroup.value);
  }
}
