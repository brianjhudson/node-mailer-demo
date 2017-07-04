const Nexmo = require('nexmo')
const config = require('./config')
const nexmo = new Nexmo({
  apiKey: config.NEXMO_API_KEY,
  apiSecret: config.NEXMO_API_SECRET
});

nexmo.message.sendSms(
  config.NEXMO_VIRTUAL_NUMBER, '15123639163', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );


