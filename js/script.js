//List of suggestions in an array
var relSug = function (){
	var relationship = ['Father-Son', 
						'Father-Daughter', 
						'Mother-Son',
						'Mother-Daughter',
						'Siblings', 
						'Spouses', 
						'Cousins',
						'Grandparent-Grandchild',
						'Boss-Employee', 
						'Co-workers', 
						'Couple', 
						'On First Date', 
						'Asassins', 
						'Fry Cooks']
	
	//Determine the length of that array
	var x = relationship.length;
	//Generate a random number based on the number of entries in that array
	var y = Math.floor(Math.random() * x);

	var sug = document.getElementById("field")
	sug.innerHTML = relationship[y];
	//Return the random word from the array
	//return relationship[sug];
}
