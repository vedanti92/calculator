function Solve(val) {
    var v = document.getElementById('res')
    v.value += val
}

function Result() {
    var num1 = document.getElementById('res').value
    var num2 = eval(num1)
    document.getElementById('res').value = num2
}

function Clear() {
    var input = document.getElementById('res')
    input.value = ''
}

function Back() {
    var back = document.getElementById('res')
    back.value = back.value.slice(0, -1)
}