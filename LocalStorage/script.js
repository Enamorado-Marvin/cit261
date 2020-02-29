function calculate(){
	var kcal = document.getElementById("kcal").value;
    var cho = document.getElementById("cho").value;
    var chon = document.getElementById("chon").value;
    var cooh = document.getElementById("cooh").value;

    function Macronutrients(kcal, cho, chon, cooh){
    	this.kcal = kcal;
    	this.cho = cho;
    	this.chon = chon;
    	this.cooh = cooh;

    	/*this.validate = function(){
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
*/
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
}