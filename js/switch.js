$(document).ready(function () {
    //$(".pages").hide();
    $("#navigationMenu a").click(function (e) {
        e.preventDefault();
        var item = this.href.split("#")[1];
        $(".pages:visible").slideUp(function () {
             $("#" + item).slideDown();
        });
     });
     $("#articulo1").show();
    }); 