import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Options} from "@angular-slider/ngx-slider";
import {IconSetService} from "@coreui/icons-angular";
import {brandSet, cilChevronCircleLeftAlt} from "@coreui/icons";
@Component({
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent{
    trial:Number=1
    matrix_data_trial_1_1=[[20,10,10,5,25,10,3,7,30]]
    matrix_data_trial_1_2=[[22,7,11,5,30,5,1,7,32]]
    matrix_data_trial_1_3=[[32,3,5,2,35,3,3,3,34]]
    matrix_data_trial_2_1=[[18,12,10,6,25,9,8,12,20]]
    matrix_data_trial_2_2=[[25,6,9,6,30,4,8,2,30]]
    matrix_data_trial_2_3=[[35,2,3,5,33,2,4,2,34]]
    matrix_data_trial=this.matrix_data_trial_1_1
    matrix_data_trial_2=this.matrix_data_trial_2_1
    accuracy_value_1_1=0.625
    accuracy_value_1_2=0.7
    accuracy_value_1_3=0.84167
    accuracy_value_2_1=0.525
    accuracy_value_2_2=0.70833
    accuracy_value_2_3=0.85
    relevant_value_1_1=[[0.71428571,0.5952381,0.6,0.5,0.625,0.75,0.58823529,0.6097561,0.66666667]]
    relevant_value_1_2=[[0.78571429 ,0.68181818, 0.66666667,0.55 ,0.75, 0.8,0.64705882 ,0.71428571 ,0.72727273]]
    relevant_value_1_3=[[0.86486486, 0.85365854 ,0.80952381,0.8  , 0.875, 0.85 ,0.83116883, 0.86419753, 0.82926829]]
    relevant_value_2_1=[[0.5625    , 0.51020408 ,0.51282051,0.45 , 0.625 ,0.5 ,0.5  ,      0.56179775 ,0.50632911]]
    relevant_value_2_2=[[0.64102564 ,0.78947368, 0.69767442,0.625, 0.75 , 0.75,0.63291139, 0.76923077 ,0.72289157]]
    relevant_value_2_3=[[0.79545455, 0.89189189, 0.87179487,0.875 ,0.825 ,0.85,0.83333333, 0.85714286, 0.86075949 ]]
    relevant_value=this.relevant_value_1_1
    relevant_value_2=this.relevant_value_2_1
    constructor(
        public iconSet: IconSetService,private router: Router
    ) {
        iconSet.icons = { cilChevronCircleLeftAlt, ...brandSet };
    }
    openPage(){
        console.log("hhhhh")
        this.router.navigate(['/history']);
    }

    options: Options = {
        floor: 1,
        ceil: 3,
        step: 1,
        showTicks: true
    };

    changeStart_1(event:any){
        console.log(event)
        if(event==1){
            this.matrix_data_trial=this.matrix_data_trial_1_1
            this.relevant_value=this.relevant_value_1_1
        }
        else if(event==2){
            this.matrix_data_trial=this.matrix_data_trial_1_2
            this.relevant_value=this.relevant_value_1_2
        }
        else{
            this.matrix_data_trial=this.matrix_data_trial_1_3
            this.relevant_value=this.relevant_value_1_3
        }
    }

    changeStart_2(event:any){
        console.log(event)
        if(event==1){
            this.matrix_data_trial_2=this.matrix_data_trial_2_1
            this.relevant_value_2=this.relevant_value_2_1
        }
        else if(event==2){
            this.matrix_data_trial_2=this.matrix_data_trial_2_2
            this.relevant_value_2=this.relevant_value_2_2
        }
        else{
            this.matrix_data_trial_2=this.matrix_data_trial_2_3
            this.relevant_value_2=this.relevant_value_2_3
        }
    }
}