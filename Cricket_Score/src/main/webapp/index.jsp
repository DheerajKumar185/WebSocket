<html>
    <head>
        <title>Cricket Score</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="styles.css" type="text/css"/>
        <script src="cricket.js"></script>
    </head>
    <body onload="connect();" onunload="disconnect();">
        <h1> Cricket Dashboard </h1>
        <textarea id="messages" class="panel message-area" readonly ></textarea>
        <div class="panel input-area">
            <input id="userName" class="text-field" type="text" placeholder="Name"/>
            <input id="messageInput" class="text-field" type="text" placeholder="Message" 
                   onkeydown="if (event.keyCode == 13) sendMessage();" />
            <input class="button" type="submit" value="Add" onclick="sendMessage();" />
        </div>
    </body>
</html>