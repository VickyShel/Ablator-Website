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

import { Image_tableComponent } from './image_table.component';
import { Image_tableRoutingModule } from './image_table_routing.module';

import { FilePondModule, registerPlugin } from "ngx-filepond";
import {HttpClientModule} from "@angular/common/http";

import * as FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { NgxSliderModule } from 'ngx-slider-v2';
import { IconModule, IconSetService } from '@coreui/icons-angular';

registerPlugin(FilePondPluginFileValidateType);

// import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
    declarations: [Image_tableComponent],
    imports: [
        IconModule,
        CommonModule,
        Image_tableRoutingModule,
        ChartjsModule,
        CardModule,
        GridModule,
        BadgeModule,
        FilePondModule,
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
export class Image_tableModule {
}
