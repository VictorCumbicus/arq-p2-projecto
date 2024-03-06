const config = {
    apiKey: "AIzaSyBh0IiiXyAUgWPVeIXYyBxYHkAjPKdouG8",
    authDomain: "data-base-arc-grupo4.firebaseapp.com",
    databaseURL: "https://data-base-arc-grupo4-default-rtdb.firebaseio.com",
    projectId: "data-base-arc-grupo4",
    storageBucket: "data-base-arc-grupo4.appspot.com",
    messagingSenderId: "31642498289",
    appId: "1:31642498289:web:6bf1f3c60b60e6bddc2550",
    measurementId: "G-MW07RE2LXB"
};

firebase.initializeApp(config);
var db = firebase.database();
var coleccionProductos = db.ref().child("datoscompuG4");
var dataSet1 = [];
var table1 = $("#tablaProductos").DataTable({
    pageLength: 20,
    lengthMenu: [
        [6, 10, 20, -1],
        [6, 10, 20, "Todos"],
    ],
    data: dataSet1,
    columnDefs: [
        {
            targets: [0],
            visible: true,
        },
    ],
});

function actualizarDatosTabla1() {
    coleccionProductos.limitToLast(10).once("value", (snapshot) => {
        dataSet1 = [];
        snapshot.forEach((childSnapshot) => {
            var Id = childSnapshot.child("id1").val();
            var Fecha = childSnapshot.child("Hora1").val();
            var CPU = childSnapshot.child("CPU1").val();
            var RAM = childSnapshot.child("Alc1").val();
            var Cache = childSnapshot.child("Cache1").val();
            var CD = childSnapshot.child("Tpt1").val();

            dataSet1.push([Id, Fecha, CPU, RAM, Cache, CD]);
        });

        table1.clear().rows.add(dataSet1).draw();
    });
}

setInterval(actualizarDatosTabla1, 30000);

var dataSet2 = [];
var table2 = $("#tablaProductos1").DataTable({
    pageLength: 20,
    lengthMenu: [
        [6, 10, 20, -1],
        [6, 10, 20, "Todos"],
    ],
    data: dataSet2,
    columnDefs: [
        {
            targets: [0],
            visible: true,
        },
    ],
});

function actualizarDatosTabla2() {
    coleccionProductos.limitToLast(10).once("value", (snapshot) => {
        dataSet2 = [];
        snapshot.forEach((childSnapshot) => {
            var Id = childSnapshot.child("id2").val();
            var Fecha = childSnapshot.child("Hora2").val();
            var CPU = childSnapshot.child("CPU2").val();
            var RAM = childSnapshot.child("Alc2").val();
            var Cache = childSnapshot.child("Cache2").val();
            var CD = childSnapshot.child("Tpt2").val();

            dataSet2.push([Id, Fecha, CPU, RAM, Cache, CD]);
        });

        table2.clear().rows.add(dataSet2).draw();
    });
}

setInterval(actualizarDatosTabla2, 30000);
var dataSet3 = [];
var table3 = $("#tablaProductos2").DataTable({
    pageLength: 20,
    lengthMenu: [
        [6, 10, 20, -1],
        [6, 10, 20, "Todos"],
    ],
    data: dataSet3,
    columnDefs: [
        {
            targets: [0],
            visible: true,
        },
    ],
});

function actualizarDatosTabla3() {
    var coleccionProductos3 = db.ref().child("datoscompuG4").child("tabla3");
    coleccionProductos3.limitToLast(10).once("value", (snapshot) => {
        dataSet3 = [];
        snapshot.forEach((childSnapshot) => {
            var Id = childSnapshot.child("id3").val();
            var Fecha = childSnapshot.child("Hora3").val();
            var CPU = childSnapshot.child("CPU3").val();
            var RAM = childSnapshot.child("Alc3").val();
            var Cache = childSnapshot.child("Cache3").val();
            var CD = childSnapshot.child("Tpt3").val();

            dataSet3.push([Id, Fecha, CPU, RAM, Cache, CD]);
        });

        table3.clear().rows.add(dataSet3).draw();
    });
}

setInterval(actualizarDatosTabla3, 30000);

var dataSet4 = [];
var table4 = $("#tablaProductos3").DataTable({
    pageLength: 20,
    lengthMenu: [
        [6, 10, 20, -1],
        [6, 10, 20, "Todos"],
    ],
    data: dataSet4,
    columnDefs: [
        {
            targets: [0],
            visible: true,
        },
    ],
});

function actualizarDatosTabla4() {
    var coleccionProductos4 = db.ref().child("datoscompuG4").child("tabla4");
    coleccionProductos4.limitToLast(10).once("value", (snapshot) => {
        dataSet4 = [];
        snapshot.forEach((childSnapshot) => {
            var Id = childSnapshot.child("id4").val();
            var Fecha = childSnapshot.child("Hora4").val();
            var CPU = childSnapshot.child("CPU4").val();
            var RAM = childSnapshot.child("Alc4").val();
            var Cache = childSnapshot.child("Cache4").val();
            var CD = childSnapshot.child("Tpt4").val();

            dataSet4.push([Id, Fecha, CPU, RAM, Cache, CD]);
        });

        table4.clear().rows.add(dataSet4).draw();
    });
}

setInterval(actualizarDatosTabla4, 30000);
