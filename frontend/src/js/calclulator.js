(function($, window) {
    var currencies;
    $.ajax({
        url: 'http://localhost:8080/api/currencies',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(response) {
        currencies = response;
        currencies.forEach(function(currency) {
            var templateCurrency = $("<div class='currencyItem' data-name='" + currency.name + "' data-ticker='" + currency.ticker + "' data-rub-rate='" + currency.rub + "'>" +
                "<div class=\"selector-currency__icon\"></div>" +
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

            $calcBtn.text(name);
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
    });

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

    $("#card_number").validateCreditCard(function(res) {

    })

    $("#crypto_address").blur(function() {
        var ticker = $('.calculator__btn--from').data('ticker');
        var address = $(this).val();
        var valid = WAValidator.validate(address, ticker);
    })

    $("")


} ($, window));