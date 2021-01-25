/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 06/11/20
*/
new explorer.window()
.title('𝘿𝙚𝙨𝙠𝙩𝙤𝙥 𝘼𝙥𝙥 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧')
.resize(602, 513)
.icon('programs/Fence/icon.png')
.callback(function() {
	var butts = [
		{
			text: 'Welcome to WebOS',
			icon: 'webdows/resources/icons/logo.png',
			callback: function() {
				system.loader('webdows/welcome.js');
			}
		}, {
			text: 'FC-WebOS Infomation',
			icon: 'webdows/resources/icons/info.ico',
			callback: function() {
				system.loader('webdows/webver.js');
			}
		}, {
			text: 'File Manager',
			icon: 'programs/FileManager/fman.png',
			callback: function() {
				system.loader('programs/FileManager/fman.js');
			}
		}, {
			text: 'FloydCraft Office',
			icon: 'programs/FCoffice/office.ico',
			callback: function() {
				system.loader('programs/FCoffice/Launcher.js');
			}
		}, {
			text: 'FloydCraft Powerpoint',
			icon: 'programs/FCoffice/powerpoint.ico',
			callback: function() {
				system.loader('programs/FCoffice/powerpoint.js');
			}
		}, {
			text: 'FloydCraft Excel',
			icon: 'programs/FCoffice/excel.ico',
			callback: function() {
				system.loader('programs/FCoffice/excel.js');
			}
		}, {
			text: 'FloydCraft Word',
			icon: 'programs/FCoffice/word.ico',
			callback: function() {
				system.loader('programs/FCoffice/word.js');
			}
		}, {
			text: 'MS VS Code',
			icon: 'programs/FCoffice/code.png',
			callback: function() {
				system.loader('programs/FCoffice/code.js');
			}
		}, {
			text: 'Block Browser',
			icon: 'programs/Web Explorer/1.png',
			callback: function() {
				system.loader('programs/Web Explorer/we.js');
			}
		}, {
			text: 'FloydCraft eMail',
			icon: 'programs/Email/email.ico',
			callback: function() {
				system.loader('programs/Email/email.js');
			}
		}, {
			text: 'FloydCraft Discord',
			icon: 'programs/Discord/discord.ico',
			callback: function() {
				system.loader('programs/Discord/discord.js');
			}
		}, {
			text: 'Minecraft Toolʼs',
			icon: 'programs/FCtools/icons/FCTools.png',
			callback: function() {
				system.loader('programs/FCtools/Launcher.js');
			}
		}, {
			text: 'FloydCraft Map App',
			icon: 'programs/MapApp/FCMaps.ico',
			callback: function() {
				system.loader('programs/MapApp/mapapp.js');
			}
		}, {
			text: 'Microsoft Notepad',
			icon: 'webdows/resources/icons/note.ico',
			callback: function() {
				system.loader('webdows/notepad.js');
			}
		}, {
			text: 'Microsoft Paint',
			icon: 'programs/paint/paint.ico',
			callback: function() {
				system.loader('programs/paint/paint.js');
			}
		}, {
			text: 'PhotoPea PhotoShop',
			icon: 'programs/Photopea/photopea.png',
			callback: function() {
				system.loader('programs/Photopea/photopeaLauncher.js');
			}
		}, {
			text: 'MiniPaint Photo Edit',
			icon: 'programs/minipaint/mpaint.png',
			callback: function() {
				system.loader('programs/minipaint/mpaint.js');
			}
		}, {
			text: 'Command Prompt',
			icon: 'webdows/resources/icons/scre.ico',
			callback: function() {
				system.loader('webdows/cmd.js');
			}
		}, {
			text: 'WA Termianl',
			icon: 'programs/Terminal/term.ico',
			callback: function() {
				system.loader('programs/Terminal/term.js');
			}
		}, {
			text: 'Spam Terminal',
			icon: 'programs/genact/term.png',
			callback: function() {
				system.loader('programs/genact/term.js');
			}
		}, {
			text: 'Terminal with SSH',
			icon: 'programs/YATerm/term.png',
			callback: function() {
				system.loader('programs/YATerm/term.js');
			}
		}, {
			text: 'Registry Editor',
			icon: 'webdows/resources/icons/rege.ico',
			callback: function() {
				system.loader('webdows/regedit.js');
			}
		}, {
			text: 'Classic Calculator',
			icon: 'webdows/resources/icons/calc.ico',
			callback: function() {
				system.loader('webdows/calc.js');
			}
		}, {
			text: 'UWP Calculator',
			icon: 'programs/UWPcalc/UWPcalc.png',
			callback: function() {
				system.loader('programs/UWPcalc/UWPcalc.js');
			}
		}, {
			text: 'YouTube App',
			icon: 'programs/YouTube/logo.png',
			callback: function() {
				system.loader('programs/YouTube/ytube.js');
			}
		}, {
			text: 'Winamp Player',
			icon: 'programs/winamp/winamp.ico',
			callback: function() {
				system.loader('programs/winamp/winamp.js');
			}
		}, {
			text: 'Audio Mass',
			icon: 'programs/audiomass/amass.png',
			callback: function() {
				system.loader('programs/audiomass/amass.js');
			}
		}, {
			text: 'Google Earth',
			icon: 'programs/Google/Earth.png',
			callback: function() {
				system.loader('programs/Google/Earth.js');
			}
		}, {
			text: 'Webasm Studio',
			icon: 'programs/Webassembly/Studio.png',
			callback: function() {
				system.loader('programs/Webassembly/Studio.js');
			}
		}, {
			text: 'Sculpt Studio',
			icon: 'programs/SculptGL/SculptGL.png',
			callback: function() {
				system.loader('programs/SculptGL/SculptGL.js');
			}
		}, {
			text: 'Circuit Simulator',
			icon: 'programs/CircuitSimulator/c-sim.png',
			callback: function() {
				system.loader('programs/CircuitSimulator/c-sim.js');
			}
		}, {
			text: 'FloydCraft Join Info',
			icon: 'programs/AeroJoinInfo/AJFCI.png',
			callback: function() {
				system.loader('programs/AeroJoinInfo/AJFCI.js');
			}
		}, {
			text: 'Minecraft Classic',
			icon: 'programs/Minecraft/mcc.ico',
			callback: function() {
				system.loader('programs/Minecraft/mcc.js');
			}
		}, {
			text: 'Quake 3 JS',
			icon: 'programs/Quake/qjs.ico',
			callback: function() {
				system.loader('programs/Quake/qjs.js');
			}
		}, {
			text: 'Classic PacMan JS',
			icon: 'programs/PacMan/pac.png',
			callback: function() {
				system.loader('programs/PacMan/pac.js');
			}
		}, {
			text: 'Unity Launcher',
			icon: 'programs/Unity/unity.ico',
			callback: function() {
				system.loader('programs/Unity/Launcher.js');
			}
		}, {
			text: 'MineBlock MC Copy',
			icon: 'programs/MineBlock/mine.png',
			callback: function() {
				system.loader('programs/MineBlock/mine.js');
			}
		}, {
			text: 'CraftNite MC/FO',
			icon: 'programs/Unity/CN.png',
			callback: function() {
				system.loader('programs/Unity/CN.js');
			}
		}, {
			text: 'Map76 DynMap',
			icon: 'programs/Map76/map76.png',
			callback: function() {
				system.loader('programs/Map76/map76.js');
			}
		}, {
			text: 'Solitaire (Patience)',
			icon: 'programs/Solitaire/sol.ico',
			callback: function() {
				system.loader('programs/Solitaire/sol.js');
			}
		}, {
			text: 'Spider Solitaire',
			icon: 'programs/SpiderSolitaire/spider.ico',
			callback: function() {
				system.loader('programs/SpiderSolitaire/spider.js');
			}
		}, {
			text: 'Text to Speech',
			icon: 'programs/Speech/TTS.ico',
			callback: function() {
				system.loader('programs/Speech/TTS.js');
			}
		}, {
			text: 'Run an Application',
			icon: 'webdows/resources/icons/runi.ico',
			callback: function() {
				system.loader('webdows/run.js');
			}
		}, {
			text: 'Personalize WebOS',
			icon: 'webdows/resources/icons/pers.ico',
			callback: function() {
				system.loader('webdows/personalize.js');
			}
		}, {
			text: 'WebOS Credits.txt',
			icon: 'webdows/resources/icons/note.ico',
			callback: function() {
				system.loader('Public/Documents/credits.js');
			}
		}, {
			text: 'WebOS credits.doc',
			icon: 'programs/FCoffice/word_doc.png',
			callback: function() {
				system.loader('programs/FCoffice/credits.js');
			}
		}, {
			text: 'FloydCraft Website',
			icon: 'webdows/resources/icons/WebLink.png',
			callback: function() {
				system.loader('programs/Website/wsite.js');
			}
		}, {
			text: 'WebOS Docʼs',
			icon: 'webdows/resources/icons/WebLink.png',
			callback: function() {
				system.loader('programs/Docs/we.js');
			}
		}
	];
	var body = this.body;
	body.css({'padding-top':'42px','text-align':'center','overflow-x':'hidden'});
	body.html('<div class="topframe">  <div align="center"><img src="programs/Fence/topframe.png" width="360" height="56" draggable="false" ondragstart="return false;" align="baseline" class="top" /></div></div>');
	$.each(butts, function() {
		var buttID = system.guid();
		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
		body.find('button[buttID='+buttID+']').click(this.callback);
	});
	body.find('.topframe').attr('style', 'top:0px;position:absolute;left:0;right:0px;margin:auto;');
	body.find('.butt').attr('style', 'line-height:11px;font-size:10.5px;margin:4px;height:64px;width:64px;');
	body.find('.icon').css({'width':'38px','height':'38px','float':'center'});
});
