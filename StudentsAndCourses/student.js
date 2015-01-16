function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courseList = [];

    this.name = function() {
        return this.fname + " " + this.lname;
    }

    this.courses = function() {
        return this.courseList;
    }

    this.enroll = function(course) {
        if (course.students().indexOf(this) == -1) {
            this.courseList.push(course);
            course.addStudent(this);
        }
    }

    this.courseLoad = function() {
        var creditsByDept = new Object
        this.courseList.forEach(function(studentCourse) {

            if (creditsByDept[studentCourse.dept] === undefined) {
                creditsByDept[studentCourse.dept] = studentCourse.credits;
            } else {
                creditsByDept[studentCourse.dept] += studentCourse.credits;
            }
        });
        return creditsByDept;
    }
}


module.exports.Student = Student;
