import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spend-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spend-container.component.html',
  styleUrl: './spend-container.component.scss'
})
export class SpendContainerComponent {
  public spendData: any = [
    {
      amount: 50,
      description: "Milk",
      category: "grocery"
    },
    {
      amount: 150,
      description: "Chocolate",
      category: "food"
    },
    {
      amount: 500,
      description: "Petrol",
      category: "travel"
    },
    {
      amount: 50,
      description: "Milk",
      category: "grocery"
    },
    {
      amount: 150,
      description: "Chocolate",
      category: "food"
    },
    {
      amount: 500,
      description: "Petrol",
      category: "travel"
    }
  ];

  public getInitialOfCategory(category: string):string {
    return category.trim().charAt(0).toUpperCase(); //get first character of category
  }
}
