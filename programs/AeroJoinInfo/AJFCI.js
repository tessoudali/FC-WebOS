/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/24/20
*/
new explorer.window()
.resize(382, 622)
.center()
.title('How to join FloydCraft')
.icon('programs/AeroJoinInfo/AJFCI.png')
.callback(function() {
	hexToRGB = function(h, o){
		function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
		var r = parseInt((cutHex(h)).substring(0,2),16), g = parseInt((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16);
		return 'rgba('+r+','+g+','+b+','+o+')';
	}
	var theme = explorer.theme();
	var color = '';
	var background = '';
	this.body
	.attr('style', 'text-align:center;padding-top:5px;')
	.html('<p><iframe src="http://cdn.floydcraft.co.uk/bannerWebOS_HTJ.html" style="border:1px #ffffff none;" name="JoinFCImage" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="64px" width="336px" allowfullscreen></iframe></p><p><span style="color: #ffffff;">To join</span>&nbsp;<span style="color: #ff9900;"><strong><span class="tadv-color">FloydCraft</span></strong></span>, <span style="color: #ffffff;">simply </span><span class="tadv-color" style="color: #339966;"><strong>"<span style="color: #00ff00;">Download Minecraft</span>"<br /></strong></span><span style="color: #ffffff;">from </span>   <button class="bac" title="Join Info">Here</button>  </strong></span></em><span style="color: #00ff00;"><span style="color: #ffffff;">and launch it..</span><br />  </span><span style="color: #00ff00;"><span style="color: #ffffff;">Login to the Minecraft launcher if you paid for</span><br /> <span style="color: #ffffff;">Minecraft or enter a username if not.</span></span></p><p><span style="color: #ccffcc;">Once loaded select the &ldquo;Multiplayer button and <br />connect with the address</span> <span style="color: #339966;">&ldquo;<span style="color: #00ff00;"><strong><span class="tadv-color">play.floydcraft.co.uk</span></strong></span>&ldquo;</span></p><p><span style="color: #ffff99;">Once you have been spawned into the lobby you <br />will then be prompted to Register or login.</span></p><p><span style="color: #ffff00;"><span style="color: #ffcc99;">To</span> <span style="color: #ffcc00;"><em><strong>Register</strong> </em></span><span style="color: #ffcc99;">use the command:</span></span><br /><span style="color: #ffff00;">/</span><strong><em><span style="color: #ffcc00;">register</span> </em></strong><span style="color: #ffff00;">&lt;password&gt; &lt;password&gt;</span></p><p><span style="color: #ffcc99;">To <span style="color: #ffcc00;"><em><strong>login</strong> </em></span>use the command:</span><br /><span style="color: #ffff00;">/<em><strong><span style="color: #ffcc00;">login</span> </strong></em>&lt;password&gt;</span></p><p><span style="color: #00ffff;">If you have any issues joining via the given <br />address you can try the following:</span><br /><span style="color: #00ffff;"><span style="color: #ccffff;"><strong>play.floydcraft.co.uk</strong></span>&nbsp;<span style="color: #99ccff;">(Fastest None EU Route)</span></span><br /><span style="color: #00ffff;"><span style="color: #33cccc;"><strong><span style="color: #ccffff;">de.floydcraft.co.uk</span>&nbsp;</strong><span style="color: #99ccff;">(Fastest EU Route)</span></span></span><br /><span style="color: #00ffff;"><strong><span style="color: #ccffff;">play.floydcraft.xyz</span>&nbsp;</strong><span style="color: #99ccff;">(backup None EURoute</span></span><br /><span style="color: #00ffff;"><span style="color: #33cccc;"><strong><span style="color: #ccffff;">de.floydcraft.xyz</span>&nbsp;</strong></span><span style="color: #99ccff;">(backup EU Route)</span></span></p>')
	.find('img')
	.attr('style', 'width:310px;height:180px;margin:3px;display:inline-block;display:none;padding:2px;');
	this.body.find('.sav, .app, .can')
	.attr('style', 'float:right;margin-right:5px;')
	.click({win: this}, function(e) {
		var win = e.data.win;
		if(theme !== 'webdows') {
			color = '';
		} else {
			var c = win.body.find('input[type=color]').val();
			if(c !== '#000000') {
				color = ' #taskbar, #startmenu, .window {background-color:'+hexToRGB(c, .4)+' !important;} .window.active {background-color:'+hexToRGB(c, .5)+' !important;} ';
			} else {
				color = '';
			}
		}
		if(background !== '') {
			var bg = ' #desktop.explorer {background-image:url('+background+') !important;} ';
		} else {
			var bg = '';
		}
		if($(this).hasClass('sav')) {
			explorer.theme(theme, color+bg);
			win.close();
		}
		if($(this).hasClass('app')) {
			explorer.theme(theme, color+bg);
			elmeval(win);
		}
		if($(this).hasClass('can')) {
			win.close();
		}
	});
	this.body.find('input[type=color]').attr('style', 'height:16px;float:left;margin-left:5px;');
	var bac = {};
	this.body.find('.bac').attr('style', 'float').click({win: this}, function(e) {
		var win = e.data.win;
		if(typeof bac.winid !== 'undefined') {
			bac.close();
		}
		background = '';
		bac = new explorer.window()
		.title('Play FloydCraft')
		.icon('programs/Play/play.ico')
		.resize(863,510)
		.controls([])
		.closeWith(win)
		.center()
		.callback(function() {
			var cbt = this;
			this.body.html('<style>*       {margin:0;padding:0;}html, body    {height:100%;  width:100%; overflow:hidden;}table   {height:100%;  width:100%; table-layout:static; border-collapse:collapse;}iframe  {float:left; height:100%; width:100%;}.header {border-bottom:1px solid #000}.content {height:100%;}</style><iframe src="http://playfc.floydcraft.co.uk/" height="100"% width="100%" frameborder="0"></iframe>');
		});
	});
	function elmeval(win) {
		win.body.find('img').hide();
		win.body.find('img.'+theme).show();
		if(theme == 'webdows') {
			win.body.find('input[type=color]').show();
			win.body.attr('style', 'text-align:center;color:white;background-color:transparent;border:none;box-shadow:none;');
		} else {
			win.body.find('input[type=color]').hide();
			win.body.attr('style', 'text-align:center;');
		}
	}
	elmeval(this);
	this.body.find('img.'+theme).show();
	this.body.find('input[value='+theme+']').click();
	this.body.find('input[name=theme]').change({win: this}, function(e) {
		var win = e.data.win;
		background = '';
		color = '';
		win.body.find('input[type=color]').val('#000000');
		theme = $(this).val();
		win.body.find('img').hide();
		win.body.find('img.'+theme).show();
		if(theme == 'webdows') {
			win.body.find('input[type=color]').show();
		} else {
			win.body.find('input[type=color]').hide();
		}
	});
});
