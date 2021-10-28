## Table of Contents  
[Bubble Sort](#bubble-sort)  
[Selection Sort](#selection-sort)  
[Insertion Sort](#insertion-sort)  
[Merge Sort](#merge-sort)  
[Quick Sort](#quick-sort)  

# Bubble Sort

## Algorithm
1. Create an outer for loop, decrementing `i` from `array.length` to 0
2. Create an inner for loop, incrementing `j` from `0` to `i-1`
3. If array[j] > array[j+1], swap them

## Optimizations
1. The outer for loop reduces the number of iterations by 1 each time, since each iteration will always "bubble" the highest element to the end of the unsorted portion of the array
2. Create a boolean to indicate whether or not a swap occurred. If no swaps occur, break from the outer for loop. Don't forget to reset the value each outer for-loop iteration.

## Time Complexity
**Worst**: `O(n^2)`  
**Best**: `O(n)` in a very nearly sorted array

## Space Complexity
`O(1)`

## Code Snippet
```js
const bubbleSort = array => {
    let noSwap;
    for (let i = array.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i-1; j++) {
        // We stop before i-1 since we are checking j+1 as well
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
}
```
<br></br>

# Selection Sort

## Algorithm
1. Create a for loop incrementing `i` from `0` to `array.length`
2. Create a variable to store the index of the lowest element in the array, initialized as `i`
3. Create a nested for loop incrementing `j` from `i+1` to `array.length`
4. If a smaller value is found, update the lowest index to `j`
5. If the lowest index **does NOT equal** `i`, swap lowest element with index `i`

## Optimizations
1. Only swap elements if the lowest index is not `i` to reduce number of swaps

## Time Complexity
**Worst**: `O(n^2)`  
**Best**: `O(n^2)`

## Space Complexity
`O(1)`

## Code Snippet
```js
const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let lowestIdx = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[lowestIdx])
                lowestIdx = j
        }
        if (lowestIdx !== i)
            [array[i], array[lowestIdx]] = [array[lowestIdx], array[i]]
    }
}
```
<br></br>

# Insertion Sort

## Algorithm
1. Create a for loop incrementing `i` from 1 (second element) to `array.length`
   - We are skipping the first element because we can consider it sorted already
2. Store the value of `array[i]` as the current element
2. Create a nested for loop decrementing j from `i-1` to `0` (inclusive)
3. If `array[j]` is greater than current value, move it up one index
   - `array[j+1] = array[j]`
   - if `j === 0` set `array[j]` to current value
4. Else if `array[j]` is less than the current value, assign current value to `array[j+1]` and break out of nested for loop

## Optimizations
1. Skipping the first element reduces number of iterations
2. We don't swap for every iteration of the nested array, instead we shift the array up and only insert the current value when necessary

## Time Complexity
**Worst**: `O(n^2)`  
**Best**: `O(n)` in a very nearly sorted array

## Space Complexity
`O(1)`

## Code Snippet
```js
const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        for (let j = i-1; j >= 0; j--) {
            if (array[j] > currentValue) {
                array[j+1] = array[j]
                if (j === 0)
                    array[j] = currentValue
            }
            else {
                array[j+1] = currentValue
                break;
            }
        }
    }
}
```
<br></br>

# Merge Sort

## Algorithm

### Merging of Two Sorted Arrays (helper function)
1. Create an empty array to store the sorted result
2. Create two variables, `i` and `j`, to represent the current index of each unsorted array (`arr1` and `arr2`)
3. While `i` and `j` are both less than their `array.lengths`, compare `arr1[i]` to `arr2[j]`
4. Push the smaller element onto the result array and increment the index that was pushed
5. The following steps occur if `i` or `j` have exceeded their array length
6. Create a while loop for `i < arr1.length` and push the remaining elements of `arr1` into the result array, incrementing `i` each push
7. Repeat Step 5 for `j`
8. Return the result

### Dividing the Array (recursive function)
1. Create the base case where `array.length <= 1` and return the array
2. Find the midpoint of the array
3. Initialize a `left` variable and set it to the recursive call of the `array.slice(0, midpoint)` (the left half of the array)
4. Initialize a `right` variable and set it to the recursive call of the `array.slice(midpoint)` (the right half of the array)
5. Return `left` and `right` merged using the helper function
    - `return merge(left, right)`

## Optimizations
I dunno

## Time Complexity
**Worst**: `O(n log n)`  
**Best**: `O(n log n)`
> `log n` is from the recursive dividing of the array  
> `n` is from the iterative merging 

## Space Complexity
`O(n)`

## Code Snippet
```js
// helper function
const merge = (arr1, arr2) => {
    const result = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// recursive function
const mergeSort = array => {
    // base case
    if (array.length <= 1)
        return array;

    const midpoint = Math.floor(array.length / 2);
    
    // recursive cases
    const left = mergeSort(array.slice(0, midpoint));
    const right = mergeSort(array.slice(midpoint));

    return merge(left, right);
}
```
<br></br>

# Quick Sort

## Algorithm

### Array pivot helper function
1. Given `array`, `start`, and `end`
   - `start = 0` by default
   - `end = array.length-1` by default
2. Define variable `pivot` to be the value of the `array[start]`
3. Define a variable `swapIdx` that stores the index to swap, initialized as `start`
4. Iterate thru the array from `start+1` to `end` (inclusive)
5. If `array[i]` is less than `pivot`
   1. Increment `swapIdx`
   2. Swap `array[i]` with `array[swap]`
6. After the iteration is complete, swap `array[start]` with `array[swapIdx]`
7. Return `swapIdx`

### Quick sort function
1. Given `array`, `left`, and `right`
   - `left = 0` by default
   - `right = array.length-1` by default 
2. If `left` is less than `right` (recursive case)  
   1. Define variable `pivotIdx` to be the return of the helper pivot function
   2. Recursively call quicksort on left portion of the array respective to `pivotIdx`
   3. Recursively call quicksort on right portion of the array respective to `pivotIdx`
3. Return `array`

## Optimizations
1. Consider using a random index to be the pivot instead of the first element in the array/sub-array to mitigate inefficiency if array is sorted/mostly sorted already

## Time Complexity
**Worst**: `O(n^2)` if data is already sorted
**Best**: `O(n log n)`
> `log n` from decomposition of the array into left and right subarrays (could be `n` if the array is already sorted)  
> `n` is from the iterative pivot method 

## Space Complexity
`O(log n)`

## Code Snippet
```js
// helper function
const pivot = (array, start = 0, end = array.length-1) => {
    const pivot = array[start]
}
```
