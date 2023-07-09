"use strict";

const rfc = require("node-rfc");
// const rfc = require("C:/Users/rarunbalaji/AppData/Roaming/npm/node_modules/node-rfc");

var connectionParams = {
  ashost: "172.26.0.121",
  sysnr: "02",
  client: "400",
  user: "VINITH",
  Passwd: "Kaar@321",
  lang: "EN",
};

var client1 = new rfc.Client(connectionParams);
// client1.connect();

client1.connect(function (err1) {
  if (err1) {
    console.log("ERROR1");
    console.log(err1);
  } else {
    console.log("Connecting");
    client1.invoke("RFC_SYSTEM_INFO", {}, function (err2, res2) {
      if (res2) {
        console.log("RESULTS");
        console.log(res2);
      } else {
        console.log("ERROR2");
        console.log(err2);
      }
    });
  }
});

console.log("All libs loaded.");
