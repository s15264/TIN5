

function Student(first, last, id, grades) {
    this.first = first;
    this.last = last;
    this.id = id;
    this.grades = grades;
}


Student.prototype = {
		get avg() {
		var arr = this.grades;
			var sum = 0;
			for( var i = 0; i < arr.length; i++ ){
				sum += parseInt( arr[i], 10 );
			}

			var avg = sum/arr.length;

			return avg;
				
			},

    get fullName() {
        return this.first + " " + this.last;
    },

    set fullName(name) {
        var names = name.split(" ");
        this.first = names[0];
        this.last = names[1];
    }

};

			var grades01 = [5, 3, 5, 4, 2, 3];
			
		
			
			
			var	Student01 = new Student("John", "Doe", 1, grades01);
			
			
			
			console.log(Student01.avg);
			console.log(Student01.fullName);


