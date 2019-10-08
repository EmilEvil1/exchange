package com.fairpay.payments.error;

public class BinanceWalletNotFoundException extends RuntimeException {

    public BinanceWalletNotFoundException() {
    }

    public BinanceWalletNotFoundException(String message) {
        super(message);
    }

    public BinanceWalletNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public BinanceWalletNotFoundException(Throwable cause) {
        super(cause);
    }

    public BinanceWalletNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
