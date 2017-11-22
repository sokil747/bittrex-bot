require('console-stamp')(console, '[HH:MM:ss.l]');
var settings =require('./settings.js') // edit settings.sample.js for your needs
var url = "https://bittrex.com/Market/Index?MarketName=" + settings.market ;

var bittrex = require('node-bittrex-api');
bittrex.options({
    'apikey' : settings.bittrex_apikey ,
    'apisecret' : settings.bittrex_apisecret, 
    'stream' : true,
    'verbose' : true,
    'cleartext' : false 
 });

var interval = settings.timeframe * 60 * 1000;


//var talib = require('./node_modules/talib/build/Release/talib');
//console.log("TALib Version: " + talib.version);

// Display all available indicator function names
//var functions = talib.functions;
//for (i in functions) {
//	console.log(functions[i].name);
//}
//

//var function_desc = talib.explain("BBANDS");
//console.dir(function_desc);
//


// help here : https://www.npmjs.com/package/node.bittrex.api 
// and https://bittrex.com/Home/Api
// and https://github.com/n0mad01/node.bittrex.api/blob/master/node.bittrex.api.js
// python bot https://github.com/riversteem/sbd_peg_bot
//bittrex.getbalance({ currency : 'BTC' }, function( data ) {
//    console.log( data );
//});
//bittrex.getbalances( function( data ) {
//    console.log( data );
//});

// setting timeout
var timeout;
switch (settings.tickInterval) {
  case 'oneMin':
    timeout = 1000 * 60
    break;
  case 'fiveMin':
    timeout = 1000 * 60 * 5
    break;
  case 'thirtyMin':
    timeout = 1000 * 60 * 30
    break;
   case 'hour':
    timeout = 1000 * 60 * 60
    break;
  case 'day':
    timeout = 1000 * 60 * 60 * 24
    break;
  default:
    console.log( 'Found error with timeframe interval. Switched to default value.' );
	timeout = 1000 * 60 * 60
}
console.log ('Tickinterval = ' + settings.tickInterval + ' so timeout was set to ' + timeout/1000 + ' sec.')
console.log ('Ready to make profit!');



function start(delay) {
setTimeout(function () {
// check prices	 

bittrex.getticker( { market : settings.market }, function( data ) {
    console.log ('Bid = ' + data.result.Bid  + ' Ask = ' + data.result.Ask + ' Last = ' + data.result.Last);
 //	console.log( data );
});
	
//bittrex.getmarketsummary( { market : settings.market}, function( data ) {
//    console.log( data );
//});	

//bittrex.getcandles({
//  marketName: settings.market,
//  tickInterval: settings.tickInterval, // intervals are keywords
//}, function( data, err ) {
//  console.log( data );
//});	

//bittrex.getopenorders( { market : settings.market}, function( data ) {
  //  console.log(data);
//	if (data.result.length > 0) {
	//  console.log('Активные ордера:');
	//  console.log( data.result );
//	}
	
// });

start(sync());
}, delay);

					
}

//synchronizing time

function sync() {
 var d = new Date();
 var msSinceMidnight = d.getTime() - d.setHours(0,0,0,0); 
 var towait = (timeout - (msSinceMidnight % timeout)) ;
// console.log(towait/1000)
	return towait;
}

start(sync());

//console.log ('custom request');
//bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/account/getbalances?currency=BTC', function( data ) {
//    console.log( data );
//}, true );
