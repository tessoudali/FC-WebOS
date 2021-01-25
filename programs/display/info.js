/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 11/08/20
*/
new explorer.window()
.title('Display Settings')
.resize(500, 330)
.icon(loader.folder+'info.png')
.center()
.controls(['min'])
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
                href="Display">
               </a>
          </h4>
      </td>
  </tr>
  <tr>
      <td class="content">      <iframe src="webdows/res.jsp"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
	var dis = this;
	dis.menuBar([
		{
			'title': 'File',
			context: [
				{
					title: 'Detect Resolution',
					callback: function() { dis.front().toggleMin(); }
				}, {}, {
					title: 'Scale',
					callback: function() {}
				}, {
					title: 'Zoom',
					callback: function() {}
				}, {}, {
					title: 'Apply',
					callback: function() { dis.close(); }
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
					title: 'About Display Settings',
					callback: function() { new explorer.window().title('About Youtube').body.html('<p style="text-align: center;"><span style="background-color: #ffcc00;"><span style="color: #008000;"><strong> FloydCraft WebOS</strong></span>, <strong><span style="color: #ff0000;">Screen Res </span> <span style="color: #008000;">App </span></strong></span><br />  WebOS App created by rmellis</p>'); }
				}
			]
		}
	]);
});