const { plus100, noop } = process.dlopen({ exports: {} }, require('path').resolve('./hello.node'))

console.log(plus100(1))
