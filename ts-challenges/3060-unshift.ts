// Solution
type Unshift<T extends Array<any>, U> = [U, ...T];

// Example
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
