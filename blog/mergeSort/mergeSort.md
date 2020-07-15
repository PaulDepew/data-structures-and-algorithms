# Merge Sort

Merge Sort uses the a dividing method for sorting an array. It divides the array into smaller problems and then checks those exponentially reducing problems for the sorting. First it divides the array in half until we have 1 element left in each new array. WE then merge those arrays while sorting them into the new array using a recursive callback. 

### Pseudo-Code
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Test
```[8,4,23,42,16,15]```

!(InsertionDiagram)[./image.png]

### Efficienc
Time efficiency is O(n)^n due to the recursive nature of the callback
Space efficiency is O(n) because it creates new array elements before creating a single new array