var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("send message to");
  var subscription =  req.body.subscription;
  var messageToSend = req.body.messageToSend;
  // var subscription = '{"endpoint":"https://android.googleapis.com/gcm/send/cdOyBZ-6_CY:APA91bHWX9oF1uXgwM7kDoNr6tnHf9zWuX2SJJ4cf1g2qjzKvokBybYCYq5DJnB5asrWrYekDvAT9S_Y9RqKMtCPNf2kJz4R2j_kl8G92dP3PbqYEqaQpanlqBf4w7VSjr1ZrvuGoyh4","keys":{"p256dh":"BENro4XidqEqULgMu_X-9cx6eEfAGwXyBgdCi65A1wBF9pXhl03ZDNUTLcvQQs_yq09PpNVSDyjmM5fEAxMBkCE=","auth":"RZcJuQ2HRfq1Eank1qazgA=="}}';
  // var messageToSend = {'title':"Midhun Baba",'body':"Ki Jai ho",'icon':'http://talkoot.in/beta/rsz_trending.png'};
  var subs = JSON.parse(subscription);
 webpush.sendWebPush(JSON.stringify(messageToSend), subs).then(function(success){
   console.log(success);
 },function(err){
   console.log(err);
 })

});

module.exports = router;
