$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault();
        $("#list").empty();

        var input = parseInt($('#userinput').val());

        for (var i = 1; i <= input; i++) {
            if (i % 3 === 0) {
                if (i % 5 === 0) {
                    $('#list').append('<li>pingpong</li>');
                } else {
                    $('#list').append('<li>ping</li>');
                }
            } else if (i % 5 === 0) {
                $('#list').append('<li>pong</li>');
            } else {
                $('#list').append("<li>" + i + "</li>");
            }
        }
 $("#results").show();
    });
});
