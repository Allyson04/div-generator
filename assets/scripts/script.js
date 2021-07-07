inputs = document.querySelectorAll("input:not(input[type=checkbox])")
// console.log(inputs)

inputs.forEach((element) => {
    element.addEventListener("input", event => {
        changeDiv(event)
    })
})

function changeDiv(element) {
    console.log(element.target.name)
    console.log(element.target.value + "px")

    switch (element.target.name) {
    case "border-radius":
        document.getElementById("special-div").style.borderRadius = (element.target.value + "px")
    break;

    case "border-color":
        document.getElementById("special-div").style.borderColor = element.target.value
    break;

    case "border-width":
        document.getElementById("special-div").style.borderWidth = (element.target.value + "px")
    break;
    }
}