export {selection_sort};
/** A sorting algorithm that moves the smallest current
 * value towards the left of the array.
 */
function selection_sort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    //set the index of the smallest number in the array
    //to i
    //outer loop will only do one linear run.
    let smallestNumberIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      //during this inner loop, a smaller number was found
      //thus the smallestNumberIdx is updated
      if (arr[j] < arr[smallestNumberIdx]) {
        smallestNumberIdx = j;
      }
    }
    //during the inner loop, a smaller number
    //was found at index j of inner loop,
    //thus smallestNumberIdx is not equal to the value it was
    //when the outer loop started.
    if (smallestNumberIdx !== i) {
      const temp = arr[i];
      {
        arr[i] = arr[smallestNumberIdx];
        arr[smallestNumberIdx] = temp;
      }
    }
  }
  return arr;
}
