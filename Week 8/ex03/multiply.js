function compute() {
    var num1 = document.getElementById('num1').value
    var num1 = document.getElementById('num2').value
    var resultElement = document.getElementById('answer');
    const result = (Number(num1)) * (Number(num1))
    resultElement.innerText = result;
}