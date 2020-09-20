const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./DataBase/data.json', data, (err) => {
        if (err) {
            rejects(err)
        } else {
            resolve(`El archivo fue guardado exitosamente`)
        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DataBase/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descrip) => {

    cargarDB();

    let porHacer = {
        descrip,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (completado, descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descrip === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descrip !== descripcion;
    });

    if (nuevoListado === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}