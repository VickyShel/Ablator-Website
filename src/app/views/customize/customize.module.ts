import {NgModule} from "@angular/core";
// import {CommonModule} from "@angular/common";
import {BadgeModule, ButtonDirective, CardModule, GridModule} from "@coreui/angular";
import {FilePondModule} from "ngx-filepond";
import {CustomizeComponent} from "./customize.component";
import {CustomizeRoutingModule} from "./customize-routing.module";
// import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ChartjsComponent} from "@coreui/angular-chartjs";
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
    declarations: [CustomizeComponent],
    imports: [
        IconModule,
        // CommonModule,
        CustomizeRoutingModule,
        CardModule,
        GridModule,
        BadgeModule,
        FilePondModule,
        // BrowserModule,
        FormsModule,
        CodemirrorModule,
        ChartjsComponent,
        ButtonDirective,
    ],
    providers:[
        IconSetService
    ]
})
export class CustomizeModule {
}