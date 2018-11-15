
		function Student(first, last, id, courses) {
    this.first = first;
    this.last = last;
    this.id = id;
    this.courses = courses;
}
var courses01 ={courses: ["GRK", "BYT", "TIN"]}; 



Student.prototype.name = function() {
    return this.first + " " + this.last
};

var Student01 = new Student("John", "Doe", 1, courses01);

			console.log(Student01.name());

