const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(colors.rainbow('====================='));
      console.log(
        colors.bold('   Tabla del:'.rainbow),
        colors.italic.green(base)
      );
      console.log(colors.rainbow('====================='));
      console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

    return `Tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
