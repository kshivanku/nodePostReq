var querystring = require('querystring');
var request = require('request');

/**********
POST request with custom headers and request body
***********/

//form is the body that you want to send with POST request
// var form = {
//   'grant_type' : 'refresh_token',
//   'refresh_token': '***'
// }
//
// var formdata = querystring.stringify(form);
//
// request({
//   //specifying headers of the request
//   headers: {
//     'authorization' : 'Basic <authorization code>',
//     'accept': 'application/json',
//     'accept_language': 'en_US',
//     'content_type': 'application/x-www-form-urlencoded'
//   },
//   uri : 'https://api.sandbox.paypal.com/v1/oauth2/token',
//   body: formdata,
//   method: 'POST'
// }, function (err, response, body){
//   // console.log('err', err);
//   // console.log('response', response);
//   console.log('body', body);
// });

//POST request type 2

var requestBody = {
  "amount": {
    "value": "12",
    "currency": "USD"
  },
  "payee": {
    "id": "abcbusiness@business.com",
    "type": "EMAIL"
  },
  "fee": {
    "payer": "PAYER"
  },
  "payment_type": "PERSONAL"
}
request({
  headers: {
    'authorization': 'Bearer A23AAHQPC5ysX_F8oGmomeIzsqkcF05hfc0xhfnsx2YAFtXmB10Zzqa-aEEpmbu0uyTOsX8kfEWM1JltsekodSca9IhzsAzbA',
    'accept': 'application/json',
    'accept_language': 'en_US',
    'content_type': 'application/json'
  },
  uri: 'https://api.sandbox.paypal.com/v1/payments/personal-payments/funding-options',
  json: requestBody,
  method: 'POST'
}, function(err, response, body) {
  console.log(body.funding_options);
});

/**********
GET Request with custom header
***********/

// request({
//   headers : {
//     'authorization': 'Bearer <>',
//     'accept' : 'application/json',
//     'accept_language': 'en_US',
//     'content_type': 'application/x-www-form-urlencoded'
//   },
//   uri: 'https://api.sandbox.paypal.com/v1/payments/personal-payments/eligibility',
//   method: 'GET'
// }, function(err, response, body){
//   console.log('body',body);
// });
