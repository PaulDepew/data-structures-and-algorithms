# Quick Sort

Merge Sort uses the a quick division method for sorting an array in between left and right. First it finds a 'pivot point' in the array as the single comparison item. Then it starts a left pointer at the first item in the array and right pointer at the last item in the array. As long as the left pointer value is below the value of the pivot, we increment the left pointer by 1, reverse for the right pointer. When the left pointer value is less than the right pointer value, increment the left pointer. If the value is equal to, swap the values. We then continue to increment the pointers until we run through all the array elements

### Pseudo-Code
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Test
```[8,4,23,42,16,15]```

!(InsertionDiagram)[./image.png]

### Efficiency
Time efficiency is O(n)^n due to the recursive nature of the callback
Space efficiency is O(1) because sorts the same array.