"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binary_search_1 = require("../binary_search");
const bubble_sort_1 = require("../bubble_sort");
const test_binary_search = test('Running binary search test...', () => {
    const arr = [3, 4, 5, 6, 7, 8, 9, 22, 33, 44, 56, 778, 800];
    expect((0, binary_search_1.binary_search)(arr, 8)).toBe(8);
    expect((0, binary_search_1.binary_search)(arr, 22)).toBe(22);
});
const test_bubble_sort = test('Running bubble sort test', () => {
    const arr = [4, 565, 64, 645, 5, -4, 5, 67, 456, 4, 67, -7, 5];
    expect((0, bubble_sort_1.bubble_sort)(arr)).toBe(arr.sort((a, b) => a - b));
});
//# sourceMappingURL=all.test.js.map