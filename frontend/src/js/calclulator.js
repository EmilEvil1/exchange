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
            validateCreditCard($(this));
        });

        $(".crypto_address").blur(function() {
            validateCryptoAddress($(this));
        });

        $(".card_number, .crypto_address").focus(function() {
            resetError($(this));
        });

        $(".calculator__input--to,.calculator__input--from").focus(function() {
            resetError($(".calculator__input--to"));
            resetError($(".calculator__input--from"));
        });

        applyCreditCardMask(document.querySelectorAll('.card_number'))
    }

    function changeConfirmationBlock() {
        var tickerFrom = $(".calculator__btn--from").data('ticker');
        var tickerTo = $(".calculator__btn--to").data('ticker');
        var rateFrom = currencies.find(cur => cur.ticker === tickerFrom).rub;
        var rateTo = currencies.find(cur => cur.ticker === tickerTo).rub;
        var rate = rateFrom/rateTo;
        var min = 1000/rateFrom;

        $(".confirmation-block__from-name").text(tickerFrom);
        $(".confirmation-block__rate").text(rate.toFixed(6));
        $(".confirmation-block__to-name").text(tickerTo);
        $(".sum-min").text(min.toFixed(2));
        $(".min-currency").text(tickerFrom);
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

        $(".currency-exchange__input:nth-child(1)").html(compiledFrom(currencyFrom));
        $(".currency-exchange__input:nth-child(3)").html(compiledTo(currencyTo));

        bindEvents()
    }

    function changeInputSum($field) {
        var val = $field.val().replace(/,/g, '');
        var currentAmount = parseFloat(val);
        var $inputTo = $('.calculator__input--to');
        var $inputFrom = $('.calculator__input--from');
        if (isNaN(currentAmount)) {
            $inputTo.val('');
            $inputFrom.val('');
            return;
        }

        var tickerFrom = $('.calculator__btn--from').data('ticker');
        var tickerTo = $('.calculator__btn--to').data('ticker');

        var rateFrom = currencies.find(cur => cur.ticker === tickerFrom).rub;
        var rateTo = currencies.find(cur => cur.ticker === tickerTo).rub;

        if ($field.hasClass('calculator__input--from')) {
            $inputTo.val((rateFrom/rateTo * currentAmount).toFixed(6))
        } else {
            $inputFrom.val((rateTo/rateFrom * currentAmount).toFixed(6))
        }
    }

    function handleResponse(response) {
        currencies = response;
        currencies.forEach(function(currency, index) {
            var templateCurrency = $("<div class='currencyItem' data-name='" + currency.name + "' data-ticker='" + currency.ticker + "' data-rub-rate='" + currency.rub + "'>" +
                "<div style='background-image: url(./svg/" + currency.ticker.toLowerCase() + ".svg)' class=\"selector-currency__icon\"></div>" +
                "<div class=\"selector-currency__name\">"+ currency.name + "</div>" +
                "</div>'");

            if (index < currencies.length / 2) {
                $(".calculator__selector .selector__row-1").append(templateCurrency);
            } else {
                $(".calculator__selector .selector__row-2").append(templateCurrency);
            }
        });

        changeConfirmationBlock();

        changeClientInfoBlock();

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

            if ($(this).closest('.direction').find('.calculator__btn').hasClass('calculator__input--from')) {
                changeInputSum($(".calculator__input--to"));
            } else {
                changeInputSum($(".calculator__input--from"));
            }

            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(".calculator__input--from, .calculator__input--to").keyup(function(e) {
            changeInputSum($(this));
        });
    }

    function getApplicationData() {
        var request = {};
        request.from = $('.calculator__btn--from').data('ticker');
        request.to = $('.calculator__btn--to').data('ticker');
        request.amountFrom = parseFloat($('.calculator__input--from').val().replace(/,/, ''));
        request.amountTo = parseFloat($('.calculator__input--to').val().replace(/,/, ''));
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

    function applyCreditCardMask(fields) {
        fields.forEach(function(field) {
            vanillaTextMask.maskInput({
                inputElement: field,
                guide: false,
                mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
            })
        })
    }

    function validateCreditCard($field) {
        var result = $field.validateCreditCard();

        if (!result.valid) {
            updateFieldWithError($field);
            return false;
        }

        return true;
    }

    function validateCryptoAddress($field) {
        var ticker = $field.parent().find(".calculator__pre-tittle").data('ticker');
        var address = $field.val();
        var valid = true;
        try {
            valid = WAValidator.validate(address, ticker);
        } catch (e) {
        }
        if (!valid) {
            updateFieldWithError($field);
            return false;
        }

        return true;
    }

    function validateEmail() {
        var email = $("#email").val();
        var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email && !regEmail.test(email)) {
            $("#email").addClass("field-error");
            return false;
        }
        return true;
    }

    function validateCalculatorInputs() {
        var $inputFrom = $(".calculator__input--from"),
            $inputTo = $(".calculator__input--to");
        if ($inputFrom.val() && $inputTo.val()) {
            return true;
        }
        updateFieldWithError($inputTo);
        updateFieldWithError($inputFrom);
        return false;
    }

    function updateFieldWithError($field) {
        $field.addClass("field-error");
        $field.parent().find('.error-msg').show();
    }

    function resetError($field) {
        $field.removeClass("field-error");
        $field.parent().find('.error-msg').hide();
    }

    $("#btn-exchange").click(function(e) {
        e.preventDefault();
        var result = false,
            $fromPaymentDocument = $(".currency-exchange__input:nth-child(1)").find('input'),
            $toPaymentDocument = $(".currency-exchange__input:nth-child(3)").find('input');

        result = validateCalculatorInputs();
        result = result && ($fromPaymentDocument.hasClass('card_number') ?
            validateCreditCard($fromPaymentDocument) : validateCryptoAddress($fromPaymentDocument));
        result = result && ($toPaymentDocument.hasClass('card_number') ?
                validateCreditCard($toPaymentDocument) : validateCryptoAddress($toPaymentDocument));
        result = result && validateEmail();

        if (!result) {
            return;
        }

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