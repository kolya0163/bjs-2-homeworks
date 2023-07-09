let StudentFirst = new Student("Мария", "женский", 37);
let StudentSecond = new Student("Анна", "женский", 36);
let StudentThird = new Student("Алексей", "мужской", 34);

function Student(name, gender, age) {

    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

}
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}


Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks !== undefined) {
        this.marks.push(...marksToAdd);
    }

}

Student.prototype.getAverage = function() {
    if (typeof this.marks === false || this.marks === undefined) {
        return 0;
    }
    let result = this.marks.reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length - 1) {
            return acc / arr.length
        }
        return acc;
    }, 0);
    return result;

}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

