function changeColor() {

    let Color = document.querySelector('.color-card')

    let valor1 = document.querySelector('#input1').value
    let valor2 = document.querySelector('#input2').value
    let valor3 = document.querySelector('#input3').value

    Color.style.backgroundColor = `rgb(${valor1}, ${valor2}, ${valor3})`

}

setInterval(changeColor, 100)






