import { Component, OnInit } from '@angular/core';
import { rmrCategories, rmrProduct } from '../../models/product.model';
import { rmrProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  rmrCategories: rmrCategories[] = [];

  constructor(private rmrProductService: rmrProductService) { }
  ngOnInit(): void {
    this.rmrCategories = this.rmrProductService.getrmrCategories();
    
  }

}
