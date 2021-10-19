$("#btn-login").click(function() {
    var username = $("#username").val();
    if (username == null || username == '') {
        alert("Plese enter username!");
        return;
    }
    if (!$("#terms").get(0).checked) {
        alert("Plese agree the use of terms!");
        return;
    }
    window.localStorage.setItem('username', username);
    window.location.href = "user.html"
});
$("#term-link").click(function() {
    $("#term-model").css('display', 'flex');
});
$("#term-model").click(function() {
    $("#term-model").css('display', 'none');
});