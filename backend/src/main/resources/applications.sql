CREATE TABLE applications
(
    id varchar(35) PRIMARY KEY,
    `from` varchar(10),
    `to` varchar(10),
    amount_from float,
    amount_to float,
    from_document_payment varchar(50),
    to_document_payment varchar(50),
    create_date DATE,
    email varchar(20),
    phone varchar(20)
);