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
  isEditing: boolean = false;

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
    this.loadProducts
  }

  loadProducts(){
    this.service.getProducts().subscribe({
      next: data => this.products = data
    });
  }

  save() {
    if(this.isEditing){
       this.service.update(this.productFormGroup.value).subscribe({
        next: () => {
        this.loadProducts();
        this.isEditing = false;
        this.productFormGroup.reset();
        }
       })
    }
    else{

    }
    this.service.save(this.productFormGroup.value).subscribe(
      {
        next: data => this.products.push(data)
      });
    }
    delete(product: product) {
    this.service.delete(product).subscribe({
      next: () => this.loadProducts()
    });
  }
  update(product: product) {
    this.isEditing = true;
    this.productFormGroup.setValue(product);
  }
}