import { Routes } from "@angular/router"
import { LoginComponent } from './containers/login/login.component'
export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', loadChildren: () => import('./containers/layout/layout.module').then(m => m.LayoutModule)},
    { path: '**', redirectTo: '/page-not-found' }
]