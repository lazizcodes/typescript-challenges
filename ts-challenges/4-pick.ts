// Solution
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// Example
interface Person {
  name: string;
  job: string;
  age: number;
  hobbies: string[];
}

type Programmer = 'job' | 'hobbies';

const programmer: MyPick<Person, Programmer> = {
  job: 'Software developer',
  hobbies: ['eat', 'sleep', 'no code', 'repeat'],
};
