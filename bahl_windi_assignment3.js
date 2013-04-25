// MyName:  Windi Bahl
// Date:  Apr 25, 2013
// Assignment:  Project 3

//declare variables
var 	seeds = 	["squash ", "green beans", "butter beans", "cucumbers"];
 	rows = 		30
	gardner =	"Windi"
	totalSeeds =	1080


//json

var garden = {
	"typesOfSeeds": [
		{
			"seed": 	"Squash",
			"rows": 	"8",
			"numberSeeds": 	"200",
			"seedPerRow":	"25",
			"pickRows":	["Windi", " Grandma", " Wanda"]
			
		},
		{
			"seed": 	"Green Bean",
			"rows": 	"6",
			"numberSeeds": 	"180",
			"seedPerRow":	"30",
			"pickRows":	["Wanda", " Richard", " Sybil"]
		},
		{
			"seed": 	"Butter Beans",
			"rows": 	"6",
			"numberSeeds": 	"300",
			"seedPerRow":	"50",
			"pickRows":	["Windi", " Debbie", " Michael"]
		},
		{
			"seed": 	"Cucumbers",
			"rows": 	"10",
			"numberSeeds": 	"400",
			"seedPerRow":	"40",
			"pickRows":	["Grandma", " Sybil", " Richard"]
		},
	]
	
};



// main output
console.log(seeds[0] +", " + seeds[1] + ", " + seeds[2] + ", and " + seeds[3] + " are the vegtables we are going to plant today.")
console.log("Lets see how many rows we are going to plant and who is going to be harvesting each row:")
var objNew = garden;
for (var key in objNew.typesOfSeeds) {
	console.log("We have " + objNew.typesOfSeeds[key].numberSeeds + " "+ objNew.typesOfSeeds[key].seed + " seeds. ")
	console.log("To plant in "+ objNew.typesOfSeeds[key].rows + " rows.")
	console.log("We will plant " + objNew.typesOfSeeds[key].seedsPerRow + " per each row.")
	console.log("The following people will take care of the row until they are all picked:  " + objNew.typesOfSeeds[key].pickRows)
};
console.log("I am so excited about these vegatbles from the garden this year.  Lets plant each row.")


console.log("Is everyone here to help plant seeds")

var people = function(result, comment){
	var y = true, n = true;
		people = y &&((n && y) || n);
		
		
	if (people === true) { result = "It looks like everyone is here.  "; comment =  gardener + " making sure everyone is here. ";}
		else
	if (people === false) { result = gardner + "will set up a time when everyone can be here. "; comment = "I guess that  " + gardener + " go see where everyone is. ";}
	
	chat = comment + result;
	
	return chat;
};

//math
var seedsLeft = function(allSeeds){
	var getSeedsLeft = 1080
		while (getSeedsLeft >= 0){
			console.log("We have " + getSeedsLeft +"seeds left to plant.");
			final = getSeedsLeft
		getSeedsLeft-=36;
}
		return final;
		
};
//return output

//string function
var getSeeds = function(seed1,seed2,seed3,seed4){
	var	seed1 = "squash" 	
	var	seed2 = "Green Beans"
	var 	seed3 = "Butter Beans"
	var	seed4 = "Cucumbers"
		seed = seed1 + ", " + seed2 + ", " + seed3 + ", and " + seed4
	
return seed;
};

var seed = getSeeds()

console.log("We have planted " + totalSeeds + " seeds of " + seed + " in " + rows + " rows we have done very well.")
console.log("Now all we have to do is work at making sure we have a healthy crop.")


