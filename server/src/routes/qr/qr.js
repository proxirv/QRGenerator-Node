const managerQr = require('../../generateqr/generateqr');

const managerInstaceQr = new managerQr();

var RouterQr = function(){

  this.postCreateQr = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let url = req.body.url;
    managerInstaceQr.validate(
      url,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            msj:'Not a URI'
          });
        }else{
          managerInstaceQr.createQr(
            url,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  msj:'QR no Creado.'
                });
              }else{
                res.send({
                  status:'success',
                  msj:'QR Creado.',
                  data:result
                });
              }
            }
          );
        }
      }
    );
    
  };

};

module.exports = function(){
  var instancia = new RouterQr();
  return instancia;
};