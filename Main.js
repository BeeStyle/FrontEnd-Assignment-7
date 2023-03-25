//Question1
// var input1 = window.prompt("Input 1")
// console.log(input1)

//Question2
// var input1 = window.prompt("Input 1")
// if (input1 % 2 == 0) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

//Question3
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// if (input1 >= input2) {
//     console.log(input1)
// } else {
//     console.log(input2)
// }

//Question4
// var input1 = Number(window.prompt("Input 1"))
// if (input1 >= 0) {
//     console.log("positive")
// } else {
//     console.log("negative")
// }

//Question5
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// var input3 = Number(window.prompt("Input 3"))
// if (input1 >= input2 && input1 >= input3) {
//     console.log("Max element = " + input1)
//     if (input2 <= input3) {
//         console.log("Min element = " + input2)
//     }
//     else {
//         console.log("Min element = " + input3)
//     }
// } else if (input2 >= input3) {
//     console.log("Max element = " + input2)
//     if (input1 <= input3) {
//         console.log("Min element = " + input1)
//     }
//     else {
//         console.log("Min element = " + input3)
//     }
// }
// else {
//     console.log("Max element = " + input3)
//     if (input2 <= input1) {
//         console.log("Min element = " + input2)
//     }
//     else {
//         console.log("Min element = " + input1)
//     }
// }

//Question6 &7 (there is no question7)
// var input1 = window.prompt("Input 1")
// if (input1 % 2 == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

//Question8
// var input1 = window.prompt("Input 1")
// if (input1 == "a" || input1 == "A" || input1 == "e" || input1 == "E" || input1 == "i" || input1 == "I" || input1 == "o" || input1 == "O" || input1 == "u" || input1 == "U") {
//     console.log("Vowel")
// } else {
//     console.log("Consonant")
// }

//Question9
// var input1 = Number(window.prompt("Input 1"))
// for (let i = 1; i <= input1; i++) {
//     console.log(i)
// }

//Question10
// var input1 = Number(window.prompt("Input 1"))
// for (let i = 1; i <= 12; i++) {
//     console.log(i*input1)
// }

//Question11
// var input1 = window.prompt("Input 1")
// for (let i = 1; i <= input1; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//Queestion 12 (power)
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// var Result = input1
// for (let i = 1; i < input2; i++) {
//     Result = Result * input1
// }
// console.log(Result)

//Question12 (marks) (the Average is the Same as percentage if the Mark is out of 100. and 95+76+58+90+89 is 408 not 435 :). )
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// var input3 = Number(window.prompt("Input 3"))
// var input4 = Number(window.prompt("Input 4"))
// var input5 = Number(window.prompt("Input 5"))
// console.log("total marks = " + (input1 + input2 + input3 + input4 + input5))
// console.log("average marks = " + ((input1 + input2 + input3 + input4 + input5) / 5))
// console.log("percentage = " + (((input1 + input2 + input3 + input4 + input5) / 500)*100))

//Question13
// var input1 = Number(window.prompt("Input 1"))
// switch (input1) {
//     case 1:
//         console.log("Days in Month: 31")
//         break;
//     case 2:
//         console.log("Days in Month: 28/29")
//         break;
//     case 3:
//         console.log("Days in Month: 31")
//         break;
//     case 4:
//         console.log("Days in Month: 30")
//         break;
//     case 5:
//         console.log("Days in Month: 31")
//         break;
//     case 6:
//         console.log("Days in Month: 30")
//         break;
//     case 7:
//         console.log("Days in Month: 31")
//         break;
//     case 8:
//         console.log("Days in Month: 31")
//         break;
//     case 9:
//         console.log("Days in Month: 30")
//         break;
//     case 10:
//         console.log("Days in Month: 31")
//         break;
//     case 11:
//         console.log("Days in Month: 30")
//         break;
//     case 12:
//         console.log("Days in Month: 31")
//         break;
//     default:
//         console.log("not a Month")
//         break;
// }

//Question14
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// var input3 = Number(window.prompt("Input 3"))
// var input4 = Number(window.prompt("Input 4"))
// var input5 = Number(window.prompt("Input 5"))
// var percentage = ((input1 + input2 + input3 + input4 + input5) / 500) * 100
// if (percentage >= 90) {
//     console.log("Percentage is =" + percentage + "% Grade A")
// } else if (percentage >= 80) {
//     console.log("Percentage is =" + percentage + "% Grade B")
// } else if (percentage >= 70) {
//     console.log("Percentage is =" + percentage + "% Grade C")
// } else if (percentage >= 60) {
//     console.log("Percentage is =" + percentage + "% Grade D")
// } else if (percentage >= 40) {
//     console.log("Percentage is =" + percentage + "% Grade E")
// } else {
//     console.log("Percentage is =" + percentage + "% Grade F")
// }

//Question15 look at Question 13

//Question16
// var input1 = window.prompt("Input 1")
// switch (input1) {
//     case "a":
//     case "A":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//     case "e":
//     case "E":
//         console.log("Vowel")
//         break;
//     default:
//         console.log("Consonant")
//         break;
// }

//Question17
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// switch (input1 <= input2) {
//     case true:
//         console.log("maximum number is " + input2)
//         break;

//     default:
//         console.log("maximum number is " + input1)
//         break;
// }

//Question18
// var input1 = Number(window.prompt("Input 1"))
// switch (input1 % 2 == 0) {
//     case true:
//         console.log("even")
//         break;

//     default:
//         console.log("odd")
//         break;
// }

//Question19
// var input1 = Number(window.prompt("Input 1"))
// switch (true) {
//     case input1 == 0:
//         console.log("zero")
//         break;
//     case (input1 > 0):
//         console.log("positive")
//         break;
//     case (input1 < 0):
//         console.log("negative")
//         break;
// }

//Question20
// var input1 = Number(window.prompt("Input 1"))
// var input2 = Number(window.prompt("Input 2"))
// var input3 = window.prompt("operator sum/subtract/multiply/divide")
// switch (input3) {
//     case "sum":
//         console.log(input1 + input2)
//         break;
//     case "subtract":
//         console.log(input1 - input2)
//         break;
//     case "multiply":
//         console.log(input1 * input2)
//         break;
//     case "divide":
//         console.log(input1 / input2)
//         break;
//     default:
//         console.log("error in operator")
//         break;
// }