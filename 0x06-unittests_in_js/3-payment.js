const calculateNumber = require('./utils');


function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = calculateNumber('SUM', totalAmount, totalShipping);
  console.log('The total is: ${sum}');
}
