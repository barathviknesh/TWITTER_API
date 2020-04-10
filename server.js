const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

var app = express();
// app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res)=> {
    res.send('working');
})


app.listen(port, () => console.log('server started at port : '+port));




var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
console.log(T,"T");






//get

getTwit();

function getTwit() {
var p = { q: 'sometime you have to run before u walk',
         count: 2 };

T.get('search/tweets', p , gotData); 

function gotData(err, data, response) {
    if(err){
        console.log("error watchOut in getTwit");
    }
    // console.log(data)
    else{
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
}
  };
};

  //post 

  twitIt();

function twitIt() {

var tweet = { status: 'twit from node.js task accomplished' }; 
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if(err){
        console.log("error watchOut in twitIt");
    }else{
        console.log("tweeted done");
    }
};

};


// var T = new Twit({
//   consumer_key:         '...',
//   consumer_secret:      '...',
//   access_token:         '...',
//   access_token_secret:  '...',
 
// });
