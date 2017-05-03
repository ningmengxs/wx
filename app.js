/**
 * Created by Admin on 2017/5/3.
 */
'use strict'

var Koa = require('koa');

var sha1 = require('sha1');
var config = {
    wechat:{
        appID:'wxe4b6c8ac01e904f2',
        appSecret:'93849dc3f83d9611d130c18cd21744c2',
        token: 'ningmengxianshengbusuan'

    }
};

var app = new Koa();

app.use(function *(next) {
    console.log(this.query);

    var token = config.wechat.token;
    var signature = this.query.signature;
    var nonce = this.query.nonce;
    var timestamp = this.query.timestamp;
    var ecostr = this.query.ecostr;

    var str = [token,tomestamp,nonce].sort().join('');
    var sha = sha1(str);

    if(sha === signature) {
        this.body = ecostr + ''
    }

})

app.listen(1234);
console.log('Listening')