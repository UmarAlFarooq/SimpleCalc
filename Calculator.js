var tempNumber, tempOperator;
function numInput(strNumber){ //function name: numInput, input variable: strNumber
	var screenBox; //variable/object declaration
	screenBox=document.getElementById("screenText"); //assign variable
	if(screenBox.value=="0"){  //==
		screenBox.value=strNumber;
	}
	else{
		screenBox.value=screenBox.value+strNumber;
	}
}
function op(strOperation){
	
	// debugger;
	
	var screenBox, screenMem, screenOp;
	screenBox=document.getElementById("screenText");
	screenMem=document.getElementById("screenMemory");
	screenOp=document.getElementById("screenOperation");
	switch(strOperation){
		case "Clear":
			screenBox.value="0";
			tempNumber=null;
			tempOperator=null;
			screenMem.value="";
			screenOp.value="";
		break;
		case ".":
			if(screenBox.value.includes(".")){
			}
			else{
				screenBox.value=screenBox.value+".";
			}
		break;
		case "Back":
		//Remember to check for negative values - Done*
		//and dot
		//And max length of a text box or result
			if(screenBox.value=="0"){
				console.log(screenBox.value.length);
				
			}
			else if(screenBox.value.length<2){
				screenBox.value="0";
			}
			else{
				screenBox.value=screenBox.value.substring(0,screenBox.value.length-1);
			}
		break;
		case "+":
		case "-":
		case "*":
		case "/":
			if(tempNumber==null){
			}
			else{
				screenBox.value=eval(tempNumber+tempOperator+screenBox.value);
			}
				tempNumber=parseFloat(screenBox.value);
				screenMem.value=tempNumber;
				tempOperator=strOperation;
				screenOp.value=tempOperator;
				screenBox.value="0";
		break;
		case "*-1":
			screenBox.value=eval(screenBox.value+strOperation);
		break;
		case "=":
			screenBox.value=eval(tempNumber+tempOperator+screenBox.value);
			tempNumber=null;
			tempOperator=null;
			screenMem.value="";
			screenOp.value="";
		break;

	}
}
