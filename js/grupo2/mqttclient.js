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

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue").innerText = dataCPU;
        document.getElementById("almcValue").innerText = dataAlmc;
        document.getElementById("tptValue").innerText = dataTpt;
        document.getElementById("cacheValue").innerText = dataCache;
        
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

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue2").innerText = dataCPU2;
        document.getElementById("almcValue2").innerText = dataAlmc2;
        document.getElementById("tptValue2").innerText = dataTpt2;
        document.getElementById("cacheValue2").innerText = dataCache2;
        
    }
	if (destination === "david") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataCPU3 = dataFormat.CPU3;
		let dataAlmc3 = dataFormat.Alc3;
		let dataTpt3 = dataFormat.Tpt13;
		let dataCache3 = dataFormat.Cache3;
        
        //info pc
        let dateCPU3 = dataCPU3 + ' %';
        document.getElementById('cpuValue3').innerText = dateCPU3;
		//RAM
		let dateAlmc3 = dataAlmc3.toLocaleString() + ' %';
		document.getElementById('almcValue3').innerText = dateAlmc3;
		//Dico en uso
		let dateTpt3 = dataTpt3 + ' %';
		document.getElementById('tptValue3').innerText = dateTpt3;
		//Cache
		let dateCache3 = dataCache3.toLocaleString() + ' %';
		document.getElementById('cacheValue3').innerText = dateCache3;

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue3").innerText = dataCPU3;
        document.getElementById("almcValue3").innerText = dataAlmc3;
        document.getElementById("tptValue3").innerText = dataTpt3;
        document.getElementById("cacheValue3").innerText = dataCache3;

    }
	if (destination === "ivan") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataCPU4 = dataFormat.CPU4;
		let dataAlmc4 = dataFormat.Alc4;
		let dataTpt4 = dataFormat.Tpt4;
		let dataCache4 = dataFormat.Cache4;
        
        //info pc
        let dateCPU4 = dataCPU4 + ' %';
        document.getElementById('cpuValue4').innerText = dateCPU4;
		//RAM
		let dateAlmc4 = dataAlmc4.toLocaleString() + ' %';
		document.getElementById('almcValue4').innerText = dateAlmc4;
		//Dico en uso
		let dateTpt4 = dataTpt4 + ' %';
		document.getElementById('tptValue4').innerText = dateTpt4;
		//Cache
		let dateCache4 = dataCache4.toLocaleString() + ' %';
		document.getElementById('cacheValue4').innerText = dateCache4;

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue4").innerText = dataCPU4;
        document.getElementById("almcValue4").innerText = dataAlmc4;
        document.getElementById("tptValue4").innerText = dataTpt4;
        document.getElementById("cacheValue4").innerText = dataCache4;
        
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