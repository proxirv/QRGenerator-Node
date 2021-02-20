const qrcode = require("qrcode");
const validUrl = require('valid-url');

var DbQr = function(){

  this.validate =function (text,cb) {
    if (validUrl.isUri(text)){
        console.log('Looks like an URI');
        return cb(null);
    } 
    else {
        console.log('Not a URI');
        return cb(true);
    }
  };

  this.createQr =function (text,cb) {
    try {
      qrcode.toDataURL(text).then(
        function (value) {
          console.log(value);
          return cb(null,value);
        }
      );
     } catch (err) {
      return cb(true,console.error(err));
     };
  };

};

module.exports = function(){
  var instancia = new DbQr();
  return instancia;
};