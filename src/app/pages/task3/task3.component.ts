import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { DealModel } from '../../shared/interface/task.interface';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  standalone: true,
  imports: [MaterialModule, TableComponent, DropdownComponent],
  styleUrls: ['./task3.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
  
})
export class Task3Component implements OnInit {
  constructor(private apiService: ApiService, private datePipe: DatePipe, private router: Router){
    
  }
  dealData: DealModel[] ;
  headerMap: Record<string, string> = {
    created: 'Created',
    dueDate: 'Due date',
    status: 'Status',
    customer: 'Customer',
    meters: 'Meters',
    quotes: 'Quotes'
  };
  btnLabel = 'New tender';
  btnOptions: string[] = ['Electricity', 'Gas'];
  displayedColumns: string[] = ['created', 'dueDate', 'status', 'customer', 'meters', 'quotes'];
  ngOnInit() {

    this.getDealData();
    
  }

  getDealData(): void {
    // Fetches deal data from JSON file and formats the created and due Date props.
    this.apiService.getData<DealModel[]>('assets/mockData/deals.json').subscribe((data: DealModel[]) => {
      this.dealData = data.map((item) => {
        return {...item, created: this.formatDate(item.created), dueDate:  this.formatDate(item.dueDate)}
      });
      
    });
  }

  handleButtonClick(event: string): void {
    // handles the button click &  navigates to the tasks/task4 route
    this.router.navigate(['tasks/task4'], { state: { tenderType: event } });
  }

  formatDate(date:string) : string{
    // formats a given date string into a format 'dd MMM yyyy'
    return this.datePipe.transform(date, 'dd MMM yyyy')!
  }
}
