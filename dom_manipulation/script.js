function create_button(){
	var btn = document.createElement("BUTTON");
	document.getElementById("container").style.visibility = "visible";
	document.getElementById("styles").style.visibility = "visible";
	var newButton = document.getElementById("container").appendChild(btn);
	var myIdBtn = newButton.setAttribute("id", "myBtn");
	document.getElementById("button").disabled = true;

	var html = '<h4>Choose styles</h4>' +
	'Value of the text: <input type="text" id="btn-text" onkeyup="btn_text()"><br><br>' +
	'Background color:' +
	'<select id="bg-color" onchange="bg_color()">' +
		'<option value="">Choose</option>' +
		'<option value="green">Green</option>' +
		'<option value="red">Red</option>' +
		'<option value="blue">Blue</option>' +
		'<option value="black">Black</option>' +
	'</select><br><br>' +
	'Text color:' +
	'<select id="txt-color" onchange="txt_color()">' +
		'<option value="">Choose</option>' +
		'<option value="white">White</option>' +
		'<option value="black">Black</option>' +
		'<option value="grey">Grey</option>' +
	'</select>';
	document.getElementById("styles").innerHTML = html;
}

function btn_text(){
	var btnText = document.getElementById("btn-text").value;
	document.getElementById("myBtn").innerHTML = btnText;
}

function bg_color(){
	var bgColor = document.getElementById("bg-color").value;
	document.getElementById("myBtn").style.background = bgColor;
}

function txt_color(){
	var txtColor = document.getElementById("txt-color").value;
	document.getElementById("myBtn").style.color = txtColor;
}


function create_paragraph(){
	var prg = document.createElement("P");
	document.getElementById("container").style.visibility = "visible";
	document.getElementById("styles").style.visibility = "visible";
	var newParagraph = document.getElementById("container").appendChild(prg);
	var myIdPrg = newParagraph.setAttribute("id", "myIdPrg");
	document.getElementById("paragraph").disabled = true;

	var html = '<h4>Choose styles</h4>' +
	'Value of the text: <input type="text" id="prg-text" onkeyup="prg_text()"><br><br>' +
	'Text color:' +
	'<select id="txt-color-prg" onchange="prg_txt_color()">' +
		'<option value="">Choose</option>' +
		'<option value="green">Green</option>' +
		'<option value="black">Black</option>' +
		'<option value="grey">Grey</option>' +
		'<option value="red">Red</option>' +
	'</select><br><br>' +
	'Font size:' +
	'<select id="txt-size-prg" onchange="prg_txt_size()">' +
		'<option value="">Choose</option>' +
		'<option value="small">Small</option>' +
		'<option value="large">Normal</option>' +
		'<option value="x-large">Large</option>' +
		'<option value="xx-large">Larger</option>' +
	'</select>';
	document.getElementById("styles").innerHTML = html;
}

function prg_text(){
	var prgText = document.getElementById("prg-text").value;
	document.getElementById("myIdPrg").innerHTML = prgText;
}

function prg_txt_color(){
	var txtColor = document.getElementById("txt-color-prg").value;
	document.getElementById("myIdPrg").style.color = txtColor;
}

function prg_txt_size(){
	var txtSize = document.getElementById("txt-size-prg").value;
	document.getElementById("myIdPrg").style.fontSize = txtSize;
}

function create_div(){
	var div = document.createElement("DIV");
	document.getElementById("container").style.visibility = "visible";
	document.getElementById("styles").style.visibility = "visible";
	var newDiv = document.getElementById("container").appendChild(div);
	var myIdDiv = newDiv.setAttribute("id", "myIdDiv");
	document.getElementById("div").disabled = true;

	var html = '<h4>Choose styles</h4>' +
	'Text in the div: <input type="text" id="div-text" onkeyup="div_text()"><br><br>' +
	'Text color:' +
	'<select id="txt-color-div" onchange="div_txt_color()">' +
		'<option value="">Choose</option>' +
		'<option value="green">Green</option>' +
		'<option value="black">Black</option>' +
		'<option value="grey">Grey</option>' +
		'<option value="red">Red</option>' +
		'<option value="white">White</option>' +
	'</select><br><br>' +
	'Background color:' +
	'<select id="div-bg-color" onchange="div_bg_color()">' +
		'<option value="">Choose</option>' +
		'<option value="green">Green</option>' +
		'<option value="red">Red</option>' +
		'<option value="blue">Blue</option>' +
		'<option value="black">Black</option>' +
	'</select><br><br>';
	document.getElementById("styles").innerHTML = html;
}

function div_text(){
	var divText = document.getElementById("div-text").value;
	document.getElementById("myIdDiv").innerHTML = divText;
}

function div_txt_color(){
	var txtColor = document.getElementById("txt-color-div").value;
	document.getElementById("myIdDiv").style.color = txtColor;
}

function div_bg_color(){
	var divBg = document.getElementById("div-bg-color").value;
	document.getElementById("myIdDiv").style.background = divBg;
}

function insert_para(){
	var new_para = document.createElement('p');
	new_para.textContent = 'I am a new a paragraph';
	var second_p = document.getElementById('father').getElementsByTagName('p')[1];
	document.getElementById('father').insertBefore(new_para,second_p);
}

function remove_para() {
	let father = document.getElementById("father");
	father.removeChild(father.lastElementChild);
}


