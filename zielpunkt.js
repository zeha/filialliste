lib = require('./lib.js');
exports.format_csv = function(data) {
  data.forEach(function(el) {
    console.log("ZIELPUNKT;" + el.id + ";" + el.posn[0] + ";" + el.posn[1] + ";" + lib.decodeHtml(el.navi));
  });
}
