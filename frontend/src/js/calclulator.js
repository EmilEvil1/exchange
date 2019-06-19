(function($, window) {
    $.ajax({
        url: 'http://localhost:8080/currencies'
    }).done(function(res) {
        console.log(res);
    })
} ($, window));