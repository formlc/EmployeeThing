$(document).ready(function() {

	var config = {
    apiKey: "AIzaSyCdC2KhBK8q2hBsnmQHl4oZVZuPJ-qg_Tg",
    authDomain: "employeething.firebaseapp.com",
    databaseURL: "https://employeething.firebaseio.com",
    projectId: "employeething",
    storageBucket: "employeething.appspot.com",
    messagingSenderId: "865412549632"
    };

    firebase.initializeApp(config);


    var database = firebase.database();

    var Employees = [];

    $("#submit").on("click", function() {
    	event.preventDefault();

    	var name = $("#name").val().trim();
    	var role = $("#role").val().trim();
    	var startDate = $("#startDate").val().trim();
    	var monthlyRate = $("#monthlyRate").val().trim();

    	database.ref().push({
    		name: name,
    		role: role,
    		startDate: startDate,
    		monthlyRate: monthlyRate
    	});



    });

    database.ref().on("child_added", function(snapshot) {
    	console.log(snapshot.getChildren());
    })


});

