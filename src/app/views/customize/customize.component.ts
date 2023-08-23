import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {CodemirrorComponent} from "@ctrl/ngx-codemirror";
import * as CodeMirror from "codemirror";
import {IconSetService} from "@coreui/icons-angular";
import {brandSet, cilCloudDownload} from "@coreui/icons";
import {Router} from "@angular/router";
@Component({
    templateUrl: './customize.component.html',
    styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent{
    // ngAfterViewInit() {
    //     const editor = CodeMirror.fromTextArea(document.getElementById('codemirror') as HTMLTextAreaElement, {
    //         lineNumbers: true,
    //         mode: 'javascript'
    //     });
    // }
    constructor(
        public iconSet: IconSetService
    ) {
        iconSet.icons = { cilCloudDownload, ...brandSet };
    }
    chartLineData = {
        labels:[1,2,3,4,5,6,7,8,9,10],
        datasets: [
            {
                label:"hhh",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [1,2,3,4,5,6,7,8,9,10]
            }
        ]
    }
    // @ViewChild(CodemirrorComponent) cm: CodeMirror.EditorFromTextArea | undefined;
    //
    // ngOnInit() {
    //     // 订阅内容变化事件
    //     this.cm=CodeMirror.fromTextArea(<HTMLTextAreaElement>document.getElementById("codemirror"))
    //     // @ts-ignore
    //     this.cm.codeMirror.on('change', (instance, changeObj) => {
    //         // 在此处理内容变化事件
    //         console.log('Content changed:', changeObj);
    //     });
    // }
    // change(event:any){
    //     console.log(event)
    // }
    customReplacer(key: string, value: any): any {
        if (Array.isArray(value) && (key=="labels" || key=="data")) {
            return `[${value.join(',')}]`;
        }
        return value;
    }
    // // value=JSON.stringify(this.chartLineData)
    // // next=JSON.parse(this.value)
    // content=JSON.stringify(this.chartLineData,this.customReplacer,2)
    compactJsonObject = {
        labels: [JSON.stringify(this.chartLineData.labels)],
        datasets: [
            {
                label: 'hhh',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: [JSON.stringify(this.chartLineData.datasets[0].data)],
            },
        ],
    };
    labelsString = `"labels": [${this.chartLineData.labels.join(',')}]`;
    datasetsString = `"datasets": [\n\t\t{\n\t\t\t"label":${JSON.stringify(this.chartLineData.datasets[0].label)},\n\t\t\t"backgroundColor":${JSON.stringify(this.chartLineData.datasets[0].backgroundColor)},
    \t\t\t"borderColor":${JSON.stringify(this.chartLineData.datasets[0].borderColor)},
    \t\t\t"pointBackgroundColor":${JSON.stringify(this.chartLineData.datasets[0].pointBackgroundColor)},
    \t\t\t"pointBorderColor":${JSON.stringify(this.chartLineData.datasets[0].pointBorderColor)},
    \t\t\t"data": [${this.chartLineData.datasets[0].data.join(',')}]\n\t\t}\n\t]`;

    jsonObject = `{\n\t${this.labelsString}, \n\t${this.datasetsString}\n}`;
    // content=JSON.stringify(JSON.parse(this.jsonObject),null,2)
    content=this.jsonObject
    handleChange(event: Event): void {
        // console.log('ngModelChange', event);
        console.log(this.content)

        this.chartLineData=JSON.parse(this.content)
    }

    saveImg(){
        const canvas = document.querySelector("canvas"); // 获取Canvas元素
        const tempCanvas = document.createElement("canvas");
        // @ts-ignore
        tempCanvas.width = canvas.width;
        // @ts-ignore
        tempCanvas.height = canvas.height;

        const tempContext = tempCanvas.getContext("2d");
        // @ts-ignore
        tempContext.drawImage(canvas, 0, 0); // 将原始Canvas内容绘制到临时Canvas上

        const dataURL = tempCanvas.toDataURL("image/png"); // 转换为DataURL

        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "chart_image.png";
        downloadLink.click();
    }

    // customStringify(obj: any, indent: number = 0): string {
    //     const spaces = ' '.repeat(indent);
    //
    //     if (typeof obj === 'object') {
    //         if (Array.isArray(obj)) {
    //             const arrayValues = obj.map(value => customStringify(value, indent)).join(', ');
    //             return `[${arrayValues}]`;
    //         } else {
    //             const objectEntries = Object.entries(obj).map(([key, value]) => {
    //                 return `${spaces}"${key}": ${customStringify(value, indent + 2)}`;
    //             }).join(',\n');
    //             return `{\n${objectEntries}\n${spaces}}`;
    //         }
    //     } else {
    //         return JSON.stringify(obj);
    //     }
    // }
    // content=this.customStringify(this.chartLineData)
}