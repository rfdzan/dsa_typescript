export {insertionSort};
function insertionSort(arr: number[]) {
  for (let idx = 1; idx < arr.length; idx++) {
    //the value being temporarily 'taken' from
    //the array.
    const tempValue = arr[idx];
    //'position' refers to the element of the array
    //that is being compared to tempValue, also
    //describes where in the array we are currently.
    let position = idx - 1;
    while (position >= 0) {
      //moves item at position to position + 1
      //if item at idx - 1 is bigger than tempValue.
      if (arr[position] > tempValue) {
        arr[position + 1] = arr[position];
        //keeps searching to the left until we find a 'position' where
        //arr['position'] < tempValue
        position = position - 1;
      } else {
        //breaks if there are no more values to the left
        //smaller than tempValue (meaning 'position' is smaller than 0),
        //which means we will insert the tempValue at the final
        //'position' which happens outside this while loop.
        break;
      }
      arr[position + 1] = tempValue;
    }
  }
  return arr;
}
