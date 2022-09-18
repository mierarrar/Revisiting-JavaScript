class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`; 
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
}

const person1 = new Person("John", "Doe", "08-03-1989");
console.log(person1.getFullName());