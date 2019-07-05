(function($, window) {
    var currencies;
    $.ajax({
        url: 'http://localhost:8080/api/currencies',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(response) {
        // currencies = response;
    });

    function getResponse(response) {
        currencies = [
            {
                "ticker": "BTC",
                "name": "Bitcoin",
                "rub": 504603.0,
                "uah": 206124.0
            },
            {
                "ticker": "ETH",
                "name": "Ethereum",
                "rub": 15975.4,
                "uah": 6525.75
            },
            {
                "ticker": "XRP",
                "name": "ripple",
                "rub": 25.3247,
                "uah": 10.3449
            },
            {
                "ticker": "USDT",
                "name": "Tether",
                "rub": 64.7203,
                "uah": 26.4375
            },
            {
                "ticker": "LTC",
                "name": "Litecoin",
                "rub": 5816.45,
                "uah": 2375.95
            },
            {
                "ticker": "BCH",
                "name": "Bitcoin Cash",
                "rub": 25976.9,
                "uah": 10611.3
            },
            {
                "ticker": "EOS",
                "name": "EOS",
                "rub": 401.787,
                "uah": 164.125
            },
            {
                "ticker": "BNB",
                "name": "Binance Coin",
                "rub": 1852.71,
                "uah": 756.812
            },
            {
                "ticker": "TRX",
                "name": "TRON",
                "rub": 1.83651,
                "uah": 0.750195
            },
            {
                "ticker": "ADA",
                "name": "Cardano",
                "rub": 5.45627,
                "uah": 2.22882
            },
            {
                "ticker": "XLM",
                "name": "Stellar",
                "rub": 8.57784,
                "uah": 3.50395
            },
            {
                "ticker": "XMR",
                "name": "Monero",
                "rub": 5564.69,
                "uah": 2273.11
            },
            {
                "ticker": "DASH",
                "name": "Dash",
                "rub": 10801.1,
                "uah": 4412.12
            },
            {
                "ticker": "ETC",
                "name": "Ethereum Classic",
                "rub": 475.511,
                "uah": 194.241
            },
            {
                "ticker": "ZEC",
                "name": "Zcash",
                "rub": 4952.85,
                "uah": 2023.18
            },
            {
                "ticker": "BAT",
                "name": "Basic Attention Token",
                "rub": 23.3624,
                "uah": 9.54328
            },
            {
                "ticker": "WAVES",
                "name": "Waves",
                "rub": 153.838,
                "uah": 62.841
            },
            {
                "ticker": "USDC",
                "name": "USD Coin",
                "rub": 64.65,
                "uah": 26.4088
            },
            {
                "ticker": "PAX",
                "name": "Paxos Standard Token",
                "rub": 64.4239,
                "uah": 26.3164
            },
            {
                "ticker": "HT",
                "name": "Huobi Token",
                "rub": 174.635,
                "uah": 71.3365
            },
            {
                "ticker": "KCS",
                "name": "KuCoin Shares",
                "rub": 66.658,
                "uah": 27.229
            },
            {
                "ticker": "ZRX",
                "name": "0x",
                "rub": 20.4915,
                "uah": 8.37052
            },
            {
                "ticker": "ENJ",
                "name": "Enjin Coin",
                "rub": 9.68095,
                "uah": 3.95456
            }
        ];
        currencies.forEach(function(currency) {
            var templateCurrency = $("<div class='currencyItem' data-name='" + currency.name + "' data-ticker='" + currency.ticker + "' data-rub-rate='" + currency.rub + "'>" +
                "<div style='background-image: url(./svg/" + currency.ticker.toLowerCase() + ".svg)' class=\"selector-currency__icon\"></div>" +
                "<div class=\"selector-currency__name\">"+ currency.name + "</div>" +
                "</div>'");

            $(".calculator__selector").append(templateCurrency);
        });

        $(".calculator__btn--to, .calculator__btn--from").click(function(e) {
            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(".currencyItem").click(function(e) {
            var $calcBtn = $(this).closest('.direction').find(".calculator__btn");
            var name = $(this).data('name');
            var ticker = $(this).data('ticker');

            $calcBtn.html("<span class='payment-method__payment-name'>" + name + "</span>");
            $calcBtn.attr('data-ticker', ticker);

            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(".calculator__input--from, .calculator__input--to").keyup(function(e) {
            var currentAmount = $(this).val();

            var tickerFrom = $('.calculator__btn--from').data('ticker');
            var tickerTo = $('.calculator__btn--to').data('ticker');

            var rateFrom = currencies.find(cur => cur.ticker === tickerFrom).rub;
            var rateTo = currencies.find(cur => cur.ticker === tickerTo).rub;

            if ($(this).hasClass('calculator__input--from')) {
                $('.calculator__input--to').val(rateFrom/rateTo * currentAmount)
            } else {
                $('.calculator__input--from').val(rateTo/rateFrom * currentAmount)
            }
        });
    }

    getResponse();

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
        var result = $("#card_number").validateCreditCard();

        if (!result.valid) {
            $(this).addClass("field-error");
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

    $("#card_number").blur(function() {
        validateCreditCard();
    });

    $("#card_number, #crypto_address").focus(function() {
        $(this).removeClass("field-error");
    })

    $("#crypto_address").blur(function() {
        validateCryptoAddress();
    });

    $("#btn-exchange").click(function(e) {
        e.preventDefault();

        var result = validateCreditCard() && validateCryptoAddress() && validateEmail();
        if (!result) {
            return;
        }

    });


} ($, window));