import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/components/share.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const route: Routes = [
  { path: '', component: DashboardComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ShareModule,
    NgbModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
