DROP TABLE if exists applications;

create table if not exists applications
(
	id varchar(100) not null
		primary key,
	from_currency varchar(10) null,
	to_currency varchar(10) null,
	amount_from decimal(27,12) null,
	amount_to decimal(27,12) null,
	from_document_payment varchar(100) null,
	to_document_payment varchar(100) null,
	create_date datetime null,
	email varchar(50) null,
	phone varchar(20) null,
	from_system_document_payment varchar(100) null,
	to_system_document_payment varchar(100) null,
	from_currency_name varchar(20) null,
	to_currency_name varchar(20) null,
	status int null
)
;

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
	payment_document varchar(150) null,
	CR_TYPE varchar(50) null
);

INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("BTC", 511665.68456210656, 211298.22603978924, 1, "Bitcoin", 234.45, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ETH", 16414.782178023637, 6636.385305424678, 2, "Ethereum", 453.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("XRP", 25.31023206157998, 10.13758981, 3, "Ripple", 43.456, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("EOS", 404.8853725124554, 167.63386258, 7, "EOS", 654.356, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("LTC", 5871.685987116676, 2667.763838, 5, "Litecoin", 564.356, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("BNB", 2041.0029075791467, 883.434598, 8, "Binance Coin", 245.675,"3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("USDT", 64.53258204973166, 26.4749635, 4, "Tether", 874.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("XLM", 8.430670545972866, 3.32139918, 11, "Stellar", 352.2445, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("TRX", 1.8485460382558045, 0.793348, 9, "TRON", 353.564, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("XMR", 5803.310497210129, 2275.6619717, 12, "Monero", 356.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("DASH", 10456.851478267, 4065.1818039, 13, "Dash", 356.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ETC", 472.9932506909332, 190.3881479, 14, "Ethereum Classic", 3456.366356, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("BAT", 23.349358608155114, 9.21690340, 16, "Basic Attention Token", 35224.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("USDC", 64.2312795338725, 26.3690509, 18, "USD Coin", 564.356, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ZRX", 20.905571768697644, 8.336426, 22, "0x", 3566.345, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ENJ", 10.78, 4.3577795, 23, "Enjin Coin", 5634.356, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ZEC", 4734.74533245, 1886.7949540, 15, "Zcash", 5633.456, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("ADA", 5.33871090, 2.1426444, 10, "Cardano", 6633.456, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("HT", 184.51, 84.5769287, 20, "Huobi Token", 3563.566, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("WAVES", 154.415549435, 70.2502869, 17, "Waves", 674.366, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("KCS", 67.4406317266, 29.232792, 21, "KuCoin Shares", 3656.33, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("PAX", 64.2980005, 26.3523976, 19, "Paxos Token", 3563.43, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES ("BCH", 26190.15260730, 10662.821574, 6, "Bitcoin Cash", 6336.35, "3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "CN");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("SBER", 1, 1, 24, "Сбербанк", 3563.345, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("YANDEX", 1, 1, 25, "Яндекс Деньги", 5635.356, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("TINKOFF", 1, 1, 26, "Тинькофф", 653.356, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("ADVCASH", 1, 1, 27, "AdvcashRub", 2455.45, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("ALPHA", 1, 1, 28, "Альфа Банк", 23455.45, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("VTB", 1, 1, 29, "ВТБ Банк", 645666.45, "4111 1111 1111 1111", "BK");
INSERT INTO currencies (code, rub, uah, priority, name, reserves, payment_document, CR_TYPE) VALUES("QIWI", 1, 1, 30, "QIWI кошелек", 43453.45, "4111 1111 1111 1111", "BK");

DROP TABLE if exists wallets;

create table if not exists wallets
(
	id int auto_increment,
	payment_document varchar(150) null,
	ticker varchar(20) null,
	constraint wallet_id_uindex
		unique (id)
)
;

alter table wallets
	add primary key (id)
;

INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "BTC");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ETH");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "XRP");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "EOS");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "LTC");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "BNB");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "USDT");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "XLM");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "TRX");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "XMR");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "DASH");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ETC");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "BAT");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "USDC");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ZRX");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ENJ");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ZEC");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "ADA");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "HT");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "WAVES");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "KCS");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "PAX");
INSERT INTO wallets (payment_document, ticker) VALUES ("3GoZBF4zVGZyK1GD8i8Uga1eQ49BYWt5i9", "BCH");
INSERT INTO wallets (payment_document, ticker) VALUES("4111 1111 1111 1111", "SBER");
INSERT INTO wallets (payment_document, ticker) VALUES("4111 1111 1111 1111", "YANDEX");
INSERT INTO wallets (payment_document, ticker) VALUES("4111 1111 1111 1111", "TINKOFF");





