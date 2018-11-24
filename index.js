
var elements = {
	ConvertFrom: document.getElementById("convertFrom"),
	ConvertTo: document.getElementById("convertTo"),
	valueToConvert: document.getElementById("value"),
	button: document.getElementsByTagName("button"),
	resultBox: document.getElementById("result")
}


var convertFromList = elements['ConvertFrom'];
var convertToList = elements['ConvertTo'];
var input = elements['valueToConvert'];
var convertButton = elements['button'];
var resultBox = elements['resultBox'];

convertFromList.onchange = function() {
	convertFromValue = convertFromList.options[convertFromList.selectedIndex].value;	
	convertFromList.options[0].style.display = "none";
}

convertToList.onchange = function() {
	convertToValue = convertToList.options[convertToList.selectedIndex].value;
	convertToList.options[0].style.display = "none";
}



convertButton[0].onclick = function() {

	if ((convertFromValue && convertFromValue !== 'Convert From:') && (convertToValue && convertToValue !== 'Convert To:') && (convertToValue !== convertFromValue)){
		
		if((input.value > 0 ) && (isNaN(input.value) == false)) {

			var valueToConvert = parseInt(input.value);
			var convertedValue;
		
			if((convertFromValue == "millimeters") && (convertToValue == "centimeters")) {
				convertedValue = Math.round(valueToConvert / 10);
			}
			if((convertFromValue == "millimeters") && (convertToValue == "inch")) {
				convertedValue = Math.round(valueToConvert / 25.4);
			}
			if((convertFromValue == "millimeters") && (convertToValue == "meters")) {
				convertedValue = Math.round(valueToConvert / 1000);
			}
			if((convertFromValue == "meters") && (convertToValue == "inch")) {
				convertedValue = Math.round(valueToConvert * 39.37);
			}
			if((convertFromValue == "meters") && (convertToValue == "centimeters")) {
				convertedValue = Math.round(valueToConvert * 100);
			}
			if((convertFromValue == "meters") && (convertToValue == "millimeters")) {
				convertedValue = Math.round(valueToConvert * 1000);
			}
			if((convertFromValue == "inch") && (convertToValue == "centimeters")) {
				convertedValue = Math.round(valueToConvert * 2.54);
			}
			if((convertFromValue == "inch") && (convertToValue == "millimeters")) {
				convertedValue = Math.round(valueToConvert * 25.4);
			}
			if((convertFromValue == "inch") && (convertToValue == "meters")) {
				convertedValue = Math.round(valueToConvert / 39.37);
			}
			if((convertFromValue == "centimeters") && (convertToValue == "millimeters")) {
				convertedValue = Math.round(valueToConvert * 10);
			}
			if((convertFromValue == "centimeters") && (convertToValue == "inch")) {
				convertedValue = Math.round(valueToConvert / 2.54);
			}
			if((convertFromValue == "centimeters") && (convertToValue == "meters")) {
				convertedValue = math.round(valueToConvert / 100);
			}

		} else {
			alert("please enter a valid value to convert ")
		}
		

	} else {
		alert("from and to cannot have same units")
	}

	// display value 
		resultBox.innerHTML = convertedValue;
		resultBox.style.background = "yellow";
		resultBox.style.width = "20vw";
		setTimeout(goAgain, 1000);	

}

function goAgain() {
	var cont = confirm("Want to go for another conversion");
	if (cont == true) {

		resultBox.innerHTML = "";
		
		convertFromList.value = "from";

		convertToList.value = "to";

		input.value = " ";

	} else {
		alert(" no worries , see you next time!")
	}
}





