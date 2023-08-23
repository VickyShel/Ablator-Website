import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    AccordionButtonDirective,
    AccordionComponent,
    AccordionItemComponent,
    BadgeModule,
    CardModule,
    FormCheckComponent,
    GridModule, ProgressBarComponent, ProgressComponent,
    TableDirective, TemplateIdDirective, WidgetStatAComponent, WidgetStatBComponent
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { MatrixComponent } from './matrix.component';
import { MatrixRoutingModule } from './matrix_routing.module';

import {HttpClientModule} from "@angular/common/http";

import * as FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { NgxSliderModule } from 'ngx-slider-v2';
import { IconModule, IconSetService } from '@coreui/icons-angular';


// import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
    declarations: [MatrixComponent],
    imports: [
        IconModule,
        CommonModule,
        MatrixRoutingModule,
        ChartjsModule,
        CardModule,
        GridModule,
        BadgeModule,
        HttpClientModule,
        FormCheckComponent,
        NgxSliderModule,
        TableDirective,
        AccordionItemComponent,
        AccordionComponent,
        TemplateIdDirective,
        AccordionButtonDirective,
        WidgetStatBComponent,
        ProgressComponent,
        ProgressBarComponent,
        WidgetStatAComponent,
        // DocsComponentsModule
    ]
    ,
    providers:[
        IconSetService
    ]
})
export class MatrixModule {
}
