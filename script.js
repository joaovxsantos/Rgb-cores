//-----FUNÇÃO-----
//Função para mudança de cor
function changeColor() {

    let Color = document.querySelector('.color-card') //Peguei a div 'color-card' e coloquei na let color

    let valor1 = document.querySelector('#input1').value //Passei o valor de input1 para let valor1
    let valor2 = document.querySelector('#input2').value //Passei o valor de input2 para let valor2
    let valor3 = document.querySelector('#input3').value //Passei o valor de input3 para let valor3

    Color.style.backgroundColor = `rgb(${valor1}, ${valor2}, ${valor3})` // Alterei a cor da div com os valores rgb vindo das variaveis (valor1), (valor2) e (valor3)

}
//-----INTERVAL-----
//Defini um intervalo para que a função seja executada e a cor da div trocada.
setInterval(changeColor, 100)






