// The Problem 4Sum is definitely be in hard category . It takes much time to solve .
// I use approach in it is :-
// Approach :-Sort the array: Sort the given array in non-decreasing order. Sorting makes
//  it easier to handle duplicates and allows for an efficient two-pointer approach.

// Fix the first two elements (a and b): Use two nested loops to iterate through
// all possible pairs of the first two elements (a and b) in the sorted array. Avoid duplicate pairs by
//  skipping identical values.

// Use Two Pointers (c and d): For each pair (a, b), use two pointers (c and d) to find
//  the remaining two elements in the array that sum up to the target value. The left pointer (left)
//  starts at b + 1, and the right pointer (right) starts at the end of the array.

// Check the sum and adjust pointers: Calculate the sum of a, b, c, and d.
// If the sum is less than the target, move the left pointer to the right to increase the sum.
//  If the sum is greater than the target, move the right pointer to the left to decrease the sum.
// If the sum equals the target, add the quadruplet to the result.

// Handle duplicates: To avoid duplicate quadruplets, skip identical values for a, b, c,
//  and d during iteration and adjust the pointers accordingly.
