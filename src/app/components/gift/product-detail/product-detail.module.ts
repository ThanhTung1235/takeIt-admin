import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppModule} from '../../../app.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ProductDetailComponent} from './product-detail.component';
const route: Routes = [
  { path: '', component: ProductDetailComponent }
];
@NgModule({
  exports: [
    ProductDetailComponent
  ],
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: [],
  bootstrap: [ProductDetailComponent]

})
export class ProductDetailModule {
}
