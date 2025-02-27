// const names: Array<string> = [];
// // names[0].toLowerCase();

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

// promise.then((data) => {
//   data.toLowerCase();
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 }));

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);

interface Lengty {
  length: number;
}

function countAndDescribe<T extends Lengty>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  }
  if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe(''));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max', age: 30 }, 'name');
extractAndConvert({ name: 'Max', age: 30 }, 'age');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());

const nuberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObject = { name: 'Max' };
// objStorage.addItem(maxObject);
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem(maxObject);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
