(function($, window) {
    var currencies;
    var URLS = {
        FETCH_CURRENCIES: '/api/currencies',
        CREATE_APPLICATION: '/api/application'
    };
    $.ajax({
        url: URLS.FETCH_CURRENCIES,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(response) {
        handleResponse(response);
    });

    function bindEvents() {
        $(".card_number").blur(function() {
            validateCreditCard.call(this);
        });

        $(".crypto_address").blur(function() {
            validateCryptoAddress.call(this);
        });

        $(".card_number, .crypto_address").focus(function() {
            $(this).removeClass("field-error");
            $(this).parent().find('.error-msg').hide();
        })
    }

    function changeConfirmationBlock() {
        var tickerFrom = $(".calculator__btn--from").data('ticker');
        var tickerTo = $(".calculator__btn--to").data('ticker');
        var rateFrom = currencies.find(cur => cur.ticker === tickerFrom).rub;
        var rateTo = currencies.find(cur => cur.ticker === tickerTo).rub;
        var rate = rateFrom/rateTo;

        $(".confirmation-block__from-name").text(tickerFrom);
        $(".confirmation-block__rate").text(rate.toFixed(6));
        $(".confirmation-block__to-name").text(tickerTo);
    }

    function changeClientInfoBlock() {
        var tickerFrom = $(".calculator__btn--from").data('ticker');
        var tickerTo = $(".calculator__btn--to").data('ticker');
        var currencyFrom = currencies.find(cur => cur.ticker === tickerFrom);
        var currencyTo = currencies.find(cur => cur.ticker === tickerTo);
        var cardNumberTemplate = $("#card_number_template").html();
        var cryptoAddressTemplate = $("#crypto_address_template").html();

        var compiledFrom = _.template(currencyFrom.holdType === 'CARD_NUMBER' ? cardNumberTemplate : cryptoAddressTemplate);
        var compiledTo = _.template(currencyTo.holdType === 'CARD_NUMBER' ? cardNumberTemplate : cryptoAddressTemplate);

        $(".currency-exchange__input").first().html(compiledFrom(currencyFrom));
        $(".currency-exchange__input:nth-child(3)").html(compiledTo(currencyTo));

        bindEvents()
    }

    function handleResponse(response) {
        currencies = response;
        currencies.forEach(function(currency, index) {
            var templateCurrency = $("<div class='currencyItem' data-name='" + currency.name + "' data-ticker='" + currency.ticker + "' data-rub-rate='" + currency.rub + "'>" +
                "<div style='background-image: url(./svg/" + currency.ticker.toLowerCase() + ".svg)' class=\"selector-currency__icon\"></div>" +
                "<div class=\"selector-currency__name\">"+ currency.name + "</div>" +
                "</div>'");

            if (index < 12) {
                $(".calculator__selector .selector__row-1").append(templateCurrency);
            } else {
                $(".calculator__selector .selector__row-2").append(templateCurrency);
            }
        });

        changeConfirmationBlock();

        $(".calculator__btn--to, .calculator__btn--from").click(function(e) {
            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(document).mouseup(function(e) {
            var container = $(".calculator__selector");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });

        $(".currencyItem").click(function(e) {
            var $calcBtn = $(this).closest('.direction').find(".calculator__btn");
            var name = $(this).data('name');
            var ticker = $(this).data('ticker');
            var showName = name.length > 13 ? name.slice(0, 13) + '...' : name;

            $calcBtn.find('.payment-method__payment-name').text(showName);
            $calcBtn.find('.payment-method__icon-bank').css('background-image', 'url(./svg/' + ticker.toLowerCase() + '.svg)');
            $calcBtn.data('ticker', ticker);

            changeConfirmationBlock();

            changeClientInfoBlock();

            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(".calculator__input--from, .calculator__input--to").keyup(function(e) {
            var currentAmount = $(this).val();
            var $inputTo = $('.calculator__input--to');
            var $inputFrom = $('.calculator__input--from');
            if (!currentAmount) {
                $inputTo.val('');
                $inputFrom.val('');
                return;
            }

            var tickerFrom = $('.calculator__btn--from').data('ticker');
            var tickerTo = $('.calculator__btn--to').data('ticker');

            var rateFrom = currencies.find(cur => cur.ticker === tickerFrom).rub;
            var rateTo = currencies.find(cur => cur.ticker === tickerTo).rub;

            if ($(this).hasClass('calculator__input--from')) {
                $inputTo.val((rateFrom/rateTo * currentAmount).toFixed(6))
            } else {
                $inputFrom.val((rateTo/rateFrom * currentAmount).toFixed(6))
            }
        });
    }

    function getApplicationData() {
        var request = {};
        request.from = $('.calculator__btn--from').data('ticker');
        request.to = $('.calculator__btn--to').data('ticker');
        request.amountFrom = parseFloat($('.calculator__input--from').val());
        request.amountTo = parseFloat($('.calculator__input--to').val());
        request.fromDocumentPayment = $('.client-info').first().val();
        request.toDocumentPayment = $('.client-info:nth-child(3)').val();
        request.email = $('#email').val();
        
        return request;
    }

    var numberMask = createNumberMask({
        prefix: '',
        suffix: '',
        allowDecimal: true,
        decimalLimit: 7
    });

    document.querySelectorAll('.calculator__input--from, .calculator__input--to').forEach(function(inputEl) {
        vanillaTextMask.maskInput({
            inputElement: inputEl,
            mask: numberMask
        })
    });

    function validateCreditCard() {
        if (!$(this)[0]) {
            return true;
        }
        var result = $(this).validateCreditCard();

        if (!result.valid) {
            $(this).addClass("field-error");
            $(this).parent().find('.error-msg').show();
            return false;
        }

        return true;
    }

    function validateCryptoAddress() {
        var ticker = $(this).parent().find(".calculator__pre-tittle").data('ticker');
        var address = $(this).val();
        var valid = WAValidator.validate(address, ticker);
        if (!valid) {
            $(this).addClass("field-error");
            $(this).parent().find('.error-msg').show();
            return false;
        }

        return true;
    }

    function validateEmail() {
        var email = $("#email").text();
        var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email && !regEmail.test(email)) {
            $("#email").addClass("field-error");
            return false;
        }

        return true;
    }

    $("#btn-exchange").click(function(e) {
        e.preventDefault();

        // var result = validateCreditCard() && validateCryptoAddress() && validateEmail();
        // if (!result) {
        //     return;
        // }

        var request = getApplicationData();
        $("#preloader").show();
        $.ajax({
            url: URLS.CREATE_APPLICATION,
            method: 'POST',
            data: JSON.stringify(request),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).done(function (applicationId) {
            window.location.href = '/application.html?applicationId=' + applicationId;
        })

    });


} ($, window));