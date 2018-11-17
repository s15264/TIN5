
class Student
{
Student(first, last) {
this.first = first;
this.last = last;

}
  
get fullName(){
  	return this.first+" "+this.last;
  }
}
  class Student extends Person {
	constructor(first, last, id, grades) {
  	super(firstName, lastName);
  	this.id = id;
  	this.grades = grades;
	}

  
}	
let Person01 = new Person('John', 'Doe');
let Student01 = new Student('Jan', 'Kowalski',1, [4,3,3]);
console.log(Person01);
console.log(Student01);
