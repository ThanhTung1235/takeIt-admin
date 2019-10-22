import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './containers/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { SharedPipeModule } from './core/pipe/shared-pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    SharedPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      extendedTimeOut: 2000,
      enableHtml: true,
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
