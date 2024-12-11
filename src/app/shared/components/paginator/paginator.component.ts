import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() totalItems = 0;
  @Input() pageSize = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Output() pageChanged = new EventEmitter<{ pageIndex: number, pageSize: number }>();

  onPageChanged(event: PageEvent) {
    // emit the page change event with the new page index and page size
    this.pageChanged.emit({
      pageIndex: event.pageIndex,
      pageSize: event.pageSize
    });
  }
}