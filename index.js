"use strict";

var path = require("path"),
    util = require("util");

var url = require("url");

module.exports = function uriJoin() {
  if(arguments.length == 0) { return null; }
  if(arguments.length == 1) { return arguments[0]; }
  var head = arguments[0] + '';
  var tail = [];
  for(var i = 1; i < arguments.length; i += 1) {
    tail.push(arguments[i] + '');
  }

  var urlParsed = url.parse(head);
  if(urlParsed.protocol) {
    var joined = path.join.apply(null, [urlParsed.hostname, urlParsed.path].concat(tail));
    return util.format("%s//%s", urlParsed.protocol, joined);
  } else {
    return path.join.apply(null, [urlParsed.path].concat(tail));
  }
};
