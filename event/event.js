var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.on('myEvent',function(abc) {
    console.log('asfadfadfad' + abc);
});

life.emit('myEvent','cccccc');