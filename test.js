var assert = require("assert"),
    util = require("util");

var uriJoin = require("./index.js");

test("uriJoin", function() {
  var testCases = [
    { inputs: ["/path/to", "something"], expected: "/path/to/something" },
    { inputs: ["s3://has/a/protocol", "/and", "still", 1, "works"], expected: "s3://has/a/protocol/and/still/1/works" },
    { inputs: ["peanut", "butter"], expected: "peanut/butter" },
    { inputs: ["http://something.com", "some", "other/thing"], expected: "http://something.com/some/other/thing" },
  ];

  for(var i = 0; i < testCases.length; i += 1) {
    var testCase = testCases[i];
    var result = uriJoin.apply(null, testCase.inputs);
    assert.equal(result, testCase.expected, util.format("Test case failed: uriJoin(\"%s\") = \"%s\", which != \"%s\"", testCase.inputs + '', result, testCase.expected));
  }
});
