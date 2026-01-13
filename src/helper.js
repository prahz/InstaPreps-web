import { SETP_COMPLETATION_PERCENTAGE } from 'src/constants';

export const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_API_URL;
};

export const apiHeaders = (headers = {}) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };
};

export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};

export const transformNullToString = (value) => {
  if (!value) return '';
  return value.toString();
};

export const transformNullToUndefined = (value) => {
  if (typeof value === 'boolean') return value;
  if (!value) return undefined;
  return value;
};

export const onlyNumbers = (value) => {
  return transformNullToString(value).replace(/[^0-9]/g, '');
};

export const onlyNumbersWithDecimal = (value) => {
  return transformNullToString(value)
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*)\./g, '$1');
};

export const amountToThousandSeparator = (value) => {
  return transformNullToString(value)
    .replace(/\D/g, '')
    .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, '$1, ');
};

export const onlyAlphaNumeric = (value) => {
  return transformNullToString(value).replace(/[^a-zA-Z0-9 ]/g, '');
};

export const toINRWords = (num) => {
  num = transformNullToString(num).replace(/, /g, '');
  const single = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const double = [
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen'
  ];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const formatTenth = (digit, prev) => {
    return digit === 0 ? '' : ` ${(digit === 1 && double[prev]) || tens[digit]}`;
  };
  const formatOther = (digit, next, denom) => {
    // eslint-disable-next-line eqeqeq
    return (digit != 0 && next != 1 ? ` ${single[digit]}` : '') + (next != 0 || digit > 0 ? ` ${denom}` : '');
  };
  let res = '';
  let index = 0;
  let digit = 0;
  let next = 0;
  const words = [];
  num += '';
  if (Number.isNaN(parseInt(num, 10))) {
    res = '';
    return res;
  }
  if (parseInt(num, 10) > 0 && num.length <= 10) {
    for (index = num.length - 1; index >= 0; index -= 1) {
      digit = num[index] - 0;
      next = index > 0 ? num[index - 1] - 0 : 0;
      switch (num.length - index - 1) {
        case 0:
          words.push(formatOther(digit, next, ''));
          break;
        case 1:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 2:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0 ? ` ${single[digit]} Hundred${num[index + 1] != 0 && num[index + 2] != 0 ? ' and' : ''}` : ''
          );
          break;
        case 3:
          words.push(formatOther(digit, next, 'Thousand'));
          break;
        case 4:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 5:
          words.push(formatOther(digit, next, 'Lakh'));
          break;
        case 6:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 7:
          words.push(formatOther(digit, next, 'Crore'));
          break;
        case 8:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 9:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0
              ? // eslint-disable-next-line eqeqeq
                ` ${single[digit]} Hundred${((num[index + 1] != 0 || num[index + 2] != 0) && ' and') || ' Crore'}`
              : ''
          );
          break;
        default:
          words.push('');
      }
    }
    res = words.reverse().join('');
    return res !== '' ? `${res} rupees` : '';
  }
  res = '';
  return res !== '' ? `${res} rupees` : '';
};

// TODO: @chirag can create common function for both toWords & toINRWords
export const toWords = (num) => {
  num = transformNullToString(num).replace(/, /g, '');
  const single = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const double = [
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen'
  ];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const formatTenth = (digit, prev) => {
    return digit === 0 ? '' : ` ${(digit === 1 && double[prev]) || tens[digit]}`;
  };
  const formatOther = (digit, next, denom) => {
    // eslint-disable-next-line eqeqeq
    return (digit != 0 && next != 1 ? ` ${single[digit]}` : '') + (next != 0 || digit > 0 ? ` ${denom}` : '');
  };
  let res = '';
  let index = 0;
  let digit = 0;
  let next = 0;
  const words = [];
  num += '';
  if (Number.isNaN(parseInt(num, 10))) {
    res = '';
    return res;
  }
  if (parseInt(num, 10) > 0 && num.length <= 10) {
    for (index = num.length - 1; index >= 0; index -= 1) {
      digit = num[index] - 0;
      next = index > 0 ? num[index - 1] - 0 : 0;
      switch (num.length - index - 1) {
        case 0:
          words.push(formatOther(digit, next, ''));
          break;
        case 1:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 2:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0 ? ` ${single[digit]} Hundred${num[index + 1] != 0 && num[index + 2] != 0 ? ' and' : ''}` : ''
          );
          break;
        case 3:
          words.push(formatOther(digit, next, 'Thousand'));
          break;
        case 4:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 5:
          words.push(formatOther(digit, next, 'Lakh'));
          break;
        case 6:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 7:
          words.push(formatOther(digit, next, 'Crore'));
          break;
        case 8:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 9:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0
              ? // eslint-disable-next-line eqeqeq
                ` ${single[digit]} Hundred${((num[index + 1] != 0 || num[index + 2] != 0) && ' and') || ' Crore'}`
              : ''
          );
          break;
        default:
          words.push('');
      }
    }
    res = words.reverse().join('');
    return res !== '' ? res : '';
  }
  res = '';
  return res !== '' ? res : '';
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isLoggedIn = (user) => !!(user && user.contact_number);

export const randomKey = () => {
  return Math.random().toString(36).substr(2, 5);
};

export const getProgress = (completedSteps) => {
  const filteredSteps = Object.keys(SETP_COMPLETATION_PERCENTAGE).filter(
    (step) =>
      completedSteps.includes(step) &&
      step !== 'profile_detail' &&
      step !== 'profile_loan_detail' &&
      step !== 'cibil_score'
  );

  let percentage =
    filteredSteps.length > 0
      ? filteredSteps
          .map((step) => SETP_COMPLETATION_PERCENTAGE[step])
          .reduce((a, b) => {
            return a + b;
          })
      : 0;

  const IsPersonalDetalsComplete = completedSteps.includes('application_personal');
  if (!IsPersonalDetalsComplete && filteredSteps.length === 0) {
    percentage = (SETP_COMPLETATION_PERCENTAGE.application_personal * 60) / 100;
  }

  return {
    total: 5,
    completed: filteredSteps.length,
    percentage
  };
};
