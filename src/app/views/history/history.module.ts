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

import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';

import { FilePondModule, registerPlugin } from "ngx-filepond";
import {HttpClientModule} from "@angular/common/http";

import * as FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { NgxSliderModule } from 'ngx-slider-v2';

registerPlugin(FilePondPluginFileValidateType);

// import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
    declarations: [HistoryComponent],
    imports: [
        CommonModule,
        HistoryRoutingModule,
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
})
export class HistoryModule {
}
