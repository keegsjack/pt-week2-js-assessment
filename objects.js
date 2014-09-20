//Create a function called User which has the following properties
//username, email, password, birthday

 var user = {
 	username: "keegsjack",
 	email: "keegsjack@gmail.com",
 	password: "ilovejava",
 	birthday: "Feb. 24, 1990"
 };



//edit the username to be 'js_slinger'
  
user.username = "js_slinger";


//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

user.favoriteBook = "Mike Tyson learns to Whistle";


//Remove the password property from your object
  
delete user.password;


//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

 var values = [];
 for (var i = user.length - 1; i >= 0; i--) {
 	values[i].push;
 };