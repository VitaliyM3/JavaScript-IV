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

class ProjectManagers extends Instructor {
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
