# Studying Algorithms

I am currently taking a course from Packt on Coursera(and plan on taking more than one for more understanding, eg. university grade and industry grade understanding). This post is where I share my knowledge of algorithms and the solutions to practice tasks.

The course uses Java.

## Arrays -  my understanding

An array is basically a collection of elements stored next to each other in memory. The main reason arrays are so fast is that, if we know the index, we can directly calculate where the element is located. So accessing something like `array[5]` takes **O(1)** time.

The downside is that normal arrays have a fixed size. Once we create an array, we can't just make it bigger. If we need more space, we have to create a new, larger array and copy the old elements into it. Dynamic arrays such as `ArrayList` solve this problem by automatically allocating more space when they reach their capacity.

Arrays are good when we need fast access to elements by index. However, inserting or deleting elements in the middle can be expensive because the other elements may have to be shifted. This can take **O(n)** time.

Java also provides useful methods for working with arrays. For example, `Arrays.asList()` can quickly create a list from predefined values, and `Arrays.sort()` can sort elements. We can also give `sort()` a comparator when we don't want to use the normal ordering and instead want a custom ordering.

I also practiced several algorithms using arrays.

For **Maximum Sum Subarray**, instead of calculating the sum of every possible subarray, we can keep a running sum and track the maximum sum we've seen so far. This is **Kadane's algorithm**, and it gives us an **O(n)** solution.

For **Best Time to Buy and Sell Stock**, we keep track of the lowest price we've seen so far and calculate how much profit we could make by selling at the current price. We only need to go through the array once, so this is also **O(n)**.

For **Maximum Product Subarray**, things are more complicated because negative numbers can change everything. A negative number multiplied by another negative number becomes positive. Because of this, we need to track both the **maximum product** and the **minimum product** at each position. The minimum can suddenly become the maximum when multiplied by a negative number.

For **Product of Array Except Self**, we calculate the product of all elements before an index and the product of all elements after it. This lets us calculate the answer for every position without using division.

For **Rotate Array**, I learned the reverse-array technique. We can reverse the entire array, then reverse the appropriate sections to get the rotated result. The important part is that this can be done **in-place**, meaning we don't need another array.

For **Valid Sudoku**, I used `HashSet`s to keep track of which numbers have already appeared in each row, column, and 3×3 grid. The formula:

`(i / 3) * 3 + (j / 3)`

converts a cell's row and column into a number from `0` to `8`, representing which 3×3 grid the cell belongs to.

Overall, the main thing I learned from the array section is that the goal isn't just to make an algorithm work. I need to think about **how many times I'm going through the data, how much extra memory I'm using, and whether I can avoid unnecessary work**. That's where the difference between something like **O(n²)** and **O(n)** becomes important.


``` ~/icydrae ```








