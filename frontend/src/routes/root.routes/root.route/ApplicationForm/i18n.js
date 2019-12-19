export default {
  en: {
    validator: {
      invalidWalletAddress: 'Invalid wallet address {{ticker}}.',
      required: 'The field is required.',
    }
  },
  ru: {
    heading: {
      from: 'Отдам',
      to: 'Получу',
    },
    step: {
      0: {
        iconName: 'icon-exchange',
        primary: 'Шаг 1',
        secondary: 'Выберете формат обмена',
      },
      1: {
        iconName: 'icon-blank-id',
        primary: 'Шаг 2',
        secondary: 'Введите контактные данные',
      },
      2: {
        iconName: 'icon-output-money',
        primary: 'Шаг 3',
        secondary: 'Подтверждение обмена и вывод средств',
      }
    },
    formField: {
      from: {
        label: 'Отдам',
      },
      to: {
        label: 'Получу',
      },
      amountFrom: {
        label: 'Введите сумму',
      },
      amountTo: {
        label: 'Введите сумму',
      },
      fromDocumentPayment: {
        label: {
          address: 'Кошелек списания',
          cardNumber: 'Номер карты списания',
        },
        labelTicker: {
          address: 'Кошелек списания {{ticker}}',
          cardNumber: 'Номер карты списания {{ticker}}',
        },
      },
      toDocumentPayment: {
        label: {
          address: 'Кошелек зачисления',
          cardNumber: 'Номер карты зачисления',
        },
        labelTicker: {
          address: 'Кошелек зачисления {{ticker}}',
          cardNumber: 'Номер карты {{ticker}}',
        },
      },
      name: {
        label: 'Ваше имя',
      },
      email: {
        label: 'Ваш e-mail',
      },
      phone: {
        label: 'Ваш телефон',
      },
    },
    resultMap: {
      amountFrom: 'Отдам',
      amountTo: 'Получу',
      fromDocumentPayment: 'Кошелек списания',
      toDocumentPayment: 'Кошелек зачисления',
      name: 'Ваше имя',
      email: 'Ваш e-mail',
      phone: 'Ваш телефон',
    },
    validator: {
      invalidWalletAddress: 'Неверный адрес кошелька {{ticker}}.',
      required: 'Поле обязательно для заполнения.',
    },
  },
};
