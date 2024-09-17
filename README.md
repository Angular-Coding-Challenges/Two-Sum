# Two Sum Problem

## **Problem Description**

Given an array of integers `nums` and an integer `target`, your task is to return the **indices** of the two numbers in the array such that they add up to the target value.

- You may assume that each input will have **exactly one solution**.
- You **may not** use the same element twice.
- The solution can be returned in any order.

## **Examples**

### **Example 1:**

```plaintext
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### **Example 2:**

```plaintext
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
```

### **Example 3:**

```plaintext
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

## **Constraints:**

- The number of elements in the array is between **2 and 10^4**.
- Each element in the array `nums[i]` is an integer where:
  - \( -10^9 \leq nums[i] \leq 10^9 \)
- The `target` is an integer where:
  - \( -10^9 \leq target \leq 10^9 \)
- **Only one valid answer exists.**

## **Follow-Up Question:**

Can you come up with an algorithm that runs in **less than O(n²)** time complexity?

---

