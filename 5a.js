
var txt = "";
var person = { name: "Joe",
 surname: "Doe",
 age: 24,

  born : function() {
        return 2018-this.age;
    },
 allData: function() {
         return this.name + " " + this.surname + " " + this.age; 
    }
	
 };
 
 
 function check(x) {
 for (x in person) {
	console.log(person[x])
	console.log(typeof person[x]);

} 
}
		check (person);
		
		
		
		
