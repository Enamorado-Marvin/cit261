//This function is when index.html is loaded
function myScript(){
	//Getting values from input elements (sliders)
	var slider1 = document.getElementById("kcal");
	var output1 = document.getElementById("hKcal");
	output1.innerHTML = "Kilocalories: " + slider1.value;

	var slider2 = document.getElementById("cho");
	var output2 = document.getElementById("choPercent");
	output2.innerHTML = slider2.value + "% of CHO";

	var slider3 = document.getElementById("chon");
	var output3 = document.getElementById("chonPercent");
	output3.innerHTML = slider3.value + "% of CHON";

	var slider4 = document.getElementById("cooh");
	var output4 = document.getElementById("coohPercent");
	output4.innerHTML = slider4.value + "% of COOH";

	//Default value based on the lowest percent calculation
	totalPer = 70;

	//The default value for the bar is set to 70%
	bar.style.width = totalPer+"%";
	if (totalPer < 100 || totalPer > 100) {
	  bar.style.background = "#FF011B";
	  bar.innerHTML = totalPer + "%" + "<span style='float:right;'>this total must be 100%</span>";
	} else {
	  bar.style.background = "#4CAF50";
	}


	//events oninput for each slider, this event changes values in both, percent and grams
	//by calculating the values
	slider1.oninput = function() {
	  output1.innerHTML = this.value;
	  hKcal.innerHTML = "Kilocalories: " + this.value;
	  var calcCho = parseFloat(slider1.value*(slider2.value/100)/4).toFixed(2);
	  gmCho.innerHTML = calcCho + " gm of CHO (Carbohydrates)";
	  var calcChon = parseFloat(slider1.value*(slider3.value/100)/4).toFixed(2);
	  gmChon.innerHTML = calcChon + " gm of CHON (Carbon, hydrogen, oxygen, and nitrogen)";
	  var calcCooh = parseFloat(slider1.value*(slider4.value/100)/9).toFixed(2);
	  gmCooh.innerHTML = calcCooh + " gm of COOH (Carboxylic acid)";
	}

	//events for clicked actions
	slider1.onmousedown = function() {
	  hKcal.style.color = "brown";
	}

	slider1.onmouseup = function() {
	  hKcal.style.color = "black";
	}


	slider2.oninput = function() {
	  choPercent.innerHTML = this.value + "% of CHO";
	  var calcCho = parseFloat(slider1.value*(this.value/100)/4).toFixed(2);
	  gmCho.innerHTML = calcCho + " gm of CHO (Carbohydrates)";
	  var totalPer = +this.value + +slider3.value + +slider4.value;
	  
	  bar.style.width = totalPer+"%";
	  if (totalPer < 100 || totalPer > 100) {
	        bar.style.background = "#FF011B";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>this total must be 100%</span>";
	    } else {
	        bar.style.background = "#4CAF50";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>There you go!</span>";
	    }
	}

	slider2.onmousedown = function() {
	  choPercent.style.color = "#FF7D01";
	  gmCho.style.color = "#FF7D01";
	  gmCho.style.fontWeight = "bold";
	  choPercent.style.fontWeight = "bold";

	}

	slider2.onmouseup = function() {
	  choPercent.style.color = "black";
	  gmCho.style.color = "black";
	  choPercent.style.fontWeight = "initial";
	  gmCho.style.fontWeight = "initial";
	}

	slider2.ontouchstart = function() {
	  choPercent.style.color = "#FF7D01";
	  gmCho.style.color = "#FF7D01";
	  gmCho.style.fontWeight = "bold";
	  choPercent.style.fontWeight = "bold";

	}

	slider2.ontouchend = function() {
	  choPercent.style.color = "black";
	  gmCho.style.color = "black";
	  choPercent.style.fontWeight = "initial";
	  gmCho.style.fontWeight = "initial";
	}



	slider3.oninput = function() {
	  output3.innerHTML = this.value;
	  chonPercent.innerHTML = this.value + "% of CHON";
	  var calcChon = parseFloat(slider1.value*(this.value/100)/4).toFixed(2);
	  gmChon.innerHTML = calcChon + " gm of CHON (Carbon, hydrogen, oxygen, and nitrogen)";
	  var totalPer = +this.value + +slider2.value + +slider4.value;
	  
	  bar.style.width = totalPer+"%";
	  if (totalPer < 100 || totalPer > 100) {
	        bar.style.background = "#FF011B";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>this total must be 100%</span>";
	    } else {
	        bar.style.background = "#4CAF50";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>There you go!</span>";
	    }
	}

	slider3.onmousedown = function() {
	  chonPercent.style.color = "#64B36B";
	  gmChon.style.color = "#64B36B";
	  gmChon.style.fontWeight = "bold";
	  chonPercent.style.fontWeight = "bold";

	}

	slider3.onmouseup = function() {
	  chonPercent.style.color = "black";
	  gmChon.style.color = "black";
	  chonPercent.style.fontWeight = "initial";
	  gmChon.style.fontWeight = "initial";
	}



	slider4.oninput = function() {
	  output4.innerHTML = this.value;
	  coohPercent.innerHTML = this.value + "% of COOH";
	  var calcCooh = parseFloat(slider1.value*(this.value/100)/9).toFixed(2);
	  gmCooh.innerHTML = calcCooh + " gm of COOH (Carboxylic acid)";
	  var totalPer = +this.value + +slider3.value + +slider2.value;
	  bar.style.width = totalPer+"%";
	  if (totalPer < 100 || totalPer > 100) {
	        bar.style.background = "#FF011B";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>this total must be 100%</span>";
	    } else {
	        bar.style.background = "#4CAF50";
	        bar.innerHTML = totalPer + "%" + "<span style='float:right;'>There you go!</span>";
	    }
	}

	slider4.onmousedown = function() {
	  coohPercent.style.color = "#725BB3";
	  gmCooh.style.color = "#725BB3";
	  gmCooh.style.fontWeight = "bold";
	  coohPercent.style.fontWeight = "bold";
	}

	slider4.onmouseup = function() {
	  coohPercent.style.color = "black";
	  gmCooh.style.color = "black";
	  coohPercent.style.fontWeight = "initial";
	  gmCooh.style.fontWeight = "initial";
	}

	//Touch events for mobile devices or touch devices
	document.getElementById('kcal').addEventListener('touchstart', myFunction1);
	document.getElementById('kcal').addEventListener('touchend', myFunction2);
	document.getElementById('cho').addEventListener('touchstart', myFunction3);
	document.getElementById('cho').addEventListener('touchend', myFunction4);
	document.getElementById('chon').addEventListener('touchstart', myFunction5);
	document.getElementById('chon').addEventListener('touchend', myFunction6);
	document.getElementById('cooh').addEventListener('touchstart', myFunction7);
	document.getElementById('cooh').addEventListener('touchend', myFunction8);


	function myFunction1() {
	  hKcal.style.color = "brown";
	}

	function myFunction3() {
	  choPercent.style.color = "#FF7D01";
	  gmCho.style.color = "#FF7D01";
	  gmCho.style.fontWeight = "bold";
	  choPercent.style.fontWeight = "bold";
	}

	function myFunction5() {
	  chonPercent.style.color = "#64B36B";
	  gmChon.style.color = "#64B36B";
	  gmChon.style.fontWeight = "bold";
	  chonPercent.style.fontWeight = "bold";
	}

	function myFunction7(){
	  coohPercent.style.color = "#725BB3";
	  gmCooh.style.color = "#725BB3";
	  gmCooh.style.fontWeight = "bold";
	  coohPercent.style.fontWeight = "bold";
	}


	function myFunction2() {
	  hKcal.style.color = "black";
	}

	function myFunction4() {
	  choPercent.style.color = "black";
	  gmCho.style.color = "black";
	  choPercent.style.fontWeight = "initial";
	  gmCho.style.fontWeight = "initial";
	}

	function myFunction6() {
	  chonPercent.style.color = "black";
	  gmChon.style.color = "black";
	  chonPercent.style.fontWeight = "initial";
	  gmChon.style.fontWeight = "initial";
	}

	function myFunction8() {
	  coohPercent.style.color = "black";
	  gmCooh.style.color = "black";
	  coohPercent.style.fontWeight = "initial";
	  gmCooh.style.fontWeight = "initial";
	}
}

//Saving data on local storage by using an object function
function calculate() {
  var kcal = document.getElementById("kcal").value;
  var cho = document.getElementById("cho").value;
  var chon = document.getElementById("chon").value;
  var cooh = document.getElementById("cooh").value;

  function Macronutrients(kcal, cho, chon, cooh){
    this.kcal = kcal;
    this.cho = cho;
    this.chon = chon;
    this.cooh = cooh;
  }

  var calcCho = parseFloat(kcal*(cho/100)/4).toFixed(2);
  var calcChon = parseFloat(kcal*(chon/100)/4).toFixed(2);
  var calcCooh = parseFloat(kcal*(cooh/100)/9).toFixed(2);

  newMacronutrients = new Macronutrients(kcal, calcCho, calcChon, calcCooh);

  localStorage.setItem('newMacronutrients', JSON.stringify(newMacronutrients));

  var retrieveMacros = localStorage.getItem('newMacronutrients');
	var obj = JSON.parse(retrieveMacros);
	document.getElementById("elements").innerHTML = "<div class='element'>KCAL<p>"+obj.kcal+" gm</p></div>" +
	                                                "<div class='element'>CHO<p>"+obj.cho+" gm</p></div>"+
                                                "<div class='element'>CHON<p>"+obj.chon+" gm</p></div>"+
                                                "<div class='element'>COOH<p>"+obj.cooh+" gm</p></div>";

}


//Go to previous page
function goBack() {
  window.history.back();
}