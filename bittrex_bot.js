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



console.log ('I am profit_bot and i am going to make you rich!');



function start(timeout) {
setTimeout(function () {
// check prices	 

bittrex.getticker( { market : settings.market }, function( data ) {
    console.log ('Bid = ' + data.result.Bid  + ' Ask = ' + data.result.Ask + ' Last = ' + data.result.Last);
 //	console.log( data );
});
	
bittrex.getmarketsummary( { market : settings.market}, function( data ) {
    console.log( data );
});	
	

//bittrex.getopenorders( { market : settings.market}, function( data ) {
  //  console.log(data);
//	if (data.result.length > 0) {
	//  console.log('Активные ордера:');
	//  console.log( data.result );
//	}
	
// });

start(interval);
}, timeout);
// open orders
}
// Start !
start(0);

//console.log ('custom request');
//bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/account/getbalances?currency=BTC', function( data ) {
//    console.log( data );
//}, true );
