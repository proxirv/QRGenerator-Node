const express = require('express');
const router = express.Router();
const RouterQr = require('./generateqr/qr.js');
const QrInstance = new RouterQr();

router.route('/test')

router.route('/generateqr')
    .post(
        function(req,res){
            QrInstance.postCreateQr(req,res);
        }
);

// Export API routes
module.exports = router;