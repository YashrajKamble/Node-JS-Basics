const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('please turn off the motor');
    setTimeout(() => {
        console.log("please turn off the motor1, its gentle remainder")
    }, 2000)
});
console.log("the script is running")
myEmitter.emit('WaterFull');
console.log("the script is still running")
