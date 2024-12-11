import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
@Input() label: string;
@Input() options: string[];
@Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

onButtonClick(option: string): void {
  // emit the selected option to the parent component
  this.buttonClick.emit(option);
}
}
