function greeter(person: string): string {
  return "Hello, "+ person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Alice", "Bob"];
console.log(greeterArray(user)); //This will not raise an error