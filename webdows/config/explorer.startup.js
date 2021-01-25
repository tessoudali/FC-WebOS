$('head').find('title').text('Webdows');
explorer.start.append([], [
	{
		title: 'User',
		icon: 'programs/FileManager/fman.png',
		callback: function() { system.loader('programs/FileManager/fman.js'); }
	}, {
		title: 'Documents',
		icon: 'programs/FileManager/fman.png',
		callback: function() { system.loader('programs/FileManager/fman.js'); }
	}, {
		title: 'Welcome',
		icon: 'webdows/resources/icons/logo.png',
		callback: function() { system.loader('webdows/welcome.js'); }
	}, {
		title: 'About',
		icon: 'webdows/resources/icons/ques.ico',
		callback: function() { system.loader('webdows/webver.js'); }
	}, {
		title: 'File Manager',
		icon: 'programs/FileManager/fman.png',
		callback: function() { system.loader('programs/FileManager/fman.js'); }
	}, {
		title: 'Settings',
		icon: 'webdows/resources/icons/cont.ico'
	}, {
		title: 'Personalize',
		icon: 'webdows/resources/icons/pers.ico',
		callback: function() { system.loader('webdows/personalize.js'); }
	}, {
		title: 'Speech',
		icon: 'programs/Speech/TTS.ico',
		callback: function() { system.loader('programs/Speech/TTS.js'); }
	}, {
		title: 'Help and Support',
		icon: 'webdows/resources/icons/ques.ico',
		callback: function() { system.loader('programs/Help/help.js'); }
	}, {
		title: 'Run',
		icon: 'webdows/resources/icons/runi.ico',
		callback: function() { system.loader('webdows/run.js'); }
	}, {
		title: 'Restart',
		callback: function() { location.reload(true); }
	}
]);
$('#desktop.explorer').on('contextmenu', function(e) {
	e.preventDefault();
	if(e.target == this) {
		new explorer.context()
		.location(e.pageX, e.pageY)
		.append([
			{
				title: 'View'
			}, {
				title: 'Sort By'
			}, {
				title: 'Refresh'
			}, {}, {
				title: 'New',
				context: [
					{
						title: 'File',
						callback: function() {}
					}, {}, {
						title: 'Folder',
						callback: function() {}
					}
				]
			}, {}, {
				title: 'Desktop App Launcher',
				icon: 'programs/Fence/icon.png',
				callback: function() { system.loader('programs/Fence/Main.js'); }
			}, {
				title: 'Display Settings',
				icon: 'programs/display/info.png',
				callback: function() { system.loader('programs/display/info.js'); }
			}, {
				title: 'Personalize',
				icon: 'webdows/resources/icons/pers.ico',
				callback: function() { system.loader('webdows/personalize.js'); }
			}
		]);
	}
});
