class Human {
  constructor() {
    this.gender = "female";
  }
  // constructor can be eliminated in ES6

  printGender() {
    console.log(this.gender);
  }
}

// Inherent property
class Person extends Human {
  constructor() {
    // 'super' inherent the property from the parent/prototype class in an extended class
    super();
    this.name = "Yinmu";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
