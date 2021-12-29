// Solution
type Length<T extends readonly string[]> = T['length'];

// Example
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON'];

type teslaLength = Length<tesla>; // = 4
type spaceXLength = Length<spaceX>; // = 3
