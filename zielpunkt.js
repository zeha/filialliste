lib = require('./lib.js');
exports.format_csv = function(data) {
  data.forEach(function(el) {
    console.log("Zielpunkt|" + el.id + "|" + el.posn[0] + "|" + el.posn[1] + "||" + el.plz + "||" + lib.decodeHtml(el.navi) + '||');
  });
}
