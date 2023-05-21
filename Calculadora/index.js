const op1 = document.getElementById('op1')
const op2 = document.getElementById('op2')
const op = document.getElementById('op')
const button = document.getElementById('button')
const pResultado = document.getElementById('resultado')

button.addEventListener('click', calcular)

function calcular (){
    const opValue = op.value
    const op1Value = parseFloat(op1.value)
    const op2Value = parseFloat(op2.value)

    if ((opValue == "+" || opValue == "-" || opValue == "*" || opValue == "/") && !isNaN(op1Value) && !isNaN(op2Value) ){
        let resultado;
        switch (opValue) {
            case "+":
                resultado = op1Value + op2Value
                break;
            case "-":
                resultado = op1Value - op2Value
                break;
            case "*":
                resultado = op1Value * op2Value
                break;
                case "/":
                    resultado = op1Value / op2Value
                break
        }

        pResultado.innerText = "= " + resultado
    }else {
        pResultado.innerText = "Elija los valores apropiados"
    }
}