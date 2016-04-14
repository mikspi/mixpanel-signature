var crypto = require('crypto');

function mixpanelSignature (api_secret, link) {
    var args = link.replace(/\./g,';').replace(/(\?|&)/g,'.').split('.').filter(function(str){ return str.length>0 }).slice(1);
    var args_sorted = args.sort();
    var args_concat = args_sorted.join('');
    var sig = crypto.createHash('md5').update(args_concat + api_secret).digest('hex');

    return sig;
}

function getMixPanelURL (link, sig) {
    link += "&sig=" + sig;

    return link;
}

function addSignature (link, api_secret) {
    var sig = mixpanelSignature(api_secret, link);
    var link = getMixPanelURL(link, sig);

    return link;
}

exports.addSignature = addSignature;