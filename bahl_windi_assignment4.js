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

