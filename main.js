// 1. ლექციაზე დაწერილ კლასს Calculator_ს დავუმატოთ მეთოდები: 
//    divide - გაყოფა, 
//    pow - ახარისხება, 
//    substruct - გამოკლება, 
//    abs - მათემატიკური მოდული, 
//    sqrt - კვადრატული ფესვი, 
//    floor - დამრგვალება ქვემოთ უახლოეს მთელ რიცხვამდე.
class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    this.result /= value;
    return this;
  }

  pow(exponent) {
    this.result **= exponent;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  abs() {
    this.result = Math.abs(this.result);
    return this;
  }

  sqrt() {
    this.result = Math.sqrt(this.result);
    return this;
  }

  floor() {
    this.result = Math.floor(this.result);
    return this;
  }

  getResult() {
    return this.result;
  }
}

const calculator = new Calculator(0);
const res = calculator.add(10).multiply(10).divide(10).pow(2).subtract(2).abs(1).sqrt(5).floor(2).getResult();

// console.log(res);

// 2. დავწეროთ კლასი Rectangle, რომელსაც ექნება width და height ფროფერთიები.
//    დავუმატოთ კლასს მეტოდები:
//    area - ფართობის გამოთვლა,
//    perimeter - პერიმეტრის გამოთვლა,
//    isSqure - შეამოწმებს არის თუ არა მოცმული მარტკუთხედი კვადრატი.

//    შევქნმათ რამდენიმე ობიექტი სხვადასვა მნიშვნელობებით და გამოვიძახოთ
//    მასში განსაზღვრული მეთოდები.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  };
  area() {
    return this.width * this.height;
  };
  perimeter() {
    return 2 * (this.width + this.height);
  };
  isSquare() {
    return this.width === this.height;
  };
};

const rectangle1 = new Rectangle(3, 9);
const rectangle2 = new Rectangle(7, 4);
const rectangle3 = new Rectangle(9, 9);

// გავტესტოთ პირველი ობიექტი
console.log("Area:", rectangle1.area());
console.log("Perimeter:", rectangle1.perimeter());
console.log("Is Square:", rectangle1.isSquare());

// გავტესტოთ მეორე ობიექტი
console.log("Area:", rectangle2.area());
console.log("Perimeter:", rectangle2.perimeter());
console.log("Is Square:", rectangle2.isSquare());

// ესეც მესამე
console.log("Area:", rectangle3.area());
console.log("Perimeter:", rectangle3.perimeter());
console.log("Is Square:", rectangle3.isSquare());

// 3. დავწეროთ კლასი University, რომელსაც ექნება სახელი და დდეპრტამენტები.
//    დავუმატოთ მეთოდები:
//    addDepartment - დეპარტამენტის დამატება,
//    removeDepartment - დეპარტამენტის წაშლა.
//    showDepartments - დეპარტამენტების სია დაფორმატებული სტრინგში სურვილისამებრ.

//    გავუკეთოთ კლასს geeter ფოფერთი:
//    departmentCount - დეპარტამენტების რაოდენობს.

//    შევქმნათ რამდენიმე ობიექტი, ჩავატაროთ ზემოთ აღწერილი ოპერაციები.
class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  };
  addDepartment(department) {
    this.departments.push(department);
  };
  removeDepartment(department) {
    const index = this.departments.indexOf(department);
      this.departments.splice(index, 1);
  };
  showDepartments() {
    console.log(`Departments at ${this.name}:`);
    this.departments.forEach((department, index) => {
      console.log(`${index + 1}. ${department}`);
    });
  };
  get departmentCount() {
    return this.departments.length;
  };
};

const nanukasUniversity = new University("University Of Nanuka:)");

nanukasUniversity.addDepartment("Law");
nanukasUniversity.addDepartment("Web Development");
nanukasUniversity.addDepartment("History of Art");
nanukasUniversity.addDepartment("Sociology");

nanukasUniversity.showDepartments();
nanukasUniversity.removeDepartment("Sociology");
nanukasUniversity.showDepartments();


console.log(`Department count: ${nanukasUniversity.departmentCount}`);

// 4. შევქმნათ კლასი Aminal რომელსაც ექნება species და sound ფროფერთიები.
//    დავამატოთ მეთოდი:
//    makeSound - რომელიც ბეჭდავს ცხოველის იმიტირებულ ხმას.
//    გავაკეთოთ შვილობილი კლასი Dog გავუკეთოთ თავისი makeSound მეთოდი რომელიც
//    გადაფარავს მშობლის sound მეთოდს და დაბეჭდავს ძაღლის ხმას (woof).

//    შევქმნათ Dog ლკასით რამდენიმე ობიექტი და გამოვიძახოთ მეთოდები.
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  };
  makeSound() {
    console.log(`${this.species}: ${this.sound}.`);
  }
};
class Dog extends Animal {
  constructor() {
    super("Dog", "woof");
  };
  makeSound() {
    console.log("woof woof!");
  };
};

const cat = new Animal("Cat", "meow");
const elephant = new Animal("Bee", "buzz");
const dog = new Dog();

cat.makeSound();
elephant.makeSound();
dog.makeSound();

