create table if not exists applications
(
	id varchar(100) not null
		primary key,
	from_currency varchar(10) null,
	to_currency varchar(10) null,
	amount_from float null,
	amount_to float null,
	from_document_payment varchar(50) null,
	to_document_payment varchar(50) null,
	create_date date null,
	email varchar(50) null,
	phone varchar(20) null
);

