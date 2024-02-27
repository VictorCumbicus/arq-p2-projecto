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
        let dataCPU = dataFormat.CPU1;
		let dataAlmc = dataFormat.Alc1;
		let dataTpt = dataFormat.Tpt1;
		let dataCache = dataFormat.Cache1;
        
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
    
    if (destination === "kevin") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataCPU2 = dataFormat.CPU2;
		let dataAlmc2 = dataFormat.Alc2;
		let dataTpt2 = dataFormat.Tpt2;
		let dataCache2 = dataFormat.Cache2;
        
        //info pc
        let dateCPU2 = dataCPU2 + ' %';
        document.getElementById('cpuValue2').innerText = dateCPU2;
		//RAM
		let dateAlmc2 = dataAlmc2.toLocaleString() + ' %';
		document.getElementById('almcValue2').innerText = dateAlmc2;
		//Dico en uso
		let dateTpt2 = dataTpt2 + ' %';
		document.getElementById('tptValue2').innerText = dateTpt2;
		//Cache
		let dateCache2 = dataCache2.toLocaleString() + ' %';
		document.getElementById('cacheValue2').innerText = dateCache2;


        // Calcular la diferencia con respecto al valor anterior
      

        // Calcular el porcentaje de cambio
        

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue2").innerText = dataCPU2;
        document.getElementById("almcValue2").innerText = dataAlmc2;
        document.getElementById("tptValue2").innerText = dataTpt2;
        document.getElementById("cacheValue2").innerText = dataCache2;

        // Actualizar los porcentajes en la página
       
        // Actualizar los valores anteriores con los nuevos valores
        

        // Cargar datos CPU, Memoria y Almacenamiento en las gráficas
        
    }
};



var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("victor", { qos: 1 });
        console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("kevin", { qos: 1 });
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