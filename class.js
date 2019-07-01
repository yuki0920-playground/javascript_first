class User {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

let user = new User('Taro', 'Yamada');
user.sayName();