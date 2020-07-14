# Insertion Sort

Insertion Sort is a sorting algorithm that traverses an array length, and inserts the item in place. The traversal keeps track of the current array position (i), a temporary value (arr[i]), the previous array position(j). While the j value is going up (above 0) and the temporary value is less than the value of the previous array element (arr[j]) make the next array index(arr[j+1]/arr[i]) the value of the previous index (arr[j]) and then iterate j -1 (j-1). We then assign the new array space(arr[j+1]) to the value of the temporary. 

```[8,4,23,42,16,15]```

(InsertionDiagram)[./image.png]

