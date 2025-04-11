import { Component, OnInit } from '@angular/core';
import { rmrProduct } from '../../models/product.model';
import { rmrProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  [x: string]: any;
  products: rmrProduct[] = [];

  constructor(private productService: rmrProductService) { }
  ngOnInit(): void {
    this.products = this.productService.getrmrProducts();
  }

}
