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



