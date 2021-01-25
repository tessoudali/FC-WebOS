/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 05/11/20
*/
new explorer.window()
.resize(711, 495)
.center()
.title('Webassembly Studio')
.icon('programs/Webassembly/Studio.png')
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
                href="webassembly.studio">
               </a>
          </h4>
      </td>
  </tr>
  <tr>
      <td class="content">
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://webassembly.studio/"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
});