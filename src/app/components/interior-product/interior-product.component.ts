import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rmrProductService } from '../../services/product.service';
import { rmrProduct } from '../../models/product.model';

@Component({
  selector: 'app-interior-product',
  standalone: false,
  templateUrl: './interior-product.component.html',
  styleUrl: './interior-product.component.scss'
})
export class InteriorProductComponent implements OnInit {
  rmrProductId: string = '';  // to store the product id
  rmrProduct: rmrProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private rmrProductService: rmrProductService
  ) { }

  ngOnInit(): void {
    // Retrieve productId from the route parameter
    this.route.paramMap.subscribe(params => {
      this.rmrProductId = params.get('id')!;  // 'id' matches the route parameter

      // Fetch the product details using the productId
      this.rmrProduct = this.rmrProductService.getrmrProductById(Number(this.rmrProductId)); // Assuming you have a method to fetch the product by id
    });
  }

}
