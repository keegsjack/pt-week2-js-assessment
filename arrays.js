//create an array called family which has your family members in order of their age

var family = ["Tera", "Kim", "Allie", "Kelsi", "Keegan"];



//Remove the oldest member of your family

family.shift();



//Add a new family member as the youngest member

family.push("Millie");


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

 for (var i = 0; i < family.length; i++) {
 	if (family[i] === "Tyler") {
 		alert("I have a Tyler");
 	}
 	else {
 		alert("I have no Tylers");
 	}
 }


// Remove the second oldest member of your family

family.splice(1, 1);



//Write a function called 'reverse' that takes in a string and returns that string in reverse order
var str = "Hello my name is Keegan";
  var reverse = function(x) {
  	return x.split("").reverse().join("");
  }

  console.log(reverse(str));

  