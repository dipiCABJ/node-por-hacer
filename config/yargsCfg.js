const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como comletado o Pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza a estado completado una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}