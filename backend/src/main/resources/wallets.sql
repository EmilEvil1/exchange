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

