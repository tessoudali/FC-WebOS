/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/11/20
*/
new explorer.window()
.resize(990, 730)
.center()
.title('Doom 3 - Demo - （Keyboard Input is not yet implemented, you can assign extra mouse buttons in Controles）')
.icon('programs/Doom3/d3.ico')
.controls(['min'])
.callback(function() {
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
                href="Doom3WAFC">
               </a>
          </h4>
      </td>
  </tr>
  <tr>
      <td class="content">
      <iframe src="programs/Doom3/d3.htm" "frameborder=" "tabindex="0"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
});