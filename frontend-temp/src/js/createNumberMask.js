var dollarSign = '$'
var emptyString = ''
var comma = ','
var period = '.'
var minus = '-'
var minusRegExp = /-/
var nonDigitsRegExp = /\D+/g
var number = 'number'
var digitRegExp = /\d/
var caretTrap = '[]'

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function createNumberMask() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? dollarSign : _ref$prefix,
        _ref$suffix = _ref.suffix,
        suffix = _ref$suffix === undefined ? emptyString : _ref$suffix,
        _ref$includeThousands = _ref.includeThousandsSeparator,
        includeThousandsSeparator = _ref$includeThousands === undefined ? true : _ref$includeThousands,
        _ref$thousandsSeparat = _ref.thousandsSeparatorSymbol,
        thousandsSeparatorSymbol = _ref$thousandsSeparat === undefined ? comma : _ref$thousandsSeparat,
        _ref$allowDecimal = _ref.allowDecimal,
        allowDecimal = _ref$allowDecimal === undefined ? false : _ref$allowDecimal,
        _ref$decimalSymbol = _ref.decimalSymbol,
        decimalSymbol = _ref$decimalSymbol === undefined ? period : _ref$decimalSymbol,
        _ref$decimalLimit = _ref.decimalLimit,
        decimalLimit = _ref$decimalLimit === undefined ? 2 : _ref$decimalLimit,
        _ref$requireDecimal = _ref.requireDecimal,
        requireDecimal = _ref$requireDecimal === undefined ? false : _ref$requireDecimal,
        _ref$allowNegative = _ref.allowNegative,
        allowNegative = _ref$allowNegative === undefined ? false : _ref$allowNegative,
        _ref$allowLeadingZero = _ref.allowLeadingZeroes,
        allowLeadingZeroes = _ref$allowLeadingZero === undefined ? false : _ref$allowLeadingZero,
        _ref$integerLimit = _ref.integerLimit,
        integerLimit = _ref$integerLimit === undefined ? null : _ref$integerLimit;

    var prefixLength = prefix && prefix.length || 0;
    var suffixLength = suffix && suffix.length || 0;
    var thousandsSeparatorSymbolLength = thousandsSeparatorSymbol && thousandsSeparatorSymbol.length || 0;

    function numberMask() {
        var rawValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyString;

        var rawValueLength = rawValue.length;

        if (rawValue === emptyString || rawValue[0] === prefix[0] && rawValueLength === 1) {
            return prefix.split(emptyString).concat([digitRegExp]).concat(suffix.split(emptyString));
        } else if (rawValue === decimalSymbol && allowDecimal) {
            return prefix.split(emptyString).concat(['0', decimalSymbol, digitRegExp]).concat(suffix.split(emptyString));
        }

        var indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol);
        var hasDecimal = indexOfLastDecimal !== -1;
        var isNegative = rawValue[0] === minus && allowNegative;

        var integer = void 0;
        var fraction = void 0;
        var mask = void 0;

        // remove the suffix
        if (rawValue.slice(suffixLength * -1) === suffix) {
            rawValue = rawValue.slice(0, suffixLength * -1);
        }

        if (hasDecimal && (allowDecimal || requireDecimal)) {
            integer = rawValue.slice(rawValue.slice(0, prefixLength) === prefix ? prefixLength : 0, indexOfLastDecimal);

            fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
            fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
        } else {
            if (rawValue.slice(0, prefixLength) === prefix) {
                integer = rawValue.slice(prefixLength);
            } else {
                integer = rawValue;
            }
        }

        if (integerLimit && (typeof integerLimit === 'undefined' ? 'undefined' : _typeof(integerLimit)) === number) {
            var thousandsSeparatorRegex = thousandsSeparatorSymbol === '.' ? '[.]' : '' + thousandsSeparatorSymbol;
            var numberOfThousandSeparators = (integer.match(new RegExp(thousandsSeparatorRegex, 'g')) || []).length;

            integer = integer.slice(0, integerLimit + numberOfThousandSeparators * thousandsSeparatorSymbolLength);
        }

        integer = integer.replace(nonDigitsRegExp, emptyString);

        if (!allowLeadingZeroes) {
            integer = integer.replace(/^0+(0$|[^0])/, '$1');
        }

        integer = includeThousandsSeparator ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer;

        mask = convertToMask(integer);

        if (hasDecimal && allowDecimal || requireDecimal === true) {
            if (rawValue[indexOfLastDecimal - 1] !== decimalSymbol) {
                mask.push(caretTrap);
            }

            mask.push(decimalSymbol, caretTrap);

            if (fraction) {
                if ((typeof decimalLimit === 'undefined' ? 'undefined' : _typeof(decimalLimit)) === number) {
                    fraction = fraction.slice(0, decimalLimit);
                }

                mask = mask.concat(fraction);
            }

            if (requireDecimal === true && rawValue[indexOfLastDecimal - 1] === decimalSymbol) {
                mask.push(digitRegExp);
            }
        }

        if (prefixLength > 0) {
            mask = prefix.split(emptyString).concat(mask);
        }

        if (isNegative) {
            // If user is entering a negative number, add a mask placeholder spot to attract the caret to it.
            if (mask.length === prefixLength) {
                mask.push(digitRegExp);
            }

            mask = [minusRegExp].concat(mask);
        }

        if (suffix.length > 0) {
            mask = mask.concat(suffix.split(emptyString));
        }

        return mask;
    }

    numberMask.instanceOf = 'createNumberMask';

    return numberMask;
}

function convertToMask(strNumber) {
    return strNumber.split(emptyString).map(function (char) {
        return digitRegExp.test(char) ? digitRegExp : char;
    });
}

// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n, thousandsSeparatorSymbol) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}