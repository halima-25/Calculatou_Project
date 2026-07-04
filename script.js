const calculatorContainer = document.getElementById('calculator_container');
const dispalyArea = document.getElementById('dispaly_area');

calculatorContainer.addEventListener('click', (e) => {
if (e.target.nodeName = 'BUTTON') {
    switch (e.target.textContent){
        case 'C':
            clear();
            break;
        case 'DEL':
            deleteOneValue();
            break;
        case '=':
            evaluate();
            break;
        default:
           addToDisplayArea();             
    }
}
}
);

function clear(){
    dispalyArea.textContent = '';
}


function addToDisplayArea(value) {
dispalyArea.textContent = dispalyArea.textContent + value;

}

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
