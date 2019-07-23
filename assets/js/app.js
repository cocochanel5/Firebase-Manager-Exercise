
$(document).ready(function () {



    var firebaseConfig = {
        apiKey: "AIzaSyDox-CRhd03aRqPfw92tFNG_top96u4-Mg",
        authDomain: "fir-manager-exercise.firebaseapp.com",
        databaseURL: "https://fir-manager-exercise.firebaseio.com",
        projectId: "fir-manager-exercise",
        storageBucket: "fir-manager-exercise.appspot.com",
        messagingSenderId: "713777060931",
        appId: "1:713777060931:web:07ffddf8cfb44eb6"
    };


    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var employeeName = "";

    var role = "";

    var startDate = "";

    var monthlyRate = "";








    $("#submit").on("click", function (event) {
        event.preventDefault();

        alert("test")

        employeeName = $("#employeeName").val().trim();

        role = $("#role").val().trim();

        startDate = $("#startDate").val().trim();

        monthlyRate = $("#monthlyRate").val().trim();

        database.ref().push({
            employeeName: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    });


});