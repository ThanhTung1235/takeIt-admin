import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const route: Routes = [
    { path: '', component : AddArticleComponent }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        CKEditorModule
    ],
    exports: [AddArticleComponent],
    declarations: [AddArticleComponent],
    providers: []
})
export class AddArticleModule { }