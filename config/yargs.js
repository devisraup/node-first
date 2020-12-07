const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const colors = require('colors');

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas de multiplicar', params)
    .command('crear', 'Crea un fichero con la tabla', params)
    .help()
    .argv

module.exports = {
    argv: argv
}