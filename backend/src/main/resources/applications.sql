DROP TABLE if exists applications;

create table if not exists applications
(
	id varchar(100) not null
		primary key,
	from_currency varchar(10) null,
	to_currency varchar(10) null,
	amount_from decimal(27, 12) null,
	amount_to decimal(27, 12) null,
	from_document_payment varchar(100) null,
	to_document_payment varchar(100) null,
	create_date DATETIME null,
	email varchar(50) null,
	phone varchar(20) null,
	system_document_payment varchar(100) null,
	from_currency_name varchar(20) null,
	to_currency_name varchar(20) null
);

