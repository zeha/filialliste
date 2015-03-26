exports.format_csv = function(data) {
  var k, el, storetype;
  data=data.d;
  for (k in data) {
    if (!data.hasOwnProperty(k)) continue;
    el = data[k];
    storetype = "REWE?";
    if (el.group == "BP_") storetype = "BIPA";
    if (el.group == "BA_") storetype = "BILLA";
    if (el.group == "MS_") storetype = "MERKUR";
    if (el.group == "PE_") storetype = "PENNY";
    if (el.group == "AD_") storetype = "ADEG";
    if (el.group == "SU_") storetype = "SUTTERLUETY";
    console.log(storetype + ";" + k + ";" + el.latitude + ";" + el.longitude + ";" + el.zip + " " + el.name );
  }
}
