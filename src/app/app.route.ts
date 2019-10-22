import { Routes } from "@angular/router"
export const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./containers/layout/layout.module').then(m => m.LayoutModule)},
    { path: '**', redirectTo: '/page-not-found' }
]