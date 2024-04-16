import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-motor-data',
  templateUrl: './motor-data.component.html',
  styleUrl: './motor-data.component.css',
})
export class MotorDataComponent {
  motors!: any;
  id!: any;
  data: any;
  name!: any;
  currentPage = 1;
  pageSize = 3;
  filteredCardsData: any[] = [];
  searchTerm: string = '';
  image!: any;

  constructor(
    private route: ActivatedRoute,
    private notify: NzNotificationService,
    private service: DefaultService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllMotorData().subscribe((res) => {
      this.motors = res;
    });
  }

  search(name: string): void {
    // this.defaultService.getByName(name).subscribe(result => {
    //   this.thresholds = result,
    //   (error:HttpErrorResponse)=>{
    //     if(error.status == 400){
    //       this.notification.error('name not found','')
    //     }
    //   }
    // });
  }

  filterCards() {
    // this.filteredCardsData = this.motors.filter((card :any)=> {
    //   return card.machine.toLowerCase().includes(this.searchTerm.toLowerCase());
    // });
    // this.currentPage = 1;
  }

  updateFilteredCards() {
    // const startIndex = (this.currentPage - 1) * this.pageSize;
    // const endIndex = startIndex + this.pageSize;
    // return this.filteredCardsData.slice(startIndex, endIndex);
  }

  onPageChange(pageIndex: number) {
    this.currentPage = pageIndex;
  }

  getImage() {
    this.service.getImage().subscribe((res) => {
      this.image = res;
    });
  }
}
