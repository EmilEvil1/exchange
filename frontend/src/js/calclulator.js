(function($, window) {
    $.ajax({
        url: 'http://localhost:8080/api/currencies',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(currencies) {
        currencies.forEach(function(currency) {
            var templateCurrency = $("<div class='currencyItem' data-name='" + currency.name + "' data-ticker='" + currency.ticker + "' data-rub-rate='" + currency.rub + "'>" +
                "<div class=\"selector-currency__icon\"></div>" +
            "<div class=\"selector-currency__name\">"+ currency.name + "</div>" +
                "</div>'");

            $(".calculator__selector").append(templateCurrency);
        });

        $(".calculator__btn").click(function(e) {
            $(this).closest('.direction').find('.calculator__selector').toggle();
        });

        $(".currencyItem").click(function(e) {
            var name = $(this).data('name');
            $(this).closest('.direction').find(".calculator__btn").text(name);
            $(this).closest('.direction').find('.calculator__selector').toggle();
        });
    })
} ($, window));