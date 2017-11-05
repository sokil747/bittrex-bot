require('console-stamp')(console, '[HH:MM:ss.l]');
var screenshot = require('url-to-screenshot');
var fs = require('fs');

var bittrex = require('./node_modules/node.bittrex.api/node.bittrex.api.js');
bittrex.options({
    'apikey' : 'Your_api_key' ,
    'apisecret' : 'Your_api_secret', 
    'stream' : true,
    'verbose' : true,
    'cleartext' : false 
 });
var market = 'USDT-ETH';
var url = "https://bittrex.com/Market/Index?MarketName=" + market ;
var interval = 5000;


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




//screenshot(url)
//  .width(800)
//  .height(600)
//  .capture(function(err, img) {
//    if (err) throw err;
//    fs.writeFileSync(__dirname + '/example.png', img);
//    console.log('open example.png');
//  });

console.log ('I am profit_bot and i am going to make you rich!');



function trade() {
setTimeout(function () {
// check prices	 

bittrex.getticker( { market : market }, function( data ) {
    console.log ('Bid = ' + data.result.Bid  + ' Ask = ' + data.result.Ask + ' Last = ' + data.result.Last);
 //	console.log( data );
});
	
bittrex.getmarketsummary( { market : market}, function( data ) {
    console.log( data );
});	
	

//bittrex.getopenorders( { market : market}, function( data ) {
  //  console.log(data);
//	if (data.result.length > 0) {
	//  console.log('Активные ордера:');
	//  console.log( data.result );
//	}
	
// });

//trade();
}, interval);
// open orders
}
// Start !
trade();

//console.log ('custom request');
//bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/account/getbalances?currency=BTC', function( data ) {
//    console.log( data );
//}, true );
