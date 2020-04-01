$(document).ready(function () {
    $(".wrapper").hide();
    $(".openPopup").click(function (e) {
        e.preventDefault();
        $(".wrapper").show();
        $("iframe").attr("src", $(this).attr('href'));
        $(".popup").fadeIn('fast');
    });
  
    $(".close").click(function () {
        $(this).parent().fadeOut("fast");
        $(".wrapper").hide();
    });
});