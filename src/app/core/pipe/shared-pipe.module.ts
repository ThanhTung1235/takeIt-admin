import { NgModule } from "@angular/core";
import { StatusPipe } from './status-pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPipe
    ],
    exports: [
        StatusPipe
    ]
})
export class SharedPipeModule { }