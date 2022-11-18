// Spreading
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: "Yinmu",
};

const newPerson = {
  ...person,
  age: 26,
};

console.log(newPerson);

// Rest: (...args)
const filter = (...args) => {
  return args.filter((element) => element !== 1);
};

console.log(filter(1, 2, 3));
