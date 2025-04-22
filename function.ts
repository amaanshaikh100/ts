function add(a: number, b: number): number {
  return a + b;
}

add(2, 10);

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function performJob(cb: (m: string) => void) {
  cb("job done!");
}

performJob(log);
