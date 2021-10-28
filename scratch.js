let array = [3,6,1,67,34,23];
const bubbleSort = arr => {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i-1; j++) {
        // We stop before i-1 since we are checking j+1 as well
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
}

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

const pivot = (array, start = 0, end = array.length-1) => {
    const pivot = array[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivot) {
            swapIdx++;
            [array[swapIdx], array[i]] = [array[i], array[swapIdx]];
        }
    }
    [array[start], array[swapIdx]] = [array[swapIdx], array[start]];
    return swapIdx;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        const pivotIdx = pivot(array, left, right);
        quickSort(array, left, pivotIdx - 1);
        quickSort(array, pivotIdx + 1, right);
    }

    return array;
}

console.log(array);
// bubbleSort(array);
// selectionSort(array);
// insertionSort(array);
// array = mergeSort(array);
array = quickSort(array);
console.log(array);
