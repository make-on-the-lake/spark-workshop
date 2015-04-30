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
      $devices.text(jsonify(devices));

      devices.forEach(function(device) {
        if (!device.connected) return;
        req('devices/' + device.name).then(function(res) {
          var vars = res.variables;
          $vars.text(jsonify(vars));
          var varNames = Object.keys(vars);
          var promises = [];
          for (var i in varNames) {
            var varName = varNames[i];
            var def     = $.Deferred()
            req('devices/' + device.name + '/' + varName).then(function(res) {
              def.resolve(res);
            });
            promises.push(def.promise());
          }
          $.when.apply($, promises).then(function() {
            var varVals = {};
            for (var i = 0; i < arguments.length; i++) {
              var cur = arguments[i];
              varVals[cur.name] = cur.result;
            }
            $varVals.text(jsonify(varVals));
          });
        });
      });
    });

  }, DEBUGGING_INTERVAL);

})();
