/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 12/11/20
*/
//Create a new window object
new explorer.window()
.title('Block Browser - FloydCraft Rules') //set the title
.resize(720, 500) //set the dimentions
.icon('programs/Rules/rules.png') //set the icon
.toggleMax() //make the window maximized
.callback(function() {
	//Variable rename for convienience and access later on.
	var win = this;
	
	//Variable rename for convienience and access later on.
	var bod = this.body;
	
	//Function to change the iframe to the givin URL.
	function changeUrl(url) {
		//Change the iframe
		bod.find('input.i1').val(url);
		
		//Change the window title
		win.title('Block Browser - '+url)
	};
	
	//Create the starting HTML
	bod.html('<button class="b1"><img src="https://i.imgur.com/2TjTMxE.png" draggable="false" width="20" height="22"/><button class="b7"><img src="https://i.imgur.com/sfO4g4a.png" draggable="false" width="21" height="23"/><button class="b6"><img src="https://i.imgur.com/NANDJf8.png" draggable="false" width="20" height="22"/></button><button class="b2"><img src="https://i.imgur.com/Af5inxU.png" draggable="false" width="20" height="22"/><button class="b4"><img src="https://i.imgur.com/m1ur3mh.png" draggable="false" width="20" height="22"/></button><button class="b5"><img src="https://i.imgur.com/ptqaUfE.png" draggable="false" width="20" height="22"/></button></button><input class="i1"></input><button class="b3"><img src="https://i.imgur.com/YiWAXpO.png" draggable="false" height="22"/></div></button><iframe src="http://cdn.floydcraft.co.uk/basic-server-rules/" class="if1"></iframe>');
	
	//Give the button its position via the style (CSS) and piggyback a click event if it is clicked.
	bod.find('button.b1').attr('style', 'position:absolute;left:1px;top:1px;width:32px;height:32px;').click(function() {
		//If button is clicked find the iframe and go back 1 page in its history.
		bod.find('iframe.if1')[0].contentWindow.history.go(-1);
	});
	
	//Give the button its position via the style (CSS) and piggyback a click event if it is clicked.
	bod.find('button.b2').attr('style', 'position:absolute;left:34px;top:1px;width:32px;height:32px;').click(function() {
		//If button is clicked find the iframe and go forward 1 page in its history.
		bod.find('iframe.if1')[0].contentWindow.history.go(1);
	});
	
	//Give the button its position via the style (CSS) and piggyback a click event if it is clicked.
	bod.find('button.b4').attr('style', 'position:absolute;left :67px;top:1px;width:32px;height:32px;').click(function() {
		//If button is clicked find the iframe and go forward 1 page in its history.
		bod.find('iframe.if1')[0].contentWindow.location.reload(true);
	});
	
	//Give the button its position via the style (CSS) and piggyback a click event if it is clicked.
	bod.find('button.b5').attr('style', 'position:absolute;left :100px;top:1px;width:32px;height:32px;').click(function() {
		//Set Homepage and go to it.
		var url = 'http://bing.com';
		bod.find('iframe.if1').attr('src', url);
	});
	
	//FC Site Button
	bod.find('button.b6').attr('style', 'position:absolute;right :34px;top:1px;width:32px;height:32px;').click(function() {
		//Load FC Site and goto it on click.
		var url = 'http://cdn.floydcraft.co.uk';
		bod.find('iframe.if1').attr('src', url);
	});
	
	//Docs Button.
	bod.find('button.b7').attr('style', 'position:absolute;right :1px;top:1px;width:32px;height:32px;').click(function() {
		//Load FC WebOS Docs and goto it on click.
		var url = 'http://docs.webos.floydcraft.co.uk';
		bod.find('iframe.if1').attr('src', url);
	});
	
	//Give the third button its position and click event.
	bod.find('button.b3').attr('style', 'position:absolute;right:67px;top:1px;width:52px;height:32px;').click(function() {
		//On click get the text inside the input form
		var url = bod.find('input.i1').val();
		
		//Put the text (URL) into the iframe
		bod.find('iframe.if1').attr('src', url);
		
		//Start the tracker service in case it has stopped in the past.
		startTracker();
	});
	
	//Find the input form and give it its style and position. And keypress event
	bod.find('input.i1').attr('style', 'position:absolute;top:6px;left:138px;width:calc(100% - 271px);').keypress(function(event) {
		//If the enter key is pressed inside the input tag
		if(event.keyCode == 13){
			//Initiate a click event for button 3 to execute its click event code (see line 46)
			bod.find('button.b3').click();
		}
	});
	
	//Find iframe and set its style and position
	bod.find('iframe.if1').attr('style', 'position:absolute;top:34px;left:0px;width:100%;height:calc(100% - 34px);border:none;background-color:white;');
	
	//Set some variables that are accesible outside of the service
	var url1 = null;
	var url2 = null;
	
	//Create function that starts an interval to test if the url inside the iframe has changed
	function startTracker() {
		//Set the placeholder in the input
		bod.find('input.i1').attr('placeholder', 'http(s)://');
		
		//Create an interval that repeats every 100 milliseconds
		var interval = setInterval(function() {
			//Set url2 to url1
			url2 = url1;
			
			try {
				//try to set url1 to the actual current url
				url1 = bod.find('iframe.if1')[0].contentDocument.URL;
			} catch(e) {
				//if failed to get url stop the interval
				clearInterval(interval);
				
				//Set the input to blank
				bod.find('input.i1').val('');
				
				//Set the window title
				win.title('Block Browser - FloydCraft Rules');
				
				//Change the input placeholder
				bod.find('input.i1').attr('placeholder', 'This Browser has been optimized to best display the FloydCraft Rules.');
			}
			
			//If url1 has changed since last time change the input text and window title
			if(url1 !== url2) {
				changeUrl(url1);
			}
			
		}, 100);
	};
	
	//Start the tracker service
	startTracker();
});