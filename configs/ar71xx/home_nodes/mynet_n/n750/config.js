

module.exports = function(u, hwInfo, callback) {

  // this config is only for Western Digital My Net N750 routers
  if(hwInfo.model != 'WD My Net N750') {
    return callback(null, null);
  }

  var conf = {
      streams_2g: 2,
      streams_5g: 3,
  };

  callback(null, conf);
};
