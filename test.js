var mpsig = require("./index");

var link = "http://mixpanel.com/api/2.0/funnels/?api_key=0101010101&expire=999999999999999999&from_time=2015-04-20&funnel_id=1111111&interval=1&to_time=2015-04-25";
var new_link = mpsig.addSignature(link, "abcd1234");

console.log(new_link);