const fso = require('fs');

let taskList = [];

const GuardarDB = () => {
    let data = JSON.stringify(taskList);
    fso.writeFile('./DB/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar la informacion', err);
        //else
        //    console.log('Informacion guardada exitosamente!');
    });
}

const CargarDB = () => {
    try {
        taskList = require('../DB/data.json');
    } catch (err) {
        taskList = [];
    }
}

const Crear = (descripcion) => {
    CargarDB();
    let task = {
        descripcion,
        completado: false
    }

    taskList.push(task);
    GuardarDB();
    return task;
}

const GetListado = () => {
    CargarDB();
    return taskList;
}

const Actualizar = (description, completado = true) => {
    CargarDB();
    let idx = taskList.findIndex(task => task.descripcion === description)
    if (idx >= 0) {
        if (completado === 'true') {
            taskList[idx].completado = true;
        } else {
            taskList[idx].completado = false;
        }
        GuardarDB();
        return true;
    } else {
        return false;
    }
}

const Borrar = (description) => {
    CargarDB();
    // antes fue taskList = taskList.filter(...)
    let newtaskList = taskList.filter(item => {
        return !(item.descripcion === description);
    })
    if (newtaskList.length === taskList.length) {
        return false
    } else {
        taskList = newtaskList;
        GuardarDB();
        return true;
    }
}

module.exports = {
    Crear,
    GetListado,
    Actualizar,
    Borrar
}