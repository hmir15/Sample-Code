 var daysPassed = new Date().getDate();

//Everything Below here has to do with the on-screen Date and Day
var today = new Date().getDay();
    
    var month = new Date().getMonth();
    
    var th; 
    
    if (daysPassed == 1){
        th = "st";
    } else if (daysPassed == 2) {
        th = "nd";
    } else if (daysPassed == 3) {
        th = "rd";
    } else if (daysPassed == 21) {
        th = "st";
    } else if (daysPassed == 22) {
        th = "nd";
    } else if (daysPassed == 23) {
        th = "rd";
    } else if (daysPassed == 31) {
        th = "st";
    } else {
        th = "th";
    }
    
    
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "September", "November", "December"];



    var currentMonth;
    if (month==0){
        currentMonth = "January";
    } else if (month==1){
        currentMonth = "February";
    } else if (month==2){
        currentMonth = "March";
    } else if (month==3){
        currentMonth = "April";
    } else if (month==4){
        currentMonth = "May";
    } else if (month==5){
        currentMonth = "June";
    } else if (month==6){
        currentMonth = "July";
    } else if (month==7){
        currentMonth = "August";
    } else if (month==8){
        currentMonth = "September";
    } else if (month==9){
        currentMonth = "October";
    } else if (month==10){
        currentMonth = "November";
    } else if (month==11){
        currentMonth = "December";
    } else {
        currentMonth = "What?"
    }
    
    $(document).ready(function(){
       
        if (today==0){
            $("#todayDay").text("Sunday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==1){
            $("#todayDay").text("Monday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==2){
            $("#todayDay").text("Tuesday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==3){
            $("#todayDay").text("Wednesday, ");
        } else {
            $("body").css("background-color", "#E6E6E4");
        };
         if (today==4){
            $("#todayDay").text("Thursday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==5){
            $("#todayDay").text("Friday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==6){
            $("#todayDay").text("Saturday, ");
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
        
        
        //todayDate shit underneath here
        
         if (today==0){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
            $("body").css("background-color", "#E6E6E4");
        };
         if (today==1){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==2){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
            $("body").css("background-color", "#E6E6E4");
        };
         if (today==3){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==4){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==5){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
         if (today==6){
            $("#todayDate").text(daysPassed + th + " of " + currentMonth);
        } else {
             $("body").css("background-color", "#E6E6E4");
        };
        
    });