DROP TABLE if exists currencies;

create table if not exists currencies
(
  id int not null primary key AUTO_INCREMENT,
	code varchar(20),
	rub decimal(27, 12) null,
	uah decimal(27, 12) null,
	priority int null,
	name varchar(50) null,
	reserves decimal(27, 12) null,
	CR_TYPE varchar(50) null
);

-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("BTC", 511665.68456210656, 211298.22603978924, 1, "Bitcoin", 234.45, "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ETH", 16414.782178023637, 6636.385305424678, 2, "Ethereum", 453.345, "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ETH", 16414.782178023637, 6636.385305424678, 2, "Ethereum", 453.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ETH", 16414.782178023637, 6636.385305424678, 2, "Ethereum", 453.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("XRP", 25.31023206157998, 10.13758981, 3, "Ripple", 43.456, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("EOS", 404.8853725124554, 167.63386258, 7, "EOS", 654.356, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("LTC", 5871.685987116676, 2667.763838, 5, "Litecoin", 564.356, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("BNB", 2041.0029075791467, 883.434598, 8, "Binance Coin", 245.675, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("USDT", 64.53258204973166, 26.4749635, 4, "Tether", 874.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("XLM", 8.430670545972866, 3.32139918, 11, "Stellar", 352.2445, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("TRX", 1.8485460382558045, 0.793348, 9, "TRON", 353.564, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("XMR", 5803.310497210129, 2275.6619717, 12, "Monero", 356.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("DASH", 10456.851478267, 4065.1818039, 13, "Dash", 356.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ETC", 472.9932506909332, 190.3881479, 14, "Ethereum Classic", 3456.366356, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("BAT", 23.349358608155114, 9.21690340, 16, "Basic Attention Token", 35224.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("USDC", 64.2312795338725, 26.3690509, 18, "USD Coin", 564.356, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ZRX", 20.905571768697644, 8.336426, 22, "0x", 3566.345, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ENJ", 10.78, 4.3577795, 23, "Enjin Coin", 5634.356, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ZEC", 4734.74533245, 1886.7949540, 15, "Zcash", 5633.456, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("ADA", 5.33871090, 2.1426444, 10, "Cardano", 6633.456, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("HT", 184.51, 84.5769287, 20, "Huobi Token", 3563.566, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("WAVES", 154.415549435, 70.2502869, 17, "Waves", 674.366, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("KCS", 67.4406317266, 29.232792, 21, "KuCoin Shares", 3656.33, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("PAX", 64.2980005, 26.3523976, 19, "Paxos Token", 3563.43, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES ("BCH", 26190.15260730, 10662.821574, 6, "Bitcoin Cash", 6336.35, "CN");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("SBER", 1, 1, 24, "Сбербанк", 3563.345, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("YANDEX", 1, 1, 25, "Яндекс Деньги", 5635.356, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("TINKOFF", 1, 1, 26, "Тинькофф", 653.356, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("ADVCASH", 1, 1, 27, "AdvcashRub", 2455.45, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("ALPHA", 1, 1, 28, "Альфа Банк", 23455.45, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("VTB", 1, 1, 29, "ВТБ Банк", 645666.45, "BK");
-- INSERT INTO currencies (code, rub, uah, priority, name, reserves, CR_TYPE) VALUES("QIWI", 1, 1, 30, "QIWI кошелек", 43453.45, "BK");







