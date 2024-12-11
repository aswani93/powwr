import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CardsData } from '../../shared/interface/task.interface';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  standalone: true,
  imports: [MaterialModule, CardComponent],
  styleUrls: ['./task4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task4Component implements OnInit{
  cardsData: CardsData = {
      "title": "New tender: electricity",
      "steps": [
        {
          "title": "Customer information",
          "description": "Enter the basic information about the client.",
          "status": "Pending",
          "showArrow": true,
        },
        {
          "title": "Meter lookup & usage data",
          "description": "Lookup for meter information and upload usage data.",
          "status": "Pending",
          "showArrow": true,
        },
        {
          "title": "Suppliers and products",
          "description": "Select suppliers, products, and terms.",
          "status": "Pending",
          "showArrow": true,
        },
        {
          "title": "Documents",
          "description": "Attach documents to the tender, like contract and terms of service.",
          "status": "Pending",
          "showArrow": true,
        },
        {
          "title": "Review and submit",
          "description": "Review all the information, add a custom message and submit the tender.",
          "status": "Pending",
          "showArrow": true,
        }
      ]
  };
  ngOnInit(){
    this.setCardsTitle()
  }

  setCardsTitle () {
    // Check if the tenderType is available in the router history
    if(history.state.tenderType) {
      // if tenderType exists, update the `cardsData.title` with formatted string
      this.cardsData.title = `New tender: ${(history.state.tenderType).toLowerCase()}`
    }  
  }
}
