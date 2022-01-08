// Solution
type First<T extends Array<any>> = T extends [infer F, ...infer R] ? F : never;

// Examples
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // 'a'
type head2 = First<arr2>; // 3
