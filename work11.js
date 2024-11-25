//Завадання1 Напишіть 5 прикладів анонімної функції
//прикалад1
(function(){
	alert('This is self involke function')
});

//прикалад2
(function(){
	let car = {
        brand: "Toyota",
        model: "Corolla"
    }

    car.year = 2020
    car.model = "Camry"
    
    console.log(car)
});


//прикалад3
(function(){
	let students = [
        { name: "Olena", grade: 90 },
        { name: "Adriana", grade: 85 },
        { name: "Solomia", grade: 95 }
    ]
    
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + " has mark  " + students[i].grade)
    }
});


//прикалад4
(function(){
	const employee = {
        name: "Mykola",
        position: "Programmer",
        contact: {
            email: "mykola12@gmail.com",
            phone: "+380 68 6694 638"
        }
    };
    
    console.log(employee.contact.email)
    console.log(employee.contact.phone)
});


//прикалад5
(function(){
    const numbers = [5, 3, 8, 4, 2]

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
    
    console.log(numbers)
});



//Завдання2 Напишіть 5 прикладів самовикликаючих функції
//Прикладад 1
(function () {
    let num1 = Number(prompt('Enter number: '))

    if (num1 > 0) {
        console.log('Cool number!')
        for (let i = 0; i <= num1; i++) {
            console.log(i)
        }
    } else {
        console.log('Bad number')
    }
})();

//приклад2
(function(){

    let user = {
        name: prompt('Enter your name: '),
        age: prompt('Enter your age: '),
        city: prompt('Enter your city : ')
    }

    if(user.age < 18){
        console.log('You are so small!')
    }

    if(user.city === 'Lviv'){
        console.log('It is too old city')
    }

    console.log(user.name, user.age, user.city)

})();

//приклад3
(function(){
    const numbers = [48, 9, 29, 47, 79]

    let sum = 0

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }

    console.log('Array of numbers: ', numbers)
    console.log("Summa is ", sum)

})();


//приклад4
(function(){

    const password = prompt("Enter your password:")
    const againPass = prompt("Enter again your password:")

    if (password === againPass) {
        console.log(" It is good luck")
    } else {
        console.log("It is bad luck")
    }
})();


//приклад5
(function(){

    let start = prompt('Enter a start of interval')
    let end = prompt('Enter an end of interval')

    start = Number(start)
    end = Number(end)

    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i
    }
    console.log("Summa numbers of " + start + " to " + end + " eaqual to : " + sum)
})();

//Завадання3 Повторіть колбек функцію bubbleSort з лекції 
function bubbleSort(array, cb){
    let act = 0

    for(let i; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            act++
            

            const compareRes = cb(array[j], array[j+1])

            if(compareRes){
                let temp = array[1]
                array[j] = array[j+1]
                array[j+1] = temp
            }

        }
    }
    return array
}

let arr = [4,1,0,-1,5,19,10,5]

function copareFunkLeft(a,b){
    return a > b
}

const arr5 = bubbleSort(arr, copareFunkLeft)
console.log(arr5)

//Завдання4 Створіть функцію calc(num1, num2, action), яка приймає 2 числа з promp та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)Результат повернути (return) і вивести
//Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)

function calc(num1, num2, action){

    function add(){ return num1 + num2}
    function min(){ return num1 - num2}
    function mul(){ return num1 * num2}
    function dev(){ return num1 / num2}

    switch(action){
        case '+': return add()
        case '-': return min()
        case '*': return mul()
        case '/': return dev()
        default: return 'It is not famous action'
    }
}

    const num1 = Number(prompt("Enter firtst number:"))
    const num2 = Number(prompt("Enter second number :"))
    const action = prompt("Enter action (+, -, *, / ):")


    const result = calc(num1, num2, action)
    console.log("Result is :", result)


//Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)

function add(n1, n2) {
    return n1 + n2
}
function sub(n1, n2) {
    return n1 - n2
}
function mul(n1, n2) {
    return n1 * n2
}
function dev(n1, n2) {
    return n1 / n2
}

function calc(a, b, act) {
    switch (act) {
        case '+': return add(a, b)
        case '-': return sub(a, b)
        case '*': return mul(a, b)
        case '/': return dev(a, b)
        default: return "It is not famous action!"
    }
}

const n1 = Number(prompt("Enter first number:"))
const n2 = Number(prompt("Enter second number:"))
const act = prompt("Enter action (+, -, *, /):")

const resultt = calc(n1, n2, act)

console.log("Result:", resultt)

//Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function)
// Функція calc повертає іншу функцію
function calc(action2) {
    switch (action2) {
        case '+':
            return function (a, b) {
                return a + b
            }
        case '-':
            return function (a, b) {
                return a - b
            }
        case '*':
            return function (a, b) {
                return a * b
            }
        case '/':
            return function (a, b) {
                return a / b
            }
        default:
            return function () {
                return "It is not famous action!"
            }
    }
}

const number1 = Number(prompt("Enter the first number:"))
const number2 = Number(prompt("Enter the second number:"))
const action2 = prompt("Enter action (+, -, *, /):")

const operation = calc(action2)

const result3 = operation(number1, number2)

console.log("Result is:", result3)
