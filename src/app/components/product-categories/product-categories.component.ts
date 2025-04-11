import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rmrProductService } from '../../services/product.service';
import { rmrProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-categories',
  standalone: false,
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss'
})
export class ProductCategoriesComponent implements OnInit {
  categoryName: string = '';
  products: rmrProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: rmrProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryParam = params.get('category');
      if (categoryParam) {
        this.categoryName = categoryParam;
        this.products = this.productService.getrmrProductsByCategory(this.categoryName);
      }
    });
  }
}
