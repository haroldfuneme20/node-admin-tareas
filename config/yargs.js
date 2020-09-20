const { boolean } = require('yargs');

const descripcion = {

}
const completado = {

}

const argv = require('yargs')
    .command('crear', 'crea una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'descripción de la tarea por hacer'
        }
    })
    .command('listar', 'listar las tareas', {
        descripcion: {
            alias: 'l',
            desc: 'descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'descripción de la tarea por hacer'
        },
        completado: {
            type: 'boolean',
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borrar una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'descripción de la tarea por hacer'
        },
    })
    .help()
    .argv;

module.exports = {
    argv
}