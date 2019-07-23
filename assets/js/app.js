
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

    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
        // Console.loging the last user's data
        console.log(sv.employeeName);
        console.log(sv.role);
        console.log(sv.startDate);
        console.log(sv.monthlyRate);

       var addRow = $("<tr>").append($("<td>").text(sv.employeeName), $("<td>").text(sv.role), $("<td>").text(sv.startDate),$("<td>").text(sv.monthlyRate))  
        
       $("tbody").append(addRow)
        // Change the HTML to reflect
      //  $("#n").append(sv.employeeName);
       // $("#r").append(sv.role);
        //$("#sd").append(sv.startDate);
        //$("#mr").append(sv.monthlyRate);
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });

});