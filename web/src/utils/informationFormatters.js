export const capitalizeFirstNameLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const replaceDotWithComma = (number) => {
  const numberToString = number.toString();
  return numberToString.replace('.', ',');
};

export const replaceCommaWithDot = (amount) => {
  return amount.replace(',', '.');
};

export const formatAmount = (amount) => {
  const amountToString = amount.toString();

  const formattedAmount = replaceDotWithComma(amountToString);

  if (formattedAmount.indexOf(',') === -1) {
    return formattedAmount + ',00';
  }
  return formattedAmount;
};

export const formatDate = (date) => {
  const splittedDate = date.split('T');

  const dayMonthYear = splittedDate[0].split('-');

  const newDayMonthYear =
    dayMonthYear[2] + '/' + dayMonthYear[1] + '/' + dayMonthYear[0];

  const time = splittedDate[1].split('.');

  return newDayMonthYear + ' às ' + time[0];
};

export const formatTransactionCategory = (category) => {
  switch (category) {
    case (category = 'deposit'):
      return (category = 'Depósito');
    case (category = 'payment'):
      return (category = 'Pagamento');
    case (category = 'withdrawl'):
      return (category = 'Retirada');
    default:
      return null;
  }
};

export const formatSingleDecimal = (amount) => {
  const stringAmount = amount.toString();
  const splitedAmount = stringAmount.split(',');
  if (splitedAmount[1].length < 2) {
    return stringAmount + '0';
  }
  return amount;
};

export const statementFormatter = (statement) => {
  return {
    category: formatTransactionCategory(statement.category),
    amount: formatAmount(statement.amount),
    created_at: formatDate(statement.created_at),
  };
};
