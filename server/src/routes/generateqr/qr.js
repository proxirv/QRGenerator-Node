const qrcode = require("qrcode");

const create = async text => {
    try {
     return await qrcode.toDataURL(text);
    } catch (err) {
     return console.error(err);
    };
};

var RouterQr = function(){

  this.postCreateQr = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let url = req.body.url;
    create(url)
      .then(val =>
        res.send({
          status:'success',
          msj:'QR creado.',
          data:val
        })
      )
      .catch(function(error){ 
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR");
        console.log(errorCode, errorMessage);
        res.send({
          status:'error',
          msj:'QR no creado.'
        });
      }
    );
  };

};

module.exports = function(){
  var instancia = new RouterQr();
  return instancia;
};