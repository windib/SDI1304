// MyName:  Windi Bahl
// Date:  May 2, 2013
// Assignment:  Project 4
// Code Library



// String Function

var sdiLibrary = function () {

//Phone Number String

var phoneNumber = function (number) {
	var phoneStyle = /\d{3}-\d{3}-\d{4}/;
	var OK = phoneStyle.test(number);
	if (!OK) {
		console.log("Phone number is not valid.");
	} else {
		console.log("Phone number is valid");
	}
};


//Email String

var emailAddress = function (email) {
	var reg = /[a-zA-Z0-9-._+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/;
	var OK =reg.test(email);
		if (!OK) {
			console.log("Email address is not vaild.");
		} else {
			console.log("Email address is vaild.")
	}
};


//URL String 

var websiteUrl = function (website) {
	var reg = /^(ht|f)tp(s?)\:\/\/[0=9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\,\'\/\\\+&amp;%\$#_]*)?$/;
	var OK = reg.exec (website);
	if (!OK) {
		console.log("URL is not valid.");
	} else {
		console.log("URL is valid");
	}
};


//Upper Case String

var makeUpper = function (toTransform) {
	return toTransform.replace(/\b([a-z])/g, function (_, initial) {
		return initial.toUpperCase();
	});
};

//Replace String

var replaceSeparator = function (str) {
	var str;
	console.log(str);
	console.log(str.replace(/,/g, "/"));
};

// Format Number

var numberFormat = function(number) {
	var myNumber = number.toFixed(2);
	console.log(myNumber)
};

// Date Difference

var dateDiff = function(date1,date2) {
	var 	dmy = date1.split('/'),
		dmy1 = date2.split('/'),
		
		day = dmy[0],
		month = dmy[1],
		year = dmy[2],
		day1 = dmy1[0],
		month1 = dmy1[1],
		year1 = dmy1[2],
		
		dateTemp1 = new Date(year, (parseInt(month)-1),day),
		dateTemp2 = new Date(year1, (parseInt(month1)-1),day1);
	var hours = Math.ceil(((dateTemp2.getTime()-dateTemp1.getTime())/(100*60*60*24)*24));
	var days = Math.ceil(((dateTemp2.getTime()-dateTemp1.getTime())/(1000*60*60*24)));
		console.log("There are " + hours + " hours between "+ date1 + " and " +date2 + ".");
		console.log("There are " + days + " days between " + date1 + " and " + date2 + ".");
	
};

//interger

var stringToInt = function (string) {
	var number = parseInt(string);
		console.log("This function returns the string " + string + " back as the number " , number , ".");
			
};

//main output

	return {
		
		"phoneNumber" 		: phoneNumber,
		"emailAddress" 		: emailAddress,
		"websiteUrl"		: websiteUrl,
		"makeUpper"		: makeUpper,
		"replaceSeparator" 	: replaceSeparator,
		"numberFormat"		: numberFormat,
		"dateDiff"		: dateDiff,
		"stringToInt"		: stringToInt
	};
};

//Library

var lib = sdiLibrary();
lib.phoneNumber("123-456-7890");
lib.phoneNumber("1234567890");

lib.emailAddress("windibahl@fullsail.edu");
lib.emailAddress("windibahlfullsailedu");

lib.websiteUrl("www.apple.com");
lib.websiteUrl("http://www.apple.com");
lib.websiteUrl("https://www.apple.com");

console.log(lib.makeUpper("hi, welcome to the world of java script."));

lib.replaceSeparator("x,y,z");

lib.numberFormat(458.8);

lib.dateDiff("07/31/2012","05/02/2013");

lib.stringToInt("89");