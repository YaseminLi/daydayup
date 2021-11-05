const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('emitterTest', (...args) => {
  console.log('emitterTest', args);
});

emitter.emit('emitterTest', 1, 2, 3, 4);
