/*  Bubble sort example */

function bubbleSort (nums) {
  do {
    var swapped = false;
    for (let i = 0, l = nums.length; i < l; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    } 
  } while (swapped);
  return nums;
}

// unit tests
// do not modify the below code
// describe('bubble sort', function() {
//   it('should sort correctly', () => {
//     var nums = [10,5,3,8,2,6,4,7,9,1];
//     expect(bubbleSort(nums)).toEqual([1,2,3,4,5,6,7,8,9,10]);
//   });
// });

/* Insertion sort example */
function insertionSort (nums) {
  for (let i = 1, l = nums.length; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
// describe('insertion sort', function() {
//   it('should sort correctly', () => {
//     var nums = [10,5,3,8,2,6,4,7,9,1];
//     expect(insertionSort(nums)).toEqual([1,2,3,4,5,6,7,8,9,10]);
//   });
// });

/* Merge sort example */
function mergeSort(nums) {
  const length = nums.length;
  const half = Math.ceil(nums.length / 2);
  const left = nums.slice(0, half);
  const right = nums.slice(half, length);


  if (length < 2) return nums;

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
}

function stitch(left, right) {
  const results = [];
  
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
}

// unit tests
// do not modify the below code
// describe('merge sort', function() {
//   it('should sort correctly', () => {
//     var nums = [10,5,3,8,2,6,4,7,9,1];
//     expect(mergeSort(nums)).toEqual([1,2,3,4,5,6,7,8,9,10]);
//   });
// });

/* Quick sort example */
function quickSort(nums) {
  const length = nums.length;

  if (length <= 1) return nums;

  const pivot = nums[length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

// unit tests
// do not modify the below code
// describe('quickSort', function() {
//   it('quicksort an array', () => {
//     const nums = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
//     expect(quickSort(nums)).toEqual([1,2,3,4,5,6,7,8,9,10]);
//   });
// });