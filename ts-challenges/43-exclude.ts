// Solution
type MyExclude<T, U> = T extends U ? never : T;

// Example
let Check: MyExclude<string | number | null, null | string>; // number
