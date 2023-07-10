
console.log("myVar: ", myVar)
let myLet = "myLetGeneral"
var myVar = "myVar"
console.log("myLet: ", myLet)

if(myVar) {
    var varIf = "varIf"
    let letIf = "letIf"
}
console.log("varIf", varIf)
console.log("myLet", myLet)
// console.log("letIf", letIf)

function onButtonClick() {
    // var varCLick = "varClick"

    for(let i = 0; i < 10; i++) {
        console.log("for 1")
    }

    const testArray = ["text1", 4, "text3"]
    testArray.push(true)

    for (const element of testArray) {
        console.log("forof: ", element)
    }

    for(const i in testArray) {
        console.log("forin: ", i)
    }

    const newArr = testArray.map(
        (value, i) => {
            console.log("map: ", value, i)
            return i;
        }
    )
    console.log(newArr)

    const strignifiedArray = stringifyArray(testArray)
    console.log("strignifiedArray", strignifiedArray)

    this.incrementor = this.incrementor ? this.incrementor + 1 : 1

    console.log("onButtonClick called:", this.incrementor)

    const container = document.getElementById("asset-container")

    const img = document.createElement("img")
    img.alt = "cat"
    img.src = "assets/image.jpg"
    container.appendChild(img)


    const input = document.getElementById("input")

    console.log(input.value)
}





// console.log("varCLick: ", varCLick)
