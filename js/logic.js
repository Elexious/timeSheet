var config = {
    apiKey: "AIzaSyAy0XmLv9jY35cvrwasSxwxUy-yZbVj9gw",
    authDomain: "activity-c0209.firebaseapp.com",
    databaseURL: "https://activity-c0209.firebaseio.com",
    projectId: "activity-c0209",
    storageBucket: "",
    messagingSenderId: "899479219232"

firebase.initializeApp(config);

var database = firebase.database();

var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";
var monthsWorked  = "";

$("#submit").on("click", function(event) {
    event.preventDefault();
    employeeName = $("#employeename").val().trip();
    role = $("#employeerole").val().trip();
    startDate = $("#startdate").val().trip();
    monthlyRate = $("#rase").val().trip();
    monthsWorked = $("#monthsworked").val().trip();

        database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        monthsWorked: monsthsWorked
        });
};