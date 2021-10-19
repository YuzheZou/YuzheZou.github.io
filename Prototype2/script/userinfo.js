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

$(".form-row").click(function(e) {
    if (confirm("Are you sure this is misrecording?")) {
        alert("Thanks you reporting, we will manually check and delete this record.");
    }
});

$("#back").click(function(e) {
    window.location.href = "user.html";
});