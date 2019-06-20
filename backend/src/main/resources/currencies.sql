DROP TABLE if exists currencies;

create table if not exists currencies
(
	ticker varchar(7) not null
		primary key,
	rub float null,
	uah float null,
	priority int null,
	name varchar(50) null
);

INSERT INTO currencies VALUES ("BTC", 511665.68456210656, 211298.22603978924, 1, "Bitcoin");
INSERT INTO currencies VALUES ("ETH", 16414.782178023637, 6636.385305424678, 2, "Ethereum");
INSERT INTO currencies VALUES ("XRP", 25.31023206157998, 10.13758981, 3, "ripple");
INSERT INTO currencies VALUES ("EOS", 404.8853725124554, 167.63386258, 7, "EOS");
INSERT INTO currencies VALUES ("LTC", 5871.685987116676, 2667.763838, 5, "Litecoin");
INSERT INTO currencies VALUES ("BNB", 2041.0029075791467, 883.434598, 8, "Binance Coin");
INSERT INTO currencies VALUES ("USDT", 64.53258204973166, 26.4749635, 4, "Tether");
INSERT INTO currencies VALUES ("XLM", 8.430670545972866, 3.32139918, 11, "Stellar");
INSERT INTO currencies VALUES ("TRX", 1.8485460382558045, 0.793348, 9, "TRON");
INSERT INTO currencies VALUES ("XMR", 5803.310497210129, 2275.6619717, 12, "Monero");
INSERT INTO currencies VALUES ("DASH", 10456.851478267, 4065.1818039, 13, "Dash");
INSERT INTO currencies VALUES ("ETC", 472.9932506909332, 190.3881479, 14, "Ethereum Classic");
INSERT INTO currencies VALUES ("BAT", 23.349358608155114, 9.21690340, 16, "Basic Attention Token");
INSERT INTO currencies VALUES ("USDC", 64.2312795338725, 26.3690509, 18, "USD Coin");
INSERT INTO currencies VALUES ("ZRX", 20.905571768697644, 8.336426, 22, "0x");
INSERT INTO currencies VALUES ("ENJ", 10.78, 4.3577795, 23, "Enjin Coin");
INSERT INTO currencies VALUES ("ZEC", 4734.74533245, 1886.7949540, 15, "Zcash");
INSERT INTO currencies VALUES ("ADA", 5.33871090, 2.1426444, 10, "Cardano");
INSERT INTO currencies VALUES ("HT", 184.51, 84.5769287, 20, "Huobi Token");
INSERT INTO currencies VALUES ("WAVES", 154.415549435, 70.2502869, 17, "Waves");
INSERT INTO currencies VALUES ("KCS", 67.4406317266, 29.232792, 21, "KuCoin Shares");
INSERT INTO currencies VALUES ("PAX", 64.2980005, 26.3523976, 19, "Paxos Standard Token");
INSERT INTO currencies VALUES ("BCH", 26190.15260730, 10662.821574, 6, "Bitcoin Cash");




