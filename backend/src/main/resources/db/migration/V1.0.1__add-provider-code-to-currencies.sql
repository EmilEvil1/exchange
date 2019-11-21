ALTER TABLE currencies ADD provider_code varchar(40) NULL;
ALTER TABLE currencies ADD active BOOLEAN NULL;

INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("DAI", 511665.68456210656, 211298.22603978924, 31, "DAO MAKER", 234.45, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");

UPDATE currencies set provider_code = 'binance' where code in ('BTC', 'ETH', 'XRP', 'EOS', 'LTC', 'BNB', 'USDT', 'XLM', 'TRX', 'XMR', 'DASH', 'ETC', 'BAT', 'USDC', 'XLM', 'TRX', 'XMR', 'DASH', 'ETC', 'BAT', 'USDC', 'ZRX', 'ENJ', 'ZEC', 'ADA', 'HT', 'WAVES', 'KCS', 'PAX', 'BCH');
UPDATE currencies set active = true where code in ('BTC', 'USDT', 'USDC', 'PAX', 'DAI', 'QIWI');