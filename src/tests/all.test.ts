import {binary_search} from '../binary_search';
import {bubble_sort} from '../bubble_sort';
import {selection_sort} from '../selection_sort';
import {insertionSort} from '../insertion_sort';
const test_binary_search = test('Running binary search test...', () => {
  const arr = [3, 4, 5, 6, 7, 8, 9, 22, 33, 44, 56, 778, 800];
  expect(binary_search(arr, 8)).toBe(8);
  expect(binary_search(arr, 22)).toBe(22);
});
const test_bubble_sort = test('Running bubble sort test', () => {
  const arr = [4, 565, 64, 645, 5, -4, 5, 67, 456, 4, 67, -7, 5];
  expect(bubble_sort(arr)).toBe(arr.sort((a, b) => a - b));
});
const test_selection_sort = test('Selection sort test', () => {
  const arr = [545, 657, 65, 767, 8, 6, 54, 6, 8, 43, 77, 6234];
  expect(selection_sort(arr)).toBe(arr.sort((a, b) => a - b));
});
const test_insertion_sort = test('Selection sort test', () => {
  const arr = [
    5, 645, 65, 656, 345, 54, 546, 567, 787, 822, 8, 828, 28, 8, 9, 6,
  ];
  expect(insertionSort(arr)).toBe(arr.sort((a, b) => a - b));
});
