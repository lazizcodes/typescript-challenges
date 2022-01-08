// Solution
type WrappedType<T> = T extends Promise<infer R> ? R : never;

// Example
type ResultX = WrappedType<Promise<string | number>>; // string | number
type ResultY = WrappedType<Promise<{ field: 'value' }>>; // { field: 'value }
