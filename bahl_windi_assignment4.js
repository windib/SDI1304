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


