const calculatorContainer = document.getElementById('calculator_container');
const dispalyArea = document.getElementById('dispaly_area');

calculatorContainer.addEventListener('click', (e) => {
if (e.target.nodeName === 'BUTTON') {
    switch (e.target.textContent){
        case 'C':
            clear();
            break;
// we call the clear function if the pressed button was C
        case 'DEL':
            deleteOneValue();
            break;
// we call the deleteOneValue function if the pressed button was DEL
        case '=':
            evaluate();
            break;
// we call evaluate function if the pressed button was (=)
        default:
           addToDisplayArea(e.target.textContent);    
// we call addToDisplayArea function if the pressed button was any button excpet the three buttons above

    }
}
}
);



//انشاء الدوال لاستدعائها في الاعلى

function clear(){
    dispalyArea.textContent = '';
}
// it clears the display area 


function addToDisplayArea(value) {
dispalyArea.textContent = dispalyArea.textContent + value;
}
// it adds to the display area 


function deleteOneValue(){
  let currentContent = dispalyArea.textContent;
  dispalyArea.textContent = currentContent.substring(
    0, currentContent.length-1
  );
}


function evaluate(){
    try{
        let calculation = math.evaluate(dispalyArea.textContent);
        dispalyArea.textContent = calculation;
    } catch (error){
        dispalyArea.textContent = 'Invalid Operation';
        console.log(error);
    }
}
