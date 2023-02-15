const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.underline, 'creado'))
  .catch((error) => console.log(error));

//Sin yargs
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
