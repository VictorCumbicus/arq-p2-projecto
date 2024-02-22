/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "0.tcp.sa.ngrok.io";
var wsbroker = "broker.hivemq.com";
//var wsbroker = "localhost";

//var wsport = 14792; // port for above
var wsport = 1883; // port for above
var client = new Paho.MQTT.Client(
	wsbroker,
	//Number(wsport),
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/


client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "victor") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataCPU = dataFormat.CPU;
		let dataAlmc = dataFormat.Alc;
		let dataTpt = dataFormat.Tpt;
		let dataCache = dataFormat.Cache;
        
        //info pc
        let dateCPU = dataCPU + ' %';
        document.getElementById('cpuValue').innerText = dateCPU;
		//RAM
		let dateAlmc = dataAlmc.toLocaleString() + ' %';
		document.getElementById('almcValue').innerText = dateAlmc;
		//Dico en uso
		let dateTpt = dataTpt + ' %';
		document.getElementById('tptValue').innerText = dateTpt;
		//Cache
		let dateCache = dataCache.toLocaleString() + ' %';
		document.getElementById('cacheValue').innerText = dateCache;


        // Calcular la diferencia con respecto al valor anterior
      

        // Calcular el porcentaje de cambio
        

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue").innerText = dataCPU;
        document.getElementById("almcValue").innerText = dataAlmc;
        document.getElementById("tptValue").innerText = dataTpt;
        document.getElementById("cacheValue").innerText = dataCache;

        // Actualizar los porcentajes en la página
       
        // Actualizar los valores anteriores con los nuevos valores
        

        // Cargar datos CPU, Memoria y Almacenamiento en las gráficas
        
    }
};

// Función para calcular el porcentaje de cambio
function calculatePercentage(diff, prevValue) {
    if (prevValue === 0) {
        return "0"; // Si el valor anterior es cero, el porcentaje de cambio es cero
    }

    let percentage = ((diff / prevValue) * 100).toFixed(2);
    if (isFinite(percentage)) {
        return percentage >= 0 ? "+" + percentage : percentage;
    } else {
        return "0";
    }
}
// Función para obtener el porcentaje coloreado
function getColoredPercentage(percentage) {
    if (parseFloat(percentage) > 0) {
        return '<span style="color: green;">' + percentage + '%</span>';
    } else if (parseFloat(percentage) < 0) {
        return '<span style="color: red;">' + percentage + '%</span>';
    } else {
        return percentage + '%';
    }
}

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("victor", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};


function testMqtt(){
	console.log("hi");
}
function initMqtt() {
	client.connect(options);
}