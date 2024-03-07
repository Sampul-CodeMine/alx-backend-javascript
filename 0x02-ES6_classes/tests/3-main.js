/* eslint-disable import/extensions */
/* eslint-disable jest/require-hook */

import Currency from '../3-currency.js';

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
