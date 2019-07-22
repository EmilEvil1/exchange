(function($, window) {
    var regUrl = /application.html\?applicationId=(.+)/;
    var currentUrl = window.location.href;
    if (currentUrl.match(regUrl)) {
        var applicationId = currentUrl.match(regUrl)[1];
        $.ajax({
            url: '/api/application',
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

            $("#application-id").text(applicationId);
            $('.urgency-information__money').text(application.amountFrom);
            $('.urgency-information__currency').text(application.from);

            $(".payment-method__amount--from").text(application.amountFrom);
            $(".payment-method__ticker--from").text(application.from);

            $(".payment-method__amount--to").text(application.amountTo);
            $(".payment-method__ticker--to").text(application.to);

            $(".payment-method--from").text(application.fromName);
            $(".payment-method--to").text(application.toName);

            $(".urgency-information__card-number").text(application.documentToPayment);

            initTimer(application.createDate, application.currentTime)
        });
    }

    function initTimer(createTime, currentTime) {
        var minEndTime = 10;
        var msEndTime = minEndTime * 60 * 1000;
        var mCreateTime = moment(createTime);
        var mCurrentTime = moment(currentTime);
        var diff = mCurrentTime.diff(mCreateTime);

        var formatTime = 'mm мин. ss сек.';
        msEndTime -= diff;
        renderLeftTime(msEndTime);
        startTimer();

        function startTimer() {
            setTimeout(function () {

                msEndTime -= 1000;
                renderLeftTime(msEndTime);
                startTimer();
            }, 1000)
        }

        function renderLeftTime(leftTime) {
            const time = moment.utc(leftTime).format(formatTime);
            $(".left-time").text(time);
        }

    }
}($, window));