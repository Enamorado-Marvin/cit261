/*function calculate(){
	var kcal = document.getElementById("kcal").value;
    var cho = document.getElementById("cho").value;
    var chon = document.getElementById("chon").value;
    var cooh = document.getElementById("cooh").value;

    function Macaronutrients(kcal, cho, chon, cooh){
    	this.kcal = kcal;
    	this.cho = cho;
    	this.chon = chon;
    	this.cooh = cooh;

    	this.validate = function(){
    		var totalPercent = this.cho + this.chon + this.cooh;
    		if (this.cho == null || this.cho < 40 || this.cho > 60) {
    			document.getElementById("erCh").innerHTML = "Value must be between 40 and 60";
    		}else if (this.chon == null || this.chon < 10 || this.chon > 30) {
    			document.getElementById("erChn").innerHTML = "Value must be between 10 and 30";
    		}else if (this.cooh == null || this.cooh < 20 || this.cooh > 35) {
    			document.getElementById("erC").innerHTML = "Value must be between 10 and 30";
    		}else if (this.kcal == null) {
    			document.getElementById("erK").innerHTML = "Field can't be empty";
    		}

    		if (totalPercent < 101 || totalPercent > 100) {
    			return "Number must be 100";
    		}  		
    	}

    }

    var calcCho = parseFloat(kcal*(cho/100)/4).toFixed(2);
    var calcChon = parseFloat(kcal*(chon/100)/4).toFixed(2);
    var calcCooh = parseFloat(kcal*(cooh/100)/9).toFixed(2);

	newMacronutrients = new Macronutrients(kcal, calcCho, calcChon, calcCooh);

	localStorage.setItem('newMacronutrients', JSON.stringify(newMacronutrients));

}
var retrieveMacros = localStorage.getItem('newMacronutrients');
var obj = JSON.parse(retrieveMacros);
document.getElementById("demo").innerHTML = '<h2>Kcal: ' + obj.kcal + '</h2>'
    										+ '<b>' + obj.cho + '</b>' + ' gm of CHO (Carbohydrates)'
    										+ '<br><b>'+ obj.chon +'</b>' + ' gm of CHON (Carbon, hydrogen, oxygen, and nitrogen)'
    										+ '<br><b>'+ obj.cooh + '</b>' + ' gm of COOH (Carboxylic acid)' ;


function goBack() {
  window.history.back();
}*/

var slider1 = document.getElementById("kcal");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

var slider2 = document.getElementById("cho");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

var slider3 = document.getElementById("chon");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

var slider4 = document.getElementById("cooh");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
totalPer = 70
totalPercent.innerHTML = totalPer;
if (totalPer < 100 || totalPer > 100) {
        totalPercent.style.color = "red";
        totalPercent.innerHTML = totalPer + " this total must be 100%";
    } else {
        totalPercent.style.color = "green";
        totalPercent.innerHTML = totalPer + "%";
    }



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



slider2.oninput = function() {
  output2.innerHTML = this.value;
  choPercent.innerHTML = this.value + "% of CHO";
  var calcCho = parseFloat(slider1.value*(this.value/100)/4).toFixed(2);
  gmCho.innerHTML = calcCho + " gm of CHO (Carbohydrates)";
  var totalPer = +this.value + +slider3.value + +slider4.value;
  totalPercent.innerHTML = totalPer;

  if (totalPer < 100 || totalPer > 100) {
        totalPercent.style.color = "red";
        totalPercent.innerHTML = totalPer + " this total must be 100%";
    } else {
        totalPercent.style.color = "green";
        totalPercent.innerHTML = totalPer + "%";
    }
}



slider3.oninput = function() {
  output3.innerHTML = this.value;
  chonPercent.innerHTML = this.value + "% of CHON";
  var calcChon = parseFloat(slider1.value*(this.value/100)/4).toFixed(2);
  gmChon.innerHTML = calcChon + " gm of CHON (Carbon, hydrogen, oxygen, and nitrogen)";
  var totalPer = +this.value + +slider2.value + +slider4.value;
  totalPercent.innerHTML = totalPer;

  if (totalPer < 100 || totalPer > 100) {
        totalPercent.style.color = "red";
        totalPercent.innerHTML = totalPer + " this total must be 100%";
    } else {
        totalPercent.style.color = "green";
        totalPercent.innerHTML = totalPer + "%";
    }
}



slider4.oninput = function() {
  output4.innerHTML = this.value;
  coohPercent.innerHTML = this.value + "% of COOH";
  var calcCooh = parseFloat(slider1.value*(this.value/100)/9).toFixed(2);
  gmCooh.innerHTML = calcCooh + " gm of COOH (Carboxylic acid)";
  var totalPer = +this.value + +slider3.value + +slider2.value;
  totalPercent.innerHTML = totalPer;

  if (totalPer < 100 || totalPer > 100) {
        totalPercent.style.color = "red";
        totalPercent.innerHTML = totalPer + " this total must be 100%";
    } else {
        totalPercent.style.color = "green";
        totalPercent.innerHTML = totalPer + "%";
    }
}