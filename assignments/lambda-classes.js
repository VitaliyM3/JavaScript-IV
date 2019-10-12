class Person {
    constructor(perAttr) {
        this.name = perAttr.name;
        this.age = perAttr.age;
        this.location = perAttr.location;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
};

class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPharse;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    };
    listSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint Challenge on ${subject}`
    };
};

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    };
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy time!`
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    };
};

const personJohn = new Person({
    name: "John",
    age: 20,
    location: "California"
});

const personAlex = new Person({
    name: "Alex",
    age: 25,
    location: "Mississippi"
});

const personMolly = new Person({
    name: "Molly",
    age: 27,
    location: "New York"
});

const instAbby = new Instructor({
    name: "Abby",
    age: 24,
    location: "Maryland",
    specialty: "Java",
    favLanguage: "Java",
    catchPhrase: "Howdy folks!"
});

const instRick = new Instructor({
    name: "Rick",
    age: 52,
    location: "Arkansa",
    specialty: "React",
    favLanguage: "Java Script",
    catchPhrase: "Hey hey hey!"
});

const instMelissa = new Instructor({
    name: "Melissa",
    age: 34,
    location: "West Virginia",
    specialty: "Python",
    favLanguage: "C#",
    catchPhrase: "Well darn!"
});

const studentBob = new Student({
    name: "Bob",
    age: 38,
    location: "Vegas",
    previousBackground: "Gambler",
    className: "CS101",
    favSubjects: ['Math', 'Science', 'History']
});

const studentCristina = new Student({
    name: "Cristina",
    age: 24,
    location: "Florida",
    previousBackground: "Stay at home mom",
    className: "CS105",
    favSubjects: ['Math', 'Science', 'History']
});

const studentWendy = new Student({
    name: "Wendy",
    age: 90,
    location: "Oregan",
    previousBackground: "Striper",
    className: "CS110",
    favSubjects: ['Math', 'Science', 'History']
});

const pmAlbert = new ProjectManager({
    name: "Albert",
    age: 42,
    location: "Iowa",
    specialty: "C++",
    favLanguage: "Java Script",
    catchPhrase: "Whats Going on!"
});

const pmCindy = new ProjectManager({
    name: "Cindy",
    age: 27,
    location: "Washington",
    specialty: "Ruby",
    favLanguage: "C+",
    catchPhrase: "Hey Yall!"
});

console.log(personJohn);
console.log(personAlex.speak());
console.log(instAbby.demo("cats"));
console.log(instMelissa.speak());
console.log(instRick.grade(studentCristina, "Cleaning"));
console.log(studentBob.listSubjects());
console.log(studentWendy.PRAssignment("Scuba Diving"));
console.log(studentCristina.sprintChallenge("Code"));
console.log(pmAlbert.standUp("VCPR Station"));
console.log(pmCindy.debugsCode(studentBob, "How To Eat Fish"));
