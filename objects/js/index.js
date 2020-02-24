function save(){
	var fName = document.getElementById('firstName').value;
	var lName = document.getElementById('lastName').value;
	var tAge = document.getElementById('age').value;
	function Person(name, lastName, age){	
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.fullName = function() {
			return this.name + " " + this.lastName;
		}
		this.period = function(){
			if (this.age < 12) {
				return "Childhood";
			}else if (this.age < 21) {
				return "Adolescence";
			}else if (this.age < 72) {
				return "Adulthood";
			}else {
				return "Old age";
			}
		}		
	}	

	
	newPerson = new Person(fName, lName, tAge);

	var myJSON = JSON.stringify(newPerson);
	document.getElementById("demo2").innerHTML = "JSON stringified: " + myJSON;

	var text = myJSON;
	var obj = JSON.parse(text);
	document.getElementById("demo3").innerHTML = "JSON parsed: " + obj.name + " " + obj.lastName;

	document.getElementById('demo').innerHTML = "The last person added was " + newPerson.fullName();
	addPerson();
}

var dataList= [];
function addPerson(){
	dataList.push(newPerson);
	document.getElementById('firstName').focus();
	document.getElementById('table').innerHTML += 
	'<tbody><td>'+newPerson.name+'</td><td>'+newPerson.lastName+
	'</td><td>'+newPerson.age+'</td><td>'+newPerson.period()+'</td></tbody>';
}

var individual = [];

function displayArray() {
	var fName = document.getElementById('firstName').value;
	var lName = document.getElementById('lastName').value;
	var tAge = document.getElementById('age').value;
	individual["Name"] = fName;
	individual["Last Name"] = lName;
	individual["Age"] = tAge;
	var resultDiv = document.getElementById('resultDiv');
	for(k in individual){
		var newDiv = document.createElement('div');
		newDiv.innerHTML = k + ":" + individual[k];
		resultDiv.appendChild(newDiv);
	}
}

