var course = require('./course.js')
var student = require('./student.js')

var c1 = new course.Course("Russian Lit", "Humanities", 4)
var c2 = new course.Course("PLain Lit", "Humanities", 4)
var c3 = new course.Course("American Lit", "Humanities", 4)
var c4 = new course.Course("German Lit", "Humanities", 4)

var s1 = new student.Student("joe", "blow")
s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);
s1.enroll(c4);

console.log(c1.students())
console.log(s1.name())
console.log(s1.courseLoad())
