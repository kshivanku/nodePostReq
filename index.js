var querystring = require('querystring');
var request = require('request');

//form is the body that you want to send with POST request
var form = {
  'grant_type' : 'refresh_token',
  'refresh_token': '***'
}

var formdata = querystring.stringify(form);

request({
  //specifying headers of the request
  headers: {
    'authorization' : 'Basic <authorization code>',
    'accept': 'application/json',
    'accept_language': 'en_US',
    'content_type': 'application/x-www-form-urlencoded'
  },
  uri : 'https://api.sandbox.paypal.com/v1/oauth2/token',
  body: formdata,
  method: 'POST'
}, function (err, response, body){
  // console.log('err', err);
  // console.log('response', response);
  console.log('body', body);
});









// var http = require('http');
//
// const options = {
//   hostname: 'https://api.sandbox.paypal.com/v1/payments/personal-payments/eligibility',
//   headers: {
//     'authorization': 'bearer A23AAHz6oMto_wcySjhF2am2uwN8cWRvGeMqUpHt3ljgimX8V0zXPueN9kyxZqYp0pFH-0PA76ehc7uwFFUdwUHXxXGJarQGw',
//         'accept': 'application/json',
//         'accept-language': 'en_US',
//         'content-type': 'application/x-www-form-urlencoded'
//   }
// }
//
// http.request(options, (err, res) => {
//   console.log('Status: ' + res.statusCode);
//   res.on('data', (chunk) =>{
//     console.log(`Body: ${chunk}`);
//   })
//   if err throw err;
// });



// const request = require('request');
// request('http://google.com', function(err, response, body){
//   console.log('error: ', err);
//   console.log('response: ', response);
//   // console.log('body: ', body);
// })

// const url = "https://api.sandbox.paypal.com/v1/payments/personal-payments/eligibility"

// var options = {
//   url: 'https://api.sandbox.paypal.com/v1/payments/personal-payments/eligibility',
//   headers: {
//     'authorization': 'bearer A23AAHz6oMto_wcySjhF2am2uwN8cWRvGeMqUpHt3ljgimX8V0zXPueN9kyxZqYp0pFH-0PA76ehc7uwFFUdwUHXxXGJarQGw',
//     'accept': 'application/json',
//     'accept-language': 'en_US',
//     'content-type': 'application/x-www-form-urlencoded'
//   }
// }
//
// request(options, function(err, httpResponse, body){
//   console.log('httpResponse: ', httpResponse);
//   // console.log('body: ', body);
//   // console.log('err: ', err);
// });
