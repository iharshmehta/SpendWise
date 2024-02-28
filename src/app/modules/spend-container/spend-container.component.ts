import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { spendDataModel } from '../../models/spend-data.model';

@Component({
  selector: 'app-spend-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spend-container.component.html',
  styleUrl: './spend-container.component.scss'
})
export class SpendContainerComponent {
  public spendData: spendDataModel[] = [
    {
      description: "Movie at cosmoplex",
      category: "Entertainment",
      amount: 300.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    },
    {
      description: "Bowling at TRP",
      category: "Entertainment",
      amount: 250.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    },
    {
      description: "Petrol for trip",
      category: "Travel",
      amount: 500.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    },
    {
      description: "Milk",
      category: "Grocery",
      amount: 50.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    },
    {
      description: "Chocolate for family",
      category: "Food",
      amount: 150.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    },
    {
      description: "Dinner + cheescake",
      category: "Food",
      amount: 450.00,
      lastModifiedDate: "02/06/2024 12:54 PM"
    }
  ];

  public getInitialOfCategory(category: string) {
    return category.trim().charAt(0).toUpperCase(); //get first character of category
  }

  public getFinalAmountWithDecimal(amount: number) {
    return amount.toFixed(2);
  }

  public getTotalSpendInCurrentMonth(data: spendDataModel[]) {
    let totalAmount = 0;

    data.forEach(item => {
      totalAmount += item.amount;
    });

    return totalAmount.toFixed(2);
  }
}
