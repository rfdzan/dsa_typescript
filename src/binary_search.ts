export {binary_search};
interface ReturnValue {
  val: number;
  idx: number;
  st: number;
}
/** A function that does binary search.*/
function binary_search(arr: number[], needle: number) {
  let steps = 0;
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  while (lowerBound <= upperBound) {
    steps++;
    const midpoint = Math.floor((lowerBound + upperBound) / 2);
    const value = arr[midpoint];
    if (value === needle) {
      // const retval: ReturnValue = {
      //   val: value,
      //   idx: midpoint,
      //   st: steps,
      // };
      return value;
    }
    if (value > needle) {
      upperBound = midpoint - 1;
    }
    if (value < needle) {
      lowerBound = midpoint + 1;
    }
  }
  return null;
}
