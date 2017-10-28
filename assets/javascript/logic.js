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
    	var startDate = $("#start-date").val().trim();
    	var monthlyRate = $("#rate").val().trim();

    	database.ref().push({
    		name: name,
    		role: role,
    		startDate: startDate,
    		monthlyRate: monthlyRate
    	});

    	



    });

    database.ref().on("child_added", function(snapshot) {
    	console.log(snapshot.val())
    	var role = snapshot.val().role;
    	var name = snapshot.val().name;
    	var startDate = snapshot.val().startDate;
    	var monthlyRate = snapshot.val().monthlyRate;

    	var monthsWorked = moment().diff(moment(startDate), 'months')
    	console.log(monthsWorked);
    	var totalBilled = monthsWorked * monthlyRate;

    	$("#tbody").append("<tr> <td>" + name + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + monthsWorked + "</td><td>" + monthlyRate + "</td><td>" + totalBilled + "</td>" );
    });


});

