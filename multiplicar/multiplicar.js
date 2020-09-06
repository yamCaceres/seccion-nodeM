//requireds
const fs = require('fs');
const colors = require('colors');

let listarTablas = (base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`========Tabla de ${base}==========`.red);
    console.log('=================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);;
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data1 = '';

        if (!Number(base)) {
            reject('El valor debe ser Numerico');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data1 += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(data1));
        fs.writeFile(`tablas/Tabla-del-${base}-al-${limite}`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Tabla-del-${base}-al-${limite}.txt`.green)

        });

    });

}

module.exports = {
    crearArchivo,
    listarTablas
}