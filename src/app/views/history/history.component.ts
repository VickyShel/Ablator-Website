import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent{
    // ngAfterViewInit() {
    //     const editor = CodeMirror.fromTextArea(document.getElementById('codemirror') as HTMLTextAreaElement, {
    //         lineNumbers: true,
    //         mode: 'javascript'
    //     });
    // }
    option:any={
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 1,
                tension: 0.4
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
    // constructor(private httpClient: HttpClient,private cdr: ChangeDetectorRef) { }
    // constructor(private http: HttpClient) { }
    selectedFile: File | undefined;
    chartData = {
        labels:["Epoch 1","Epoch 2","Epoch 3","Epoch 4","Epoch 5","Epoch 6","Epoch7","Epoch 8","Epoch 9","Epoch 10"],
        datasets: [
            {
                label: 'Trial 1',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: [40, 20, 12, 39, 10, 80, 40,28,20,7]
            },
            {
                label: 'Trial 2',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [50, 12, 28, 29, 7, 25, 60,68,73,90]
            }
        ]
    }

    chartOption = {
        // plugins: {
        //   legend: {
        //     display: false
        //   }
        // },
        maintainAspectRatio: false,
        elements: {
            line: {
                tension: 0.4
            }
        },
        scales: {
            x: {
                id: 'x-axis', // x 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Epoch Value'
                }
            },
            y: {
                id: 'y-axis', // y 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Train_Loss_Value'
                }
            }
        }
    };
    chartData2 = {
        labels:["Epoch 1","Epoch 2","Epoch 3","Epoch 4","Epoch 5","Epoch 6","Epoch7","Epoch 8","Epoch 9","Epoch 10"],
        datasets: [
            {
                label:"Trial 1",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                // data: [2.3024617214955247,2.302211105950606,2.3020047371321395,2.3018392057561163,2.301699808919862,2.301584046786782,2.3014938511065584,2.301411604322096,2.301348966067788,2.30129184931326]
                data: [2.3024617214955247,2.302211105950606,2.3020047371321395,2.3018392057561163,2.301699808919862,2.301584046786782,2.3014938511065584,2.301411604322096,2.301348966067788,2.30129184931326]
            },
            {
                label:"Trial 2",
                backgroundColor: "rgba(111,174,220,0.2)",
                borderColor: "rgba(111,174,220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [2.302462348297461,2.302213733130172,2.3020102593944527,2.3018459691675996,2.3017115908136754,2.3016037740178708,2.301513562832814,2.301436334530682,2.3013798684707836,2.3013282925335328]
            },
            {
                label:"Trial 3",
                backgroundColor: "rgba(208,69,69,0.2)",
                borderColor: "rgb(208,69,69)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#ffffff",
                data: [2.3024468879455697,2.3022020709540034,2.3020002338677834,2.301834135421558,2.301692572229707,2.301573279824084,2.301475192183879,2.301396895064982,2.301327725717508,2.3012657221446413]
            },
            {
                label:"Trial 4",
                backgroundColor: "rgba(247,247,126,0.2)",
                borderColor: "rgba(247,247,126, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [2.3024523855526566,2.3021982021169114,2.301987691728799,2.3018162908838757,2.3016759518112964,2.301565907403096,2.3014665720051033,2.301383880918214,2.3013098888051537,2.3012536034655215]
            },
            {
                label:"Trial 5",
                backgroundColor: "rgb(150,208,115,0.2)",
                borderColor: "rgba(150,208,115, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [2.302462618742416,2.3022122670338354,2.30200914609661,2.301844954744839,2.301708785201441,2.301599903655713,2.3015031964539974,2.301427047389911,2.3013620978987803,2.3013070201568766]
            }
        ]
    }


    chartOption2 = {
        // plugins: {
        //   legend: {
        //     display: false
        //   }
        // },
        maintainAspectRatio: false,
        // elements: {
        //   line: {
        //     tension: 0.4
        //   }
        // },
        scales: {
            x: {
                id: 'x-axis', // x 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Epoch Value'
                }
            },
            y: {
                id: 'y-axis', // y 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Train_Accuracy_Score_Value'
                }
            }
        }
    };

    chartLineData = {
        labels:[1,2,3,4,5,6,7,8,9,10],
        datasets: [
            {
                label:"Trial 1",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [1,2,3,4,5,6,7,8,9,10]
            }
        ]
    }

    chartOption3 = {
        // plugins: {
        //   legend: {
        //     display: false
        //   }
        // },
        maintainAspectRatio: false,
        // elements: {
        //   line: {
        //     tension: 0.4
        //   }
        // },
        scales: {
            x: {
                id: 'x-axis', // x 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Epoch Value'
                }
            },
            y: {
                id: 'y-axis', // y 轴的 id
                display: true,
                title: {
                    display: true,
                    text: 'Best_Iteration_Value'
                }
            }
        }
    };
    image_files_1=[['../../../assets/images/Faces_1/1.jpg','../../../assets/images/Faces_1/2.jpg','../../../assets/images/Faces_1/3.jpg','../../../assets/images/Faces_1/4.jpg'],
        ['../../../assets/images/Faces_1/5.jpg','../../../assets/images/Faces_1/6.jpg','../../../assets/images/Faces_1/7.jpg','../../../assets/images/Faces_1/8.jpg'],
        ['../../../assets/images/Faces_1/9.jpg','../../../assets/images/Faces_1/10.jpg','../../../assets/images/Faces_1/11.jpg','../../../assets/images/Faces_1/12.jpg'],
        ['../../../assets/images/Faces_1/13.jpg','../../../assets/images/Faces_1/14.jpg','../../../assets/images/Faces_1/15.jpg','../../../assets/images/Faces_1/16.jpg']]

    matrix_data_trial_2_3=[[35,2,3,5,33,2,4,2,34]]
    matrix_data_trial=this.matrix_data_trial_2_3
    constructor(private router: Router) {}
    openChartsPage(){
        this.router.navigate(['/charts']);
    }

    openImage_tablePage(){
        this.router.navigate(['/image_table']);
    }

    openMatrixPage(){
        this.router.navigate(['/matrix']);
    }
}