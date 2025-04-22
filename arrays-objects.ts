let hobbies: string[] = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];

let users: Array<string | number>;

users = [1, "max"];

let possibleResults: [number, number];

possibleResults = [1, -1];
possibleResults = [1, -1];

// objects

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "max",
  age: 20,
  hobbies: ["cricket", "cooking"],
  role: {
    description: "adming",
    id: 32984,
  },
};

let val: {} = "";

let data: Record<string, number | string> = {};

data = {
  entry1: 2,
  entry2: "",
};
