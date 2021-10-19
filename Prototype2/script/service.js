function tabSelect(tabId) {
    $(".tab").removeClass("selected");
    $("#" + tabId).addClass("selected");

    $("#next1").css("display", "inline-block");
    $("#next2").css("display", "inline-block");
    $("#step2").css("display", "none");
    $("#step3").css("display", "none");
}

function nextStep(stepId) {
    if (stepId == 2) {
        var appointmentDate = $("#appointment-date").val();
        if (appointmentDate == null || appointmentDate == '') {
            alert("Please select appointment date!");
            return;
        }
    }
    if (stepId == 3) {
        var name = $("#name").val();
        if (name == null || name == '') {
            alert("Please enter your name!");
            return;
        }
        var age = $("#age").val();
        if (age == null || age == '') {
            alert("Please enter your age!");
            return;
        }
        var gender = $('input:radio[name="gender"]:checked').val();
        if (gender == null || gender == '') {
            alert("Please select your gender!");
            return;
        }
        var tel = $("#tel").val();
        if (tel == null || tel == '') {
            alert("Please enter your phone number!");
            return;
        }
    }
    $("#next" + (stepId-1)).css("display", "none");
    $("#step" + stepId).css("display", "flex");
}