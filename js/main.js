
var register0 = 0;
var register1 = 0;
var activeOperand = 'none';


function typeNum(num) {
	console.log(`clicked ${num}`);

	var txt = document.getElementById('input').value;
	txt = txt.concat(num);

	if (activeOperand == 'none'){
		register0 = Number(txt);
	}
	else{
		register1 = Number(txt);
	}

	document.getElementById('input').value = txt;
}


function operandClicked(button) {
 	var id = button.id;
	console.log('clicked '.concat(id));

	resetButtonStyles(); // reset styles if two operands are clicked in a row

	//  save the value in display box and clear
	//register0 = document.getElementById('input').value;
	document.getElementById('input').value = '';

	button.style.borderStyle='inset';

	activeOperand = id;
}


function equalsClicked(button){
	console.log('activeOperand'.concat(activeOperand));
	console.log('register0: '.concat(register0, ' register1: ', register1));

	if (activeOperand == 'none'){
		console.log('no active operand')
		return;
	}

	switch(activeOperand){
		case 'btn-add':
			var sum = register0 + register1;
			register0 = sum;
			document.getElementById('input').value = sum; // TODO: Apply operands to registers
			break;
		case 'btn-subtract':
			var diff = register0 - register1;
			register0 = diff;
			document.getElementById('input').value = diff;
			break;
		case 'btn-multiply':
			var mult = register0 * register1;
			register0 = mult;
			document.getElementById('input').value = mult;
			break;
		case 'btn-divide':
			var div = register0 / register1;
			register0 = div;
			document.getElementById('input').value = div;
			break;
		}
}

function clearClicked(button){
	register0=0;
	register1=0;
	activeOperand='none'
	resetButtonStyles(); // un-press operand buttons
	document.getElementById('input').value = '';
}

function resetButtonStyles(){
	console.log('clearing button styles');
	var x = document.getElementsByClassName("operator");
	var i;
	for (i = 0; i < x.length; i++) {
  	x[i].style.borderStyle='none';
	}

}

// Accept keyboard key presses
document.addEventListener('keydown', (e) => {
  if (!e.repeat){
    console.log(`Key "${e.key}" pressed  [event: keydown]`);
  }
  else{
    console.log(`Key "${e.key}" repeating  [event: keydown]`);
  }

	console.log(Number(e.key));
	if (!isNaN(e.key)) {
			typeNum(e.key);
	}

	if (e.key == 'Enter'){
		equalsClicked()
	}

	if (e.key == 'Delete' || e.key == 'Backspace'){
		clearClicked();
	}

	switch(e.key){
		case '+':
			activeOperand = 'btn-add';
			document.getElementById('input').value = '';
			break;
		case '-':
			activeOperand = 'btn-subtract';
			document.getElementById('input').value = '';
			break;
		case '*':
			activeOperand = 'btn-multiply';
			document.getElementById('input').value = '';
			break;
		case '/':
			activeOperand = 'btn-divide';
			document.getElementById('input').value = '';
			break;
	}

});
