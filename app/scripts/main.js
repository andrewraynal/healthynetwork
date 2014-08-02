$(document).ready(function(){
// hide/show for login/register
    $('.show').click(function() {
        event.preventDefault();
        $('.form-div-login').hide();
        $('.form-div-register').removeClass('hide');

    });

});