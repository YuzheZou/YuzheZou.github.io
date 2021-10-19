$(document).ready(function() {
    var username = localStorage.getItem("username");
    if (username == 2) {
        $(".avatar").css('background-image', 'url("./images/avatar2.jpg")');
        $("#tree").css('background-image', 'url("./images/tree2.png")');
        $("#emoji").css('background-image', 'url("./images/emoji2.png")');
        $("#status").html("Careful");
        $("#status").css('color', 'rgb(245, 203, 67)');
    }
    else if (username == 3) {
        $(".avatar").css('background-image', 'url("./images/avatar3.jpg")');
        $("#tree").css('background-image', 'url("./images/tree3.png")');
        $("#emoji").css('background-image', 'url("./images/emoji3.png")');
        $("#status").html("Diagnosed");
        $("#status").css('color', '#f58e6f');
        $("#desc").html("");
    }
});

$("#help").click(function() {
    $("#help-model").css('display', 'flex');
});
$("#help-model").click(function() {
    $("#help-model").css('display', 'none');
});

$("#user-info").click(function() {
    window.location.href = "userinfo.html";
});

$("#logout").click(function() {
    if (confirm("Log out?")) {
        window.location.href = "login.html";
    }
});