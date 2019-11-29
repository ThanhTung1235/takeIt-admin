import {NgModule} from '@angular/core';
import {GiftListComponent} from './gift-list.component';
import {CommonModule} from '@angular/common';
import {AppModule} from '../../../app.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
const route: Routes = [
  { path: '', component: GiftListComponent }
];
@NgModule({
  exports: [
    GiftListComponent
  ],
  declarations: [GiftListComponent],
  imports: [
    CommonModule,
    AppModule,
    RouterModule.forChild(route)
  ],
  providers: [],
  bootstrap: [GiftListComponent]

})
export class GiftListModule {
}
