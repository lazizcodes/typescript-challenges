// Solution
type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key;
};

// Example
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

const obj: TupleToObject<typeof tuple> = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
};
