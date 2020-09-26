function buttonclick(val) {
    document.getElementById("screen").value += val

}

function clearDisplay() {
    document.getElementById("screen").value = ""
    this.output = ''
    this.operation = undefined
}

function equalClick() {
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById('screen').value = result
}