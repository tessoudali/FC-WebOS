/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Origional Script: krisdb2009
Date: 12/11/20
*/
new explorer.window()
.title('Welcome to FloydCraft WebOS')
.resize(570, 300)
.center()
.icon('webdows/resources/icons/logo.png')
.controls(['min'])
.callback(function() {
	var butts = [
		{
			text: 'About',
			icon: 'webdows/resources/icons/info.ico',
			callback: function() {
				system.loader('webdows/webver.js');
			}
		}, {
			text: 'Play Info',
			icon: 'programs/Play/play.png',
			callback: function() {
				system.loader('programs/AeroJoinInfo/AJFCI.js');
			}
		}, {
			text: 'Discord',
			icon: 'webdows/resources/icons/ghub.png',
			callback: function() {
				system.loader('programs/Discord/discord.js');
			}
		}, {
			text: 'Forum',
			icon: 'webdows/resources/icons/wpad.ico',
			callback: function() {
				system.loader('programs/Forum/forum.js');
			}
		}, {
			text: 'Website',
			icon: 'webdows/resources/icons/wsite.png',
			callback: function() {
				system.loader('programs/Website/wsite.js');
			}
		}, {
			text: 'Help',
			icon: 'webdows/resources/icons/ques.ico',
			callback: function() {
				system.loader('programs/Help/help.js');
			}
		}, {
			text: 'Map App',
			icon: 'webdows/resources/icons/mapapp.ico',
			callback: function() {
				system.loader('programs/MapApp/mapapp.js');
			}
		}, {
			text: 'FC eMail',
			icon: 'webdows/resources/icons/email.ico',
			callback: function() {
				system.loader('programs/Email/email.js');
			}
		}, {
			text: 'Projects',
			icon: 'webdows/resources/icons/projects.ico',
			callback: function() {
				system.loader('programs/Projects/proj.js');
			}
		}, {
			text: 'Rules',
			icon: 'webdows/resources/icons/rules.ico',
			callback: function() {
				system.loader('programs/Rules/rules.js');
			}
		}, {
			text: 'Docs',
			icon: 'webdows/resources/icons/docs.png',
			callback: function() {
				system.loader('programs/Docs/we.js');
			}
		}, {
			text: 'All Apps',
			icon: 'programs/Fence/icon.png',
			callback: function() {
				system.loader('programs/Fence/Main.js');
			}
		}, {
			text: 'Classic',
			icon: 'programs/Minecraft/mcc.ico',
			callback: function() {
				system.loader('programs/Minecraft/mcc.js');
			}
		}, {
			text: 'FC Tools',
			icon: 'programs/FCtools/icons/FCTools.png',
			callback: function() {
				system.loader('programs/FCtools/Launcher.js');
			}
		}, {
			text: 'FC Office',
			icon: 'programs/FCoffice/office.ico',
			callback: function() {
				system.loader('programs/FCoffice/Launcher.js');
			}
		}
	];
	var body = this.body;
	body.css({'padding-top':'100px','text-align':'center','overflow-x':'hidden'});
	body.html('<div class="topframe"><div class="welc">Welcome</div><div class="stat">FloydCraft WebOS Beta<br>'+platform.name+' '+platform.version+'<br>'+platform.layout+'<br>'+platform.os+'<br>'+location.hostname+'</div></div>');
	$.each(butts, function() {
		var buttID = system.guid();
		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
		body.find('button[buttID='+buttID+']').click(this.callback);
	});
	body.find('.topframe').attr('style', 'top:0px;left:0px;background-repeat:no-repeat;background-size:100px 100px, 100% 100%;position:absolute;height:100px;width:100%;background-image:url(\'webdows/resources/welcome/2.png\'), url(\'webdows/resources/welcome/1.png\');');
	body.find('.welc').attr('style', 'color:rgba(255,255,255,0.5);font-size:40px;position:absolute;bottom:0px;right:10px;');
	body.find('.stat').attr('style', 'white-space:nowrap;text-align:left;font-size:12px;margin-top:5px;margin-left:110px;color:white;text-shadow:1px 1px 3px black;');
	body.find('.butt').attr('style', 'line-height:32px;margin:5px;height:35px;width:100px;');
	body.find('.icon').css({'width':'30px','height':'30px','float':'left'});
});
