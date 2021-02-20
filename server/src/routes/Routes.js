const express = require('express');
const router = express.Router();
const RouterQr = require('./qr/qr');
const QrInstance = new RouterQr();

router.route('/qrgenerator')
    .post(
        function(req,res){
            QrInstance.postCreateQr(req,res);
        }
);

// Export API routes
module.exports = router;