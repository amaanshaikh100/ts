type Role = "admin" | "editor" | "guest" | "reader";

type Employee = {
  name: string;
  age: number;
  role: Role;
};

let u: Employee = {
  name: "amaan",
  age: 24,
  role: "admin",
};
