export function runEx30(): void {
  class Student { constructor(public name: string){} }
  class Teacher { constructor(public name: string){} }
  class School {
    constructor(public students: Student[] = [], public teachers: Teacher[] = []){}
    showInfo(){ console.log("Học sinh:", this.students.map(s=>s.name)); console.log("Giáo viên:", this.teachers.map(t=>t.name)); }
  }
  const school = new School([new Student("Hồ Việt")],[new Teacher("Lan"), new Teacher("Minh")]);
  school.showInfo();
}
