function Course(name, dept, credits) {
    this.name = name;
    this.dept = dept;
    this.credits = credits;
    this.roster = []

    this.students = function() {
        // maybe return list of student names?
        return this.roster;
    }

    this.addStudent = function(student) {
        this.roster.push(student);
    }
}

module.exports.Course = Course;
