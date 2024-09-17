import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  nums: number[] = [];
  target: number = 0;
  result: number[] | string = [];

  // Two Sum function
  twoSum(nums: number[], target: number): number[] | string {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement)!, i];
      }
      numMap.set(nums[i], i);
    }

    return 'No solution found';
  }

  // Method to handle form submission and trigger the two sum calculation
  onSubmit() {
    this.nums = this.nums.toString().split(',').map(num => parseFloat(num.trim()));
    this.result = this.twoSum(this.nums, this.target);
  }

  // Method to check if result is an array
  isResultArray(): boolean {
    return Array.isArray(this.result);
  }
}
