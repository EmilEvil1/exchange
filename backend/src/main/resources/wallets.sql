create table if not exists wallet
(
	id int auto_increment,
	payment_document varchar(150) null,
	currecy_code varchar(20) null,
	constraint wallet_id_uindex
		unique (id)
)
;

alter table wallet
	add primary key (id)
;

