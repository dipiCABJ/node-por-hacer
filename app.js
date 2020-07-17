const argv = require('./config/yargsCfg.js').argv;
const task = require('./Task/task.js');
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tsk = task.Crear(argv.descripcion);
        console.log(tsk);
        break;

    case 'listar':
        console.log(colors.green('======Listado de Tareas======'));
        task.GetListado().forEach(item => {
            console.log(item.descripcion);
            console.log(item.completado);

        })
        console.log(colors.green('============================='));
        break;

    case 'actualizar':
        let actualizado = task.Actualizar(argv.d, argv.c);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = task.Borrar(argv.d);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}