export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  error('hoge');
} catch(error) {
  console.log(error);
}