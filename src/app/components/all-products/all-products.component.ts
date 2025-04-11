import { Component, OnInit } from '@angular/core';
import { rmrProductService } from '../../services/product.service';
import { rmrProduct } from '../../models/product.model';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
  products: rmrProduct[] = [];

  constructor(private productService: rmrProductService) { }
  ngOnInit(): void {
    this.products = this.productService.getrmrProducts();
  }

}
