import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  standalone: true,
  imports: [MaterialModule],
  styleUrls: ['./task1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task1Component {}
