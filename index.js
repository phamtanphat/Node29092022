//1 : khai bao bien
// let name = "Pham Tan Phat"
// let age = 28
// let address = "Quan 10"
// let isMale = true

// const CATEGORY = "Person"

// 2: Câu điều kiên

// let a = 5
// let b = 10

// if (NaN) {
//     console.log("A lon hon B")
// } else {
//     console.log("A be hon hoac bang B")
// }

// let a = 5

// switch(a) {
//     case 5 : 
//         console.log(a)
//         break
// }

// 3: Object
// const teo = {
//     "name": "Nguyen Van Teo",
//     "age" : 5,
//     "info": function() {
//         console.log(this.name)
//     }
// }

// 4: Function

// function print(message) {
//     console.log(message)
// }

// print("a")

// 5: Array
// let array = []

// Thêm
// array.push("Teo")
// array.push("Ti")
// array.push("Tun")
// Thêm ở đầu
// array.unshift("Phat")
// Thêm ở giữa
// array.splice(1, 0, "Hoa", "Ly")
// Xoá
// array.pop()
// Xoá ở giữa
// array.splice(1, 1)

// console.log(array)

// 6: Function Class

function Person(name, age) {
    this.name = name;
    this.age = age
    this.info = function () {
        console.log(this.name)
    }
}

let teo = new Person("Teo", 10)
teo.info()