// Websocket Endpoint url
/*var host = window.location.host;
 var path = window.location.pathname;
 var webCtx = path.substring(0, path.indexOf('/', 1));
 var endPointURL = "ws://" + window.location.host + webCtx + "/cricketScore";*/
var socket = new WebSocket(
		"ws://MSPL-08-09-D158:8080/Cricket_Score/cricketScore");

/* var cricketClient = null; */

function connect() {
	/* cricketClient = new WebSocket(endPointURL); */
	socket.onmessage = function(event) {
		var messagesArea = document.getElementById("messages");
		var jsonObj = JSON.parse(event.data);
		var message = jsonObj.user + ": " + jsonObj.message + "\r\n";
		messagesArea.value = messagesArea.value + message;
		messagesArea.scrollTop = messagesArea.scrollHeight;
	};
}

function disconnect() {
	socket.close();
}

function sendMessage() {
	var user = document.getElementById("userName").value.trim();
	if (user === "")
		alert("Please enter your name!");

	var inputElement = document.getElementById("messageInput");
	var message = inputElement.value.trim();
	if (message !== "") {
		var jsonObj = {
			"user" : user,
			"message" : message
		};
		socket.send(JSON.stringify(jsonObj));
		inputElement.value = "";
	}
	inputElement.focus();
}