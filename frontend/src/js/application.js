(function($, window) {
    var regUrl = /application.html\?applicationId=(.+)/;
    var currentUrl = window.location.href;
    if (currentUrl.match(regUrl)) {
        var applicationId = currentUrl.match(regUrl)[1];
        $.ajax({
            url: 'http://localhost:8080/api/application',
            data: {
                applicationId: applicationId
            },
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).done(function(application) {
            $(".payment-method__icon-bank--from").css("background-image", "url(./svg/" + application.from + ".svg)");
            $(".payment-method__icon-bank--to").css("background-image", "url(./svg/" + application.to + ".svg)");

            $(".payment-method__amount--from").text(application.amountFrom);
            $(".payment-method__ticker--from").text(application.from);

            $(".payment-method__amount--to").text(application.amountTo);
            $(".payment-method__ticker--to").text(application.to);

            $(".payment-method--from").text(application.fromName);
            $(".payment-method--to").text(application.toName);
        });
    }
}($, window));