import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftComponent } from './gift/gift.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [GiftComponent],
    exports: [GiftComponent]
})
export class ShareModule { }
