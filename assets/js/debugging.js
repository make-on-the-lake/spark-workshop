(function() {

  var DEBUGGING_INTERVAL = 3000; // one second

  var jsonify = function(input) {
    return JSON.stringify(input, undefined, 2);
  };

  var $apiKeyInput = $('#api-key');
  var $debugOutput = $('#debug-output');

  var $devices = $('#debug-devices');
  var $vars    = $('#debug-vars');
  var $varVals = $('#debug-var-vals');

  setInterval(function() {
    var apiKey = $apiKeyInput.val();

    if (apiKey == '') return;

    var req = function(type) {
      return $.get('https://api.spark.io/v1/' + type, { access_token: apiKey });
    };

    req('devices').then(function(res) {
      var devices = [];
      res.forEach(function(device) {
        devices.push({ name: device.name, connected: device.connected });
      });
      $devices.text(jsonify(devices, undefined, 2));

      devices.forEach(function(device) {
        if (!device.connected) return;
        req('devices/' + device.name).then(function(res) {
          // TODO
          //  get names of vars here
          //  then get the vals of those vars
        });
      });
    });

  }, DEBUGGING_INTERVAL);

})();
