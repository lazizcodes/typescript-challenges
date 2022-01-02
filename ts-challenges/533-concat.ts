// Solution
type Concat<T extends any[], U extends any[]> = [...T, ...U];

// Example
type Res = Concat<[1], [2]>; // [1, 2]
