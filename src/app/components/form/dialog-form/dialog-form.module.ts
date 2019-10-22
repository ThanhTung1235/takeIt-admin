import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { FormAddSourceComponent } from '../form-add-source/form-add-source.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DialogFormComponent,
        FormAddSourceComponent
    ],
    declarations: [
        DialogFormComponent,
        FormAddSourceComponent
    ],
    entryComponents: [DialogFormComponent]
})
export class DialogFormModule { }