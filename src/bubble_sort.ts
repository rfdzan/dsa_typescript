export {bubble_sort};
/** A sorting algorithm that 'bubbles' the biggest
 * number in an array to the right side.
 */
function bubble_sort(arr: number[]) {
  //first run of bubble sort will carry the
  //biggest number to correct index, which is
  //the end of the array. thus unsortedUntil
  //arr.length - 1 -> exclude the last index.
  let unsortedUntil = arr.length - 1;
  let swapHappened = true;
  while (swapHappened) {
    //if the loop didn't enter the if statement, it means
    //no swap was done, and the array is sorted.
    swapHappened = false;
    for (let idx = 0; idx < unsortedUntil; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        //swaps idx and idx + 1
        const temp_value = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp_value;
        //a swap was done
        swapHappened = true;
      }
    }
    //the search area gets smaller as more numbers are sorted from the back
    unsortedUntil--;
  }
  return arr;
}
