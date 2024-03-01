"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubble_sort = void 0;
function bubble_sort(arr) {
    //first run of bubble sort will carry the
    //biggest number to correct index, which is
    //the end of the array. thus unsortedUntil
    //arr.length - 1 -> exclude the last index.
    let unsortedUntil = arr.length - 1;
    let swapHappened = false;
    let count = 0;
    while (!swapHappened) {
        count++;
        //if the loop didn't enter the if statement, it means
        //no swap was done, and the array is sorted.
        swapHappened = true;
        for (let idx = 0; idx < unsortedUntil; idx++) {
            if (arr[idx] > arr[idx + 1]) {
                //swaps idx and idx + 1
                const temp_value = arr[idx];
                arr[idx] = arr[idx + 1];
                arr[idx + 1] = temp_value;
                //a swap was done
                swapHappened = false;
            }
        }
        unsortedUntil--;
    }
    console.log(count);
    return arr;
}
exports.bubble_sort = bubble_sort;
//# sourceMappingURL=bubble_sort.js.map