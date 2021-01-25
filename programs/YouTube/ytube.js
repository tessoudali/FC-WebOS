/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/26/20
*/
new explorer.window()
.title('YouTube')
.resize(856, 582)
.icon(loader.folder+'logo.png')
.center()
.callback(function() {
	var bod = this.body;
	var win = this;
	this.body
	.css({'font-size':'10px'})
	.html(`
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<style>
*       {margin:0;padding:0;}
html, 
body    {height:100%;  width:100%; overflow:hidden;}
table   {height:100%;  width:100%; table-layout:static; border-collapse:collapse;}
iframe  {float:left; height:100%; width:100%;}
.header {border-bottom:1px solid #000}
.content {height:100%;}
</style>
</head>
<body>

<table>
  <tr>
      <td class="header">
          <h4>
              <a 
                href="YouTube">
               </a>
          </h4>
      </td>
  </tr>
  <tr>
      <td class="content">
      <iframe src="https://youtube-lite.js.org/" frameborder="0"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
	var dis = this;
	dis.menuBar([
		{
			'title': 'View',
			context: [
				{
					title: 'Minimize',
					callback: function() { dis.front().toggleMin(); }
				}, {}, {
					title: 'Exit',
					callback: function() { dis.close(); }
				}
			]
		}, {
			'title': 'Help',
			context: [
				{
					title: 'Help',
					callback: function() { system.loader('webdows/welcome.js') }
				}, {}, {
					title: 'About this YouTube app',
					callback: function() { new explorer.window().title('About Youtube').body.html('<p style="text-align: center;"><span style="background-color: #ffcc00;"><span style="color: #008000;"><strong> FloydCraft WebOS</strong></span>, <strong><span style="color: #ff0000;">YouTube</span> <span style="color: #008000;">App </span></strong></span><br />WebOS App created by rmellis using This <a href="https://github.com/9oelM/youtube-lite" target="_blank" rel="noopener">GitHub Project</a> <br />No ads, No distractions and No recommendations. Just an easy way to find the video you want to watch on youtube.</p>'); }
				}
			]
		}
	]);
});