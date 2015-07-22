exports.format_csv = function(data) {
  var k, el, storetype, extra, phone, times;
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
    extra = el.jsonPayload[1].split("|");
    phone = (extra[0] || '').replace(/^p:/, '');
    times = (extra[1] || '').replace(/^t:/, '').replace(/\u003cbr\u003e/g, ', ');
    console.log(storetype + "|" + k + "|" + el.latitude + "|" + el.longitude + "|" + el.region + "|" + el.zip + "|" + el.city + "|" + el.address1 + " " + el.address2 + "|" + phone + "|" + times);
  }
}
