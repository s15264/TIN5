
		
function Student(first, last, id, grades) {
	var sum = 0;

    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades = grades;
	
	
	for( var i = 0; i < grades.length; i++ ){
    sum += parseInt( grades[i], grades.length);
	}
	var avg = sum/grades.length;
	
	return  first + " " + last  + " " + avg;
	
}



			var grades01 = [5, 3, 5, 4, 2, 3];
			
		
			
			console.log(Student("John", "Doe", 1, grades01));

