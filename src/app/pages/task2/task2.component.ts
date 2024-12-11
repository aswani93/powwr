import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  standalone: true,
  imports: [MaterialModule],
  styleUrls: ['./task2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task2Component {}
