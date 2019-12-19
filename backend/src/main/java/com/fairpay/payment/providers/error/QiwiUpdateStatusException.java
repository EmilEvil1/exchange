package com.fairpay.payment.providers.error;

public class QiwiUpdateStatusException extends RuntimeException {

    public QiwiUpdateStatusException() {
        super();
    }

    public QiwiUpdateStatusException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public QiwiUpdateStatusException(final String message) {
        super(message);
    }

    public QiwiUpdateStatusException(final Throwable cause) {
        super(cause);
    }

}