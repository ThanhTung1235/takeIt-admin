import { NgModule } from "@angular/core";
import { LayoutComponent } from './layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedPipeModule } from 'src/app/core/pipe/shared-pipe.module';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'article', loadChildren: () => import('../article/article-list/article-list.module').then(m => m.ArticleListModule) },
            { path: 'article-create', loadChildren: () => import('../article/add-article/add-article.module').then(m => m.AddArticleModule) },
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedPipeModule,
    ],
    declarations: [
        SideBarComponent,
        TopNavComponent,
        LayoutComponent,
        PageHeaderComponent
    ],
    exports: [
        SideBarComponent,
        TopNavComponent,
        LayoutComponent,
        PageHeaderComponent
    ],
    bootstrap: [LayoutComponent]
})
export class LayoutModule { }