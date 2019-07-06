(function($, window) {
    var currencies;
    var URLS = {
        FETCH_CURRENCIES: '/api/currencies',
        CREATE_APPLICATION: '/api/application'
    };
    $.ajax({
        url: 'http://localhost:8080' + URLS.FETCH_CURRENCIES,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(response) {
        // currencies = response;
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

        var compiledFrom = _.template(currencyFrom.paymentDocument === 'card' ? cardNumberTemplate : cryptoAddressTemplate);
        var compiledTo = _.template(currencyTo.paymentDocument === 'card' ? cardNumberTemplate : cryptoAddressTemplate);

        $(".currency-exchange__input").first().html(compiledFrom(currencyFrom));
        $(".currency-exchange__input:nth-child(3)").html(compiledTo(currencyTo));

        bindEvents()
    }

    function getResponse(response) {
        currencies = [
            {
                "ticker": "BTC",
                "name": "Bitcoin",
                "rub": 504603.0,
                "uah": 206124.0,
                "paymentDocument": "address"
            },
            {
                "ticker": "ETH",
                "name": "Ethereum",
                "rub": 15975.4,
                "uah": 6525.75,
                "paymentDocument": "address"
            },
            {
                "ticker": "XRP",
                "name": "ripple",
                "rub": 25.3247,
                "uah": 10.3449,
                "paymentDocument": "address"
            },
            {
                "ticker": "USDT",
                "name": "Tether",
                "rub": 64.7203,
                "uah": 26.4375,
                "paymentDocument": "address"
            },
            {
                "ticker": "LTC",
                "name": "Litecoin",
                "rub": 5816.45,
                "uah": 2375.95,
                "paymentDocument": "address"
            },
            {
                "ticker": "BCH",
                "name": "Bitcoin Cash",
                "rub": 25976.9,
                "uah": 10611.3,
                "paymentDocument": "address"
            },
            {
                "ticker": "EOS",
                "name": "EOS",
                "rub": 401.787,
                "uah": 164.125,
                "paymentDocument": "address"
            },
            {
                "ticker": "BNB",
                "name": "Binance Coin",
                "rub": 1852.71,
                "uah": 756.812,
                "paymentDocument": "address"
            },
            {
                "ticker": "TRX",
                "name": "TRON",
                "rub": 1.83651,
                "uah": 0.750195,
                "paymentDocument": "address"
            },
            {
                "ticker": "ADA",
                "name": "Cardano",
                "rub": 5.45627,
                "uah": 2.22882,
                "paymentDocument": "address"
            },
            {
                "ticker": "XLM",
                "name": "Stellar",
                "rub": 8.57784,
                "uah": 3.50395,
                "paymentDocument": "address"
            },
            {
                "ticker": "XMR",
                "name": "Monero",
                "rub": 5564.69,
                "uah": 2273.11,
                "paymentDocument": "address"
            },
            {
                "ticker": "DASH",
                "name": "Dash",
                "rub": 10801.1,
                "uah": 4412.12,
                "paymentDocument": "address"
            },
            {
                "ticker": "ETC",
                "name": "Ethereum Classic",
                "rub": 475.511,
                "uah": 194.241,
                "paymentDocument": "address"
            },
            {
                "ticker": "ZEC",
                "name": "Zcash",
                "rub": 4952.85,
                "uah": 2023.18,
                "paymentDocument": "address"
            },
            {
                "ticker": "BAT",
                "name": "Basic Attention Token",
                "rub": 23.3624,
                "uah": 9.54328,
                "paymentDocument": "address"
            },
            {
                "ticker": "WAVES",
                "name": "Waves",
                "rub": 153.838,
                "uah": 62.841,
                "paymentDocument": "address"
            },
            {
                "ticker": "USDC",
                "name": "USD Coin",
                "rub": 64.65,
                "uah": 26.4088,
                "paymentDocument": "address"
            },
            {
                "ticker": "PAX",
                "name": "Paxos Standard Token",
                "rub": 64.4239,
                "uah": 26.3164,
                "paymentDocument": "address"
            },
            {
                "ticker": "HT",
                "name": "Huobi Token",
                "rub": 174.635,
                "uah": 71.3365,
                "paymentDocument": "address"
            },
            {
                "ticker": "KCS",
                "name": "KuCoin Shares",
                "rub": 66.658,
                "uah": 27.229,
                "paymentDocument": "address"
            },
            {
                "ticker": "ZRX",
                "name": "0x",
                "rub": 20.4915,
                "uah": 8.37052,
                "paymentDocument": "address"
            },
            {
                "ticker": "ENJ",
                "name": "Enjin Coin",
                "rub": 9.68095,
                "uah": 3.95456,
                "paymentDocument": "address"
            },
            {
                "ticker": "RUB",
                "name": "Sberbank",
                "rub": 1,
                "paymentDocument": "card"
            }
        ];
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

        $(".calculator__btn--to, .calculator__btn--from").click(function(e) {
            $(this).closest('.direction').find('.calculator__selector').toggle();
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

    getResponse();

    function getApplicationData() {
        var request = {};
        request.from = $('.calculator__btn--from').data('ticker');
        request.to = $('.calculator__btn--to').data('ticker');
        request.amountFrom = parseFloat($('.calculator__input--from').val());
        request.amountTo = parseFloat($('.calculator__input--to').val());
        request.fromDocumentPayment = $('.client-info')[0].val();
        request.toDocumentPayment = $('.client-info')[2].val();
        request.email = $('#email').val();
        
        return request;
    }

    var numberMask = createNumberMask({
        prefix: '',
        suffix: '',
        allowDecimal: true
    });

    document.querySelectorAll('.calculator__input--from, .calculator__input--to').forEach(function(inputEl) {
        vanillaTextMask.maskInput({
            inputElement: inputEl,
            mask: numberMask
        })
    });

    function validateCreditCard() {
        var result = $(".card_number").validateCreditCard();

        if (!result.valid) {
            $(this).addClass("field-error");
            $(this).parent().find('.error-msg').show();
            return false;
        }

        return true;
    }

    function validateCryptoAddress() {
        var ticker = $('.calculator__btn--from').data('ticker');
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

        var result = validateCreditCard() && validateCryptoAddress() && validateEmail();
        if (!result) {
            return;
        }

        var request = getApplicationData();
        $("#preloader").show();
        $.ajax({
            url: 'http://localhost:8080' + URLS.CREATE_APPLICATION,
            data: request,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).done(function (applicationId) {
            window.location.href = '/application.html?applicationId=' + applicationId;
        })

    });


} ($, window));