var MD5 = require('MD5');

function mixpanelSignature (api_secret, params) {
	console.log(params);
	var args_sorted = params.sort();
	var args_concat = args_sorted.join('');
	var sig = MD5(args_concat + api_secret);

	return sig;
}

function getMixPanelURL (sig, params) {
	var link = "http://mixpanel.com/api/2.0/events/?";
	params.forEach(function (param){
		link += "&" + param.split("=")[0] + "=" + encodeURIComponent(param.split("=")[1]);
	});
	link += "&sig=" + sig;

	return link;
}

var params_array = process.argv[3].split('&');
var sig = mixpanelSignature(process.argv[2], params_array);
var link = getMixPanelURL(sig, params_array);
console.log(link);