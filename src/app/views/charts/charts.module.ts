import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';

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

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';

import { FilePondModule, registerPlugin } from "ngx-filepond";
import {HttpClientModule} from "@angular/common/http";

import * as FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { NgxSliderModule } from 'ngx-slider-v2';

registerPlugin(FilePondPluginFileValidateType);

// import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [ChartsComponent],
    imports: [
        CommonModule,
        ChartsRoutingModule,
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
        IconModule,
        // DocsComponentsModule
    ],
    providers:[
        IconSetService
    ]
})
export class ChartsModule {
}
