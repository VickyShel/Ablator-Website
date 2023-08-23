import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Image_tableComponent } from './image_table.component';

const routes: Routes = [
    {
        path: '',
        component: Image_tableComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Image_tableRoutingModule {}

