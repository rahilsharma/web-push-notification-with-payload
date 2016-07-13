# web-push-notification-with-payload
Example of web based push notifications with payload.

Usage :
1)Install all node packages using "npm install"

2)We are using "web-push-encryption" package . Link -->> https://github.com/GoogleChrome/web-push-encryption

3)For sending push notifications , just make a post call to http://localhost:3000/gcm with parameters subscription and messageToSend. 
-----------------------------------------------------------------------------------------------------------------------------------------
 var subscription = '{"endpoint":"https://android.googleapis.com/gcm/send/cdOyBZ-6_CY:APA91bHWX9oF1uXgwM7kDoNr6tnHf9zWuX2SJJ4cf1g2qjzKvokBybYCYq5DJnB5asrWrYekDvAT9S_Y9RqKMtCPNf2kJz4R2j_kl8G92dP3PbqYEqaQpanlqBf4w7VSjr1ZrvuGoyh4","keys":{"p256dh":"BENro4XidqEqULgMu_X-9cx6eEfAGwXyBgdCi65A1wBF9pXhl03ZDNUTLcvQQs_yq09PpNVSDyjmM5fEAxMBkCE=","auth":"RZcJuQ2HRfq1Eank1qazgA=="}}';
 
 var messageToSend = {'title':"Midhun Baba",'body':"Ki Jai ho",'icon':'http://talkoot.in/beta/rsz_trending.png'};
---------------------------------------------------------------------------------------------------------------------------------------
4)We need to pass subscription and messageTosend , right now they are hardcoded.

5)More info can be found here --->>> https://developers.google.com/web/updates/2016/03/web-push-encryption?hl=en

6) In App.js , set variable MY_GCM_KEY = to server GCM key.
