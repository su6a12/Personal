$(document).ready(function() {

	var currNumList = [], result = 0, currNum = "", mathFunc = "";

	$("div.btn").on("click", function() {

		// if button clicked is CE (Clear Entry)
		if ($(this).attr("id") === "clear-entry") {
			$("#display").html("0");
			currNum = "";
		}
		// if button clicked is AC (All Clear)
		else if ($(this).attr("id") === "all-clear") {
			$("#display").html("0");
			currNum = "";
			currNumList = [];
			result = 0;
			mathFunc = "";
		}
		// if button clicked is a number
		else if ($(this).hasClass("number")) {
			currNum += $(this).html();
			console.log(currNum);
			$("#display").html(currNum);
		}
		// for all other buttons
		else if ($(this).hasClass("func")) {
			// push current number to array list
			currNumList.push(parseFloat(currNum));
			console.log(currNumList);
			// if only one number entered so far
			if (currNumList.length === 1) {
				mathFunc = $(this).html();
				currNum = "";
			}
			// if two numbers entered
			else {
				mathFunc = $(this).html();
				result = doTheMath(currNumList[0], currNumList[1], mathFunc);
				console.log(result + " did func");
				currNumList.splice(0, 2, result);		//replace numbers with result
				console.log(currNumList + " push result");
				$("#display").html(result);
				currNum = "";
			}
		}
		// if equal button
		else if ($(this).html() === "=") {
			currNumList.push(parseFloat(currNum));
			if (currNumList.length === 1) {
				$("#display").html(currNumList[0]);
			}
			else {
				result = doTheMath(currNumList[0], currNum, mathFunc);
				$("#display").html(result);
				mathFunc = "";
				currNumList = [];
			}
		}
		
	});
});

	function doTheMath(num1, num2, mathFunc) {
		console.log(num1, num2, mathFunc);
		var num1 = parseFloat(num1), num2 = parseFloat(num2);
		switch(mathFunc) {
			case "%":
				return num1 % num2;
				break;
			case "/":
				return num1 / num2;
				break;
			case "+":
				return num1 + num2;
				break;
			case "-":
				return num1 - num2;
				break;
			case "*":
				return num1 * num2;
				break;
		}
	}