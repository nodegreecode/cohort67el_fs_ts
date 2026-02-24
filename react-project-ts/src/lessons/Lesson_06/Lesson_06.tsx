function Lesson_06() {
  /**************************** 1. String  ****************************/
  let userFullName: string = "John Johnson";
  let hello = `Hello, ${userFullName}`;

  /**************************** 2. Number  ****************************/
  let number1: number = 100;
  let number2 = 39.5;

  /**************************** 3. Boolean  ****************************/
  let isAdmin: boolean = true;

  /**************************** 4. Array  ****************************/
  const animals: string[] = ["dog", "tiger", "lion"];
  const numbers: number[] = [1, 2, 3, 4, 5];

  /**************************** 5. Tuple  ****************************/
  const users: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number,
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];

  /**************************** 6. Function  ****************************/
  const sayHi = (personName: string): void =>
    console.log(`Hello, ${personName}`);

  const add = (a: number, b: number): number => a + b;

  add(10, 5);

  /**************************** 7. Any  ****************************/
  let anyVariable: any = "Hello";
  anyVariable = 300;
  anyVariable = true;

  /**************************** 8. Null & Undefined  ****************************/
  let userName: null | undefined;

  /**************************** 9. Objects  ****************************/
  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
     fullName: string;
     age: number;
     job: string;
     pet?: string;
  }

  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    fullName: "John Johnson",
    age: 30,
    job: "QA",
    pet: "Max",
    isAdmin: false,
    isFamily: false,
  }

  const user2: User = {
    fullName: "BRat Pitt",
    age: 30,
    job: "Frontend",
    isAdmin: true,
    isFamily: true,
  }

  /**************************** 10. Type ****************************/
  type GlobalAnimalProps = {
    isAnimal: boolean;
  }

  type Animal = {
    type: string,
    age: number,
    color: string,
    isWild: boolean
  }

  const animalss: GlobalAnimalProps | Animal = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true
  };

  type UserDataFromServer = null | undefined |  User;

  let userData: UserDataFromServer = undefined;
  userData = null;
  userData =  user1;

  return <div>Lesson_06</div>;
}

export default Lesson_06;
