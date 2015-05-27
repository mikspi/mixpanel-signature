# MixPanelSignature

## When to use NodeGetPostProxy

This module automatically generates the MixPanel signature needed on the MixPanel API.

## Installing NodeGetPostProxy

```
npm install mixpanel-signature
```

## Usage

### How to integrate in a Node.js project

```
var mpsig = require('MixPanelSignature');

var link = "http://mixpanel.com/api/2.0/funnels/?api_key=0101010101&expire=999999999999999999&from_time=2015-04-20&funnel_id=1111111&interval=1&to_time=2015-04-25";

var new_link = mpsig.addSignature(link, "[API_KEY HERE]");
```

### How to generate a signature from the terminal

```
node mixpanelSignature.js [API_SECRET HERE] [URL HERE]
```

#### Example

```
node mixpanelSignature.js 76rh7ru8r8r87hr878r8rwe2 'api_key=gh645hth5e4cthgrjehtgrhet&expire=9999999999999999999&interval=28&event_id=11
```