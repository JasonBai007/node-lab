var student = require('./student');
var teacher = require('./teacher');

function add(tName, sNames) {
    teacher.add(tName);
    sNames.forEach(function(v,i) {
        student.add(v);
    });
}

exports.add = add;