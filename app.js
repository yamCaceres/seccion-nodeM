const argv = require('./config/yargs').argv;
const colors = require('colors');




const { crearArchivo, listarTablas } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTablas(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Crado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no Reconocido');

}

//let base = 'ab';

//console.log(process.argv);

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]