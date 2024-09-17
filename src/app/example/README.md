# Two Sum Problem Guide

## **Overview**

This project helps you solve a programming challenge called the **Two Sum problem**. The goal is to take a list of numbers (provided by the user) and a target number, and then find two numbers in the list that add up to the target. The solution should return the indices (or positions) of these two numbers. If no solution exists, the app will let you know.

### What You'll Learn:
- **Handling user input** in a form.
- **Working with arrays** and manipulating strings in TypeScript.
- Using **Angular bindings** to keep the view (HTML) in sync with the data.
- Understanding and implementing the **Two Sum algorithm**.
- Creating a **clean user interface** for your program.

---

## **Understanding the HTML (example.component.html)**

This HTML file creates a simple interface that lets the user input numbers, enter a target, and then see the result on the screen.

### **HTML Explanation:**

```html
<div class="two-sum-container">
  <h2>Two Sum Problem</h2>

  <form (submit)="onSubmit(); $event.preventDefault()">
    <div>
      <label for="nums">Enter Numbers (comma separated):</label>
      <input
        id="nums"
        type="text"
        [(ngModel)]="nums"
        name="nums"
        placeholder="e.g. 1, 2, 3, 4"
        required
      />
    </div>

    <div>
      <label for="target">Enter Target:</label>
      <input
        id="target"
        type="number"
        [(ngModel)]="target"
        name="target"
        required
      />
    </div>

    <button type="submit">Find Two Sum</button>
  </form>

  <div class="result">
    <h3>Result:</h3>
    <p *ngIf="isResultArray()">
      The indices of the two numbers that sum to {{ target }} are:
      <strong>{{ result[0] }} and {{ result[1] }}</strong>.
    </p>
    <p *ngIf="!isResultArray()">
      {{ result }}
    </p>
  </div>
</div>
```

### **Key Elements:**

- **Form Input (`<form>`):** 
  This is where the user inputs the data. It includes two fields:
  1. **Enter Numbers:** A text field where the user enters numbers separated by commas (e.g., `1, 2, 3, 4`).
  2. **Enter Target:** A field where the user enters the target number to find the sum (e.g., `6`).
  
  The form calls the `onSubmit()` method (written in TypeScript) when the user submits the form.

- **Two-Way Data Binding (`[(ngModel)]`):**
  The `[(ngModel)]` is an Angular feature that keeps the input values and the data in the TypeScript code synchronized. Here, the `nums` and `target` are updated in real-time based on what the user types.

- **Button (`<button>`):**
  A button that triggers the `onSubmit()` function to calculate the Two Sum when clicked.

- **Result Section (`<div class="result">`):**
  After submission, this section displays the result. If the result is an array (i.e., a solution is found), it shows the indices of the two numbers. If no solution is found, it shows a "No solution found" message.

---

## **Understanding the TypeScript (example.component.ts)**

The TypeScript file contains the logic that powers the app. It handles the user's input, processes the Two Sum problem, and sends the result back to the HTML.

### **TypeScript Explanation:**

```typescript
export class ExampleComponent {
  nums: number[] = []; // Stores the array of numbers from the user input
  target: number = 0;  // Stores the target number input by the user
  result: number[] | string = []; // Stores the result (either indices or a message)

  // Two Sum function
  twoSum(nums: number[], target: number): number[] | string {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement)!, i]; // Return the two indices
      }
      numMap.set(nums[i], i); // Add the number and its index to the map
    }

    return 'No solution found'; // If no solution exists
  }

  // Method to handle form submission and trigger the two sum calculation
  onSubmit() {
    this.nums = this.nums.toString().split(',').map(num => parseFloat(num.trim())); // Parse the input string to an array of numbers
    this.result = this.twoSum(this.nums, this.target); // Calculate the result
  }

  // Method to check if result is an array
  isResultArray(): boolean {
    return Array.isArray(this.result);
  }
}
```

### **Key Elements:**

1. **Variables:**
   - **`nums`**: Stores the numbers the user inputs as an array of numbers.
   - **`target`**: The target number that the two numbers should sum up to.
   - **`result`**: Stores the result after running the `twoSum` function. It can either be an array (the two indices) or a string (like "No solution found").

2. **`twoSum(nums: number[], target: number): number[] | string`:**
   This is the main function that solves the Two Sum problem. Here’s how it works:
   - A **hash map** (`numMap`) is used to store the numbers as you loop through the array.
   - For each number, the **complement** (i.e., `target - current number`) is calculated. 
   - If the complement exists in the hash map, you’ve found the two numbers that sum to the target! The function returns the indices of these two numbers.
   - If no match is found during the loop, the function returns `"No solution found"`.

3. **`onSubmit()` Function:**
   This method is called when the user submits the form.
   - It first **parses the user input** from a string (e.g., `"1, 2, 3, 4"`) into an array of numbers (e.g., `[1, 2, 3, 4]`).
   - Then it calls the `twoSum()` function to process the array and target, and stores the result.
   
4. **`isResultArray()` Function:**
   This checks if the result is an array (i.e., a valid solution has been found), which is important for rendering the correct message in the HTML.

---

## **Walkthrough of How the App Works:**

1. **User Input:**
   - The user enters a list of numbers (comma-separated) and a target sum into the form fields.
   
2. **Form Submission:**
   - When the user clicks the "Find Two Sum" button, the `onSubmit()` method is triggered.
   
3. **Data Processing:**
   - The `onSubmit()` method parses the user input from a string into an array of numbers.
   - The `twoSum()` function is then called, which loops through the array to check if any two numbers sum up to the target.
   - If the two numbers are found, the indices are returned and stored in `result`. If not, the result is set to `"No solution found"`.

4. **Display Result:**
   - The result is then displayed in the `<div class="result">` section of the HTML:
     - If the result is an array, the indices of the two numbers are shown.
     - If no solution is found, the message `"No solution found"` is shown.

---

## **Key Concepts Explained:**

1. **Hash Map (Dictionary):**
   A hash map (in TypeScript, this is called a `Map`) is used here to store numbers and their indices. It allows quick lookups to check if a complement (the number that when added to the current number equals the target) exists in the list. This helps us avoid a slower, nested loop approach, making the function more efficient.

2. **Two-Way Data Binding (`ngModel`):**
   In Angular, `[(ngModel)]` is a powerful feature that binds input fields directly to the component’s data. This means that when the user types something into a field, the corresponding variable (in this case, `nums` or `target`) is updated automatically.

3. **Array Manipulation:**
   The input string from the user is first split into an array of string numbers, then mapped to convert each element into a floating-point number. This allows the app to handle user input in a flexible way.

---

## **Conclusion:**

This project demonstrates a simple and efficient way to solve the **Two Sum problem** using Angular. It introduces you to key concepts like data binding, handling user input, and implementing a hash map for efficient problem solving.

By walking through the code and understanding each part, you'll gain a strong foundation in both TypeScript and Angular while solving a classic problem in algorithmic thinking.
