import { Component, Input } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { Step } from '../../interface/task.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string;
  @Input() card: Step;

}
