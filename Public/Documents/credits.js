/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 07/11/20
*/
new explorer.window()
.title('Notepad - credits.txt')
.icon('webdows/resources/icons/note.ico')
.resize(700, 500)
.center()
.callback(function() {
	var bod = this.body;
	var win = this;
	var bar = [
		{
			title: 'File',
			context: [
				{
					title: 'New'
				}, {
					title: 'Open...'
				}, {
					title: 'Save'
				}, {}, {
					title: 'Print...',
					callback: function() {
						var text = bod.find('textarea').val();
						var pre = $('<pre></pre>').html(text).attr('style', 'margin:0;display:block;background-color:white;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1010').appendTo('#desktop.explorer');
						window.print();
						pre.remove();
					}
				}, {}, {
					title: 'Exit',
					callback: function() { win.close(); }
				}
			]
		}, {
			title: 'Edit',
			context: [
				{
					title: 'Undo'
				}, {}, {
					title: 'Cut'
				}, {
					title: 'Copy'
				}, {
					title: 'Paste'
				}, {
					title: 'Delete'
				}, {}, {
					title: 'Find...'
				}, {}, {
					title: 'Select All'
				}, {
					title: 'Time/Date'
				}
			]
		}, {
			title: 'Format',
			context: [
				{
					title: 'Word Wrap'
				}
			]
		}, {
			title: 'Help',
			context: [
				{
					title: 'About Notepad',
					callback: function() { system.loader('webdows/webver.js'); }
				}
			]
		}
	];
	this.menuBar(bar);
	bod.html('<textarea>                    𝗙𝗹𝗼𝘆𝗱𝗖𝗿𝗮𝗳𝘁 𝗪𝗲𝗯𝗢𝗦 - 𝗖𝗿𝗲𝗱𝗶𝘁𝘀.𝘁𝘅𝘁&#10;                    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾&#10;jQuery v3.1.1 (Used for Graphical user interface, functionality and a lot more)&#10;jQuery UI v1.11.4 (used for kernal.js, shell.js & other general usage throughout)&#10;jQuery UI Touch Punch 0.2.3 (allows dragging, dropping, and resizing windows)&#10;Google APIs (gathers and displays basic system & browser information)&#10;Platform.js v1.3.1 (gathers and displays basic system & browser information)&#10;&quot;Windows&quot; 9 icons - dtafalonso (used throughout the system)&#10;Desktop App Launcher - FloydCraft (custom launcher used as a temporary desktop)&#10;File Manager - elfinder (used to navigate files and folders on the system)&#10;FloydCraft Office - OnlmyOffice (provides users with a free online office suite)&#10;Block Browser - FloydCraft (used to browse the web within the web)&#10;FloydCraft eMail - RainLoop (gives access to @m.floydcraft.co.uk eMail accounts)&#10;Minecraft Tools - minecraft.tools (tool to  provide users with a large set of Minecraft Tools )&#10;FloydCraft Discord - WidgetBot (used to access the FloydCraft Discord Server)&#10;FloydCraft MapApp - DynMap (Dynamic Live map for each world on FloydCraft)&#10;Notepad - FloydCraft (A perfect remake of Microsoft\'s classic Notepad app)&#10;Paint - JSPaint (Clone of Microsoft Paint)&#10;MiniPaint - viliusle (Free Photoshop Alternative)&#10;CMD - FloydCraft (CommandPrompt that can be used to execute files and more)&#10;WA Terminal - Wasmer-terminal  (Terminal App for WebAssembly)&#10;Spam Terminal - genact (a nonsense activity generator)&#10;Terminal with SSH - cb.vu (Terminal App with SSH Support and more)&#10;Registry Editor - FloydCraft (Tool to view & edit FC WebOS\'es Registry)&#10;Classic Calculator - FloydCraft JavaScript clone of Microsoft\'s classic calculator)&#10;UWP Calculator - Uno (WebAemembly compilation of Microsofts UWP Calculator app)&#10;Youtube APP - JSYoutubeLite (JavaScript YouTube Application)&#10;Winamp - WebAmp (Re-make of the classic WinAmp Media Player from XP)&#10;Audio Mass -  pkalogiros (Copy of Audacity used to edit audio files)&#10;Google Earth - Google (Google Earth Client for satellite imagery)&#10;Webasm Studio -  wasdk(App Development Utility for C, C++ and Rust)&#10;Minecraft Classic - Microsoft (Minecraft Classic full game with Multiplayer)&#10;Quake 3 - Quake3JS (Quake3 game engine remade in JavaScript)&#10;Classic Pacman - JSPacMan (Classic Packan Arcade game in javascript)&#10;Fallout 76 Dynamic Map - Map76 (A datamined map of everything in Fallout 76)&#10;Text to Speech - addcast (Text to Speech Utility with avatars)</textarea>');
	bod.find('textarea').attr('style', 'overflow:scroll;top:0px;left:0px;position:absolute;border:0;margin:0;width:100%;height:100%;margin:0;padding:0;resize:none;');
});