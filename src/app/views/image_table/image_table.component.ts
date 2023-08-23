import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Options} from "@angular-slider/ngx-slider";
import {IconSetService} from "@coreui/icons-angular";
import {brandSet, cilChevronCircleLeftAlt} from "@coreui/icons";
@Component({
    templateUrl: './image_table.component.html',
    styleUrls: ['./image_table.component.scss']
})
export class Image_tableComponent{
    minValue: number = 0.5;
    maxValue: number = 10.5;
    start:number=1
    end:number=10
    image_file_paths=['../../../assets/images/Faces_1','../../../assets/images/Faces_2','../../../assets/images/Faces_3','../../../assets/images/Faces_4']
    image_files_1=[['../../../assets/images/Faces_1/1.jpg','../../../assets/images/Faces_1/2.jpg','../../../assets/images/Faces_1/3.jpg','../../../assets/images/Faces_1/4.jpg'],
        ['../../../assets/images/Faces_1/5.jpg','../../../assets/images/Faces_1/6.jpg','../../../assets/images/Faces_1/7.jpg','../../../assets/images/Faces_1/8.jpg'],
        ['../../../assets/images/Faces_1/9.jpg','../../../assets/images/Faces_1/10.jpg','../../../assets/images/Faces_1/11.jpg','../../../assets/images/Faces_1/12.jpg'],
        ['../../../assets/images/Faces_1/13.jpg','../../../assets/images/Faces_1/14.jpg','../../../assets/images/Faces_1/15.jpg','../../../assets/images/Faces_1/16.jpg']]
    image_files_2=[['../../../assets/images/Faces_2/1.jpg','../../../assets/images/Faces_2/2.jpg','../../../assets/images/Faces_2/3.jpg','../../../assets/images/Faces_2/4.jpg'],
        ['../../../assets/images/Faces_2/5.jpg','../../../assets/images/Faces_2/6.jpg','../../../assets/images/Faces_2/7.jpg','../../../assets/images/Faces_2/8.jpg'],
        ['../../../assets/images/Faces_2/9.jpg','../../../assets/images/Faces_2/10.jpg','../../../assets/images/Faces_2/11.jpg','../../../assets/images/Faces_2/12.jpg'],
        ['../../../assets/images/Faces_2/13.jpg','../../../assets/images/Faces_2/14.jpg','../../../assets/images/Faces_2/15.jpg','../../../assets/images/Faces_2/16.jpg']]
    image_files_3=[['../../../assets/images/Faces_3/1.jpg','../../../assets/images/Faces_3/2.jpg','../../../assets/images/Faces_3/3.jpg','../../../assets/images/Faces_3/4.jpg'],
        ['../../../assets/images/Faces_3/5.jpg','../../../assets/images/Faces_3/6.jpg','../../../assets/images/Faces_3/7.jpg','../../../assets/images/Faces_3/8.jpg'],
        ['../../../assets/images/Faces_3/9.jpg','../../../assets/images/Faces_3/10.jpg','../../../assets/images/Faces_3/11.jpg','../../../assets/images/Faces_3/12.jpg'],
        ['../../../assets/images/Faces_3/13.jpg','../../../assets/images/Faces_3/14.jpg','../../../assets/images/Faces_3/15.jpg','../../../assets/images/Faces_3/16.jpg']]
    image_files_4=[['../../../assets/images/Faces_4/1.jpg','../../../assets/images/Faces_4/2.jpg','../../../assets/images/Faces_4/3.jpg','../../../assets/images/Faces_4/4.jpg'],
        ['../../../assets/images/Faces_4/5.jpg','../../../assets/images/Faces_4/6.jpg','../../../assets/images/Faces_4/7.jpg','../../../assets/images/Faces_4/8.jpg'],
        ['../../../assets/images/Faces_4/9.jpg','../../../assets/images/Faces_4/10.jpg','../../../assets/images/Faces_4/11.jpg','../../../assets/images/Faces_4/12.jpg'],
        ['../../../assets/images/Faces_4/13.jpg','../../../assets/images/Faces_4/14.jpg','../../../assets/images/Faces_4/15.jpg','../../../assets/images/Faces_4/16.jpg']]

    images=this.image_files_1
    options: Options = {
        floor: 1,
        ceil: 4,
        step: 1,
        showTicks: true
    };
    changeStart(event:any){
        console.log(event)
        if(event==1){
            this.images=this.image_files_1
        }
        else if(event==2){
            this.images=this.image_files_2
        }
        else if(event==3){
            this.images=this.image_files_3
        }
        else{
            this.images=this.image_files_4
        }
    }
    changeEnd(event:any){
        console.log(event)
        if(event==1){
            this.images=this.image_files_1
        }
        else if(event==2){
            this.images=this.image_files_2
        }
        else if(event==3){
            this.images=this.image_files_3
        }
        else{
            this.images=this.image_files_4
        }
    }
    constructor(
        public iconSet: IconSetService,private router: Router
    ) {
        iconSet.icons = { cilChevronCircleLeftAlt, ...brandSet };
    }
    openPage(){
        console.log("hhhhh")
        this.router.navigate(['/history']);
    }
}