import { Component, Input, SimpleChanges, ViewChild, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { PaginatorComponent } from '../paginator/paginator.component';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule, PaginatorComponent, TablerIconsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges {
  _tableData: any;
  dataSource = new MatTableDataSource<any>([]);
  totalItems = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];
  @Input() set tableData(value: any) {
    this._tableData = value;
  }
  get tableData(): any {
    return this._tableData;
  }
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;
  @ViewChild(MatSort) sort: MatSort; 

  @Input() displayedColumns: string[];

  @Input() headerMap: Record<string, string>;

  ngOnChanges(changes: SimpleChanges) {
      // Check if the tableData props changed

    if(changes['tableData'].currentValue){
      this.dataSource = new MatTableDataSource(changes['tableData'].currentValue);

      // Update total no. of items
      this.totalItems = changes['tableData'].currentValue.length; 
      this.dataSource.data = changes['tableData'].currentValue.slice(0, this.pageSize);

      // assign sorting val to the data source
      this.dataSource.sort = this.sort;
    }
  }

  onPageChanged(event: { pageIndex: number, pageSize: number }) {
    this.pageSize = event.pageSize;
    this.updateDataSource(event.pageIndex);
  }
  updateDataSource(pageIndex: number) {
    // Update total no of items wrt table data
    this.totalItems = this.tableData.length;
    //calculate start and end index
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // show only items for the current page
    this.dataSource.data = this.tableData.slice(startIndex, endIndex); 
  }
}
