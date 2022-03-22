let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // Type 'unknown' is not assignable to type 'string'

if (typeof userInput === 'string') {
  userName = userInput;
}

// throwing an error always 'crashes' the script/block, so will NEVER return. This is a different type to VOID
// ie. you are telling other devs this function is intended to NEVER return. e.g. while (true) {xyz...} will be type never too
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured', 500);
