// requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('TABLA DEL ' + base)

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index} \n`.green);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(`export/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}