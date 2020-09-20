const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descrip);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        console.log('Mostrar todas las tareas');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.completado, argv.descripcion)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);
        break;
    default:
        console.log('comando no es reconocido ');
        break;
}