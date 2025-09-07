"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx30 = runEx30;
function runEx30() {
    class Student {
        constructor(name) {
            this.name = name;
        }
    }
    class Teacher {
        constructor(name) {
            this.name = name;
        }
    }
    class School {
        constructor(students = [], teachers = []) {
            this.students = students;
            this.teachers = teachers;
        }
        showInfo() { console.log("Học sinh:", this.students.map(s => s.name)); console.log("Giáo viên:", this.teachers.map(t => t.name)); }
    }
    const school = new School([new Student("Hồ Việt")], [new Teacher("Lan"), new Teacher("Minh")]);
    school.showInfo();
}
