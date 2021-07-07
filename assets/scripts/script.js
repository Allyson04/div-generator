inputs = document.querySelectorAll("input:not(input[type=checkbox])")
// console.log(inputs)

inputs.forEach((element) => {
    element.addEventListener("input", event => {
        changeDiv(event)
    })
})

function changeDiv(input) {
    console.log(input.target.name)
    console.log(input.target.value + "px")

    switch (input.target.name) {
    case "border-radius":
        document.getElementById("special-div").style.borderRadius = (input.target.value + "px")
    break;

    case "border-color":
        document.getElementById("special-div").style.borderColor = input.target.value
        document.querySelectorAll("input[name=border-color]").forEach((element) => {element.value = input.target.value})
    break;

    case "border-width":
        document.getElementById("special-div").style.borderWidth = (input.target.value + "px")
    break;

    case "width":
        document.getElementById("special-div").style.width = (input.target.value + "px")
        inputCheckboxValue = input.target.parentNode.querySelector("small input[type=checkbox]").checked
        if(inputCheckboxValue) {
            document.querySelectorAll("input.size").forEach((element) => {element.value = input.target.value})
        }
    break;

    case "height":
        document.getElementById("special-div").style.height = (input.target.value + "px")
        inputCheckboxValue = input.target.parentNode.querySelector("small input[type=checkbox]").checked
        if(inputCheckboxValue) {
            document.querySelectorAll("input.size").forEach((element) => {element.value = input.target.value})
        }
    break;
    }
}

function squareDiv() {

}