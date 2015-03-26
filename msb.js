lib = require('./lib.js');
exports.format_csv = function(storetype, data) {
  data.forEach(function(el) {
    console.log(storetype + ";" + el.OUTLET_ID + ";" + el.LATITUDE + ";" + el.LONGITUDE + ";" + lib.decodeHtml(el.MARKETNAME));
  });
}
