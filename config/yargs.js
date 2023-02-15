const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'La base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Listar la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Número hasta donde quieres la tabla de multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    } else if (isNaN(argv.h)) {
      throw 'El límite tiene que ser un número';
    }
    return true;
  }).argv;

module.exports = argv;
