// "print log in console"
console.log("Hello Admin!")

// "variable"
let name = "Kizuko"
console.log("The admin name is", name)

let firstName = "John", lastName = "Doe"
console.log("Customer name is",  firstName , lastName)

let numm = 0.98
numm = 37
console.log("With let:", numm)

const numb = 0.79
// numb = 92; // error if u change var of numb
console.log("With const:", numb)

// "Primitives/Value Types Variable"
console.group("Primitives/Value Types Variable")
console.log("iniString") // String
console.log(465) // Number
console.log(false) // Boolean
console.log(undefined)
console.log(null)
console.groupEnd()

// "References Type Variable"
console.group("References Type Variable")
console.group("Object")
let person = {
    name: "HooH",
    height: 165,
    address: "Moonlight"
}
person.name = "Kizuko"
person["height"] = 177
let forAddress = "address"
person[forAddress] = "Earth"
console.log(person)
console.log(person.name, person.height, person.address)
console.groupEnd()

console.group("Array")
let justArray = ["justone", "justtwo", "justthree", 4, 5]
justArray[5] = "forSix"
console.log(justArray)
console.log(justArray[5]) // index of array is from 0 not 1
console.log(justArray.length)
console.groupEnd()

console.group("Function")
function ohayou(firstNama, lastNama) {
    console.log("Ohayou Gozaimasu, " + lastNama + "-chan!")
    console.log("Full name:", firstNama, lastNama)
}
ohayou("Admin", "Ukyoo")

function square(num) {
    return num * num
}
console.log("Result square of 37 is", square(37))
console.groupEnd()
console.groupEnd()