import {binary_search} from './binary_search';
import {bubble_sort} from './bubble_sort';

function main() {
  run_binary_search();
  run_bubble_sort();
}
main();
function run_binary_search() {
  const needle = 10000;
  const arr = [1, 2, 3, 4, 5, 6, 9, 100, 102, 103];
  const res = binary_search(arr, needle);
  if (res === null) {
    console.log(`value ${needle} does not exist in this array`);
  } else {
    console.log(res);
  }
}
function run_bubble_sort() {
  const array = [1000, 5, 665, 34, 65, 1, 7, 88, 6, 66, 787, 9, 8, 7];
  const array_copy = array;
  console.log(bubble_sort(array));
  console.log(array_copy.sort((a, b) => a - b));
}
