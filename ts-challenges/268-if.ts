// Solution
type If<C extends boolean, T, F> = C extends true ? T : F;

// Example
type A = If<true, 'a', 'b'>; // 'a'
type B = If<false, 'a', 'b'>; // 'b'
