// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Bill',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // behind the scences, this translates to {0, 1, 2}

const person = {
  name: 'Bill',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin'); // this is an exception. It should error but works
// person.role[1] = 10; // Type 'number' is not assignable to type 'string'

// person.role = [0, 'admin', 'user']; // Type '[number, string, string]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2

console.log(person.role);

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('user is read only');
}
