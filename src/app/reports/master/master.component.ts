import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { REPORTFields } from '../../pages/welcome/forms/master-report.fields';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  url!: string;
  disabled = true;
  loading: boolean = false;
  visible!: boolean;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  dates:any;
  pdfSrc!: string;
  safeUrl: any;
  isLoaded:boolean =false;
  options:any;
  employees:any;
  date!:null;

  constructor(private nzNotification: NzNotificationService,
    private dp: DatePipe,
    private domSanitizer: DomSanitizer,
    private fb: UntypedFormBuilder,
    private service:DefaultService){

  }

  ngOnInit(): void {     
  this.form=this.fb.group({
  range:[],
  month:[],
})
  }

  toggle(visible: boolean) {
    this.visible = visible;
  }


  submit() {
    const dataToSend = this.form.value as { month: any, range?: any }; 
    if (dataToSend.range) {
      const formattedStart = this.dp.transform(dataToSend.range[0], 'yyyy-MM-dd');
      const formattedEnd = this.dp.transform(dataToSend.range[1], 'yyyy-MM-dd');
      dataToSend.range[0] = formattedStart;
      dataToSend.range[1] = formattedEnd;
    }else{
      delete dataToSend.range;
    }
    if(dataToSend.month ){
      const formattedMonth = this.dp.transform(dataToSend.month, 'yyyy-MM');
      dataToSend.month = formattedMonth; 
    }else{
      delete dataToSend.month;
    }
    console.log(dataToSend)
    this.loading= true;
    this.service.motorReport(dataToSend)
      .subscribe(
         (res:any) => {
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(fileURL);
          this.isLoaded = true;
          this.loading=false;

        },
        error=>{
          this.loading= false;
        }
      );

    
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  formattedChange(result: Date[]): void {
    // Format the selected dates as desired
    const formattedStart = this.dp.transform(result[0], 'yyyy-MM-dd'); // Format start date
    const formattedEnd = this.dp.transform(result[1], 'yyyy-MM-dd'); // Format end date
  
    // Create a new object to hold formatted dates
    const formattedRange = {
      startDate: formattedStart,
      endDate: formattedEnd
    };
  

  }
  

}
