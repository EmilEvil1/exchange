(function($, window) {
    var STATUSES = ['PAYMENT_EXPECTED', 'PAYMENT_RECEIVED', 'PAYMENT_VALIDATION', 'PAYMENT_PROCESSING', 'PAYMENT_SENT'];
    var regUrl = /progress.html\?applicationId=(.+)/;
    var currentUrl = window.location.href;
    var applicationId = currentUrl.match(regUrl)[1];
    var poll = function() {
        setTimeout(function() {
            $.ajax({
                url: '/api/application',
                method: 'GET',
                data: {
                    applicationId: applicationId
                }
            }).done(function(application) {
                var status = application.status;

                var stageNumber = STATUSES.indexOf(status);

                $(".numeric-proccess").removeClass("transaction-status__active-status");
                $(".transaction-status__numbering-text").removeClass("active-text");

                $(".numeric-proccess").eq(stageNumber).addClass("transaction-status__active-status");
                $(".transaction-status__numbering-text").eq(stageNumber).addClass("active-text");

                poll();
            })
        }, 3000);
    };

    poll();


} ($, window))