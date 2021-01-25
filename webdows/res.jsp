<!DOCTYPE html>
<html><style type="text/css">
<!--
body {
	background-image: url(https://i.imgur.com/Kz0arKC.jpg);
	background-repeat: no-repeat;
}
.style1 {font-family: Verdana, Arial, Helvetica, sans-serif}
.style2 {
	font-size: 24px;
	font-weight: bold;
}
.style3 {font-family: "Courier New", Courier, monospace}
-->
</style>
<body>
<span class="style2"><u><font color=#000000><span class="style3">Display Infomation:</span></span></font></u>
<div class="style1" id="ScreenRes"></div>
<span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;</strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" value="Detect Resolution" onClick="document.location.reload(true)">
<script>
var txt = "";
txt += "<p><b><font color=#4b0d85>System Resolution:</font></b><font color=#854b19> " + screen.width + "x" + screen.height + "</p>";
txt += "<p><b><font color=#4b0d85>WebOS Resolution:&nbsp; </font ></b> " + window.outerWidth + "x" + window.outerHeight + "</p>";
txt += "<p><b><font color=#4b0d85>Pixel Color Depth: &nbsp;&nbsp; </font></b> " + screen.colorDepth + "-Bit</p>";
txt += "<p><b><font color=#4b0d85>Colors:</font></b> 16,777,216 (True Colors)";
document.getElementById("ScreenRes").innerHTML = txt;
</script>
</span>
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
</head>
<body>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- Trigger/Open The Modal -->
&nbsp;
<button id="myBtn">Scale</button><!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close2 {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
</head><!-- Trigger/Open The Modal -->
<button id="myzBtn">Zoom</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;<button onclick="myFunction()">Apply</button>

<script>
function myFunction() {
  alert("scaleing and zooming changes have been saved.");
}
</script>

<!-- The Modal -->
<span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;</strong></span>
<div id="Zoom" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close2">&times;</span>
    <p>want a smaller Work area? you can zoom the entire desktop by holding down [CTRL] and scrolling in.</p><p>Need a bigger Work area? you can scale the entire desktop by holding down [CTRL] and scroll out with your mouse.</p>
  </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("Zoom");

// Get the button that opens the modal
var btn = document.getElementById("myzBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>

</body>
</html>


 <!-- The Modal -->
 <div id="Scale" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>want a smaller Work area? you can zoom the entire desktop by holding down [CTRL] and scrolling in.</p><p>Need a bigger Work area? you can scale the entire desktop by holding down [CTRL] and scroll out with your mouse.</p>
  </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("Scale");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
</body>
</html>
