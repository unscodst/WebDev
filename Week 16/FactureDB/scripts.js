$(document).ready(function() {
    $("#button").click(function() {
        var logo = $('#logo').val();
        var company = $('#company').val();
        var country = $('#country').val();
        var description = $('#description').val();
        var materials = $('#materials').val();
        var website = $('#website').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
    
        $('#myTable tr:last').after('<tr><td> <img class="logoimg" src="'+ logo + '"></td><td>' + company + '</td><td>' + country + '</td><td>' + description + '</td><td>' + materials + '</td><td>' + website + '</td><td>' + email + '</td><td>' + phone + '</td></tr>');

    })
});