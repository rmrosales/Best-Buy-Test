import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { InteriorProductComponent } from './components/interior-product/interior-product.component';

const rmrRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'category/:category', component: ProductCategoriesComponent },
  { path: 'interior-product/:id', component: InteriorProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rmrRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
