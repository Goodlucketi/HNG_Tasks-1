const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

app.use(cors())

function prime(num){
    if(num<2) return false
    for (let i = 2; i<= Math.sqrt(num); i++){
        if(num % 1 === 0) return false;

    }
    return true
}

function isArmstrongEvenOrOdd(num){
    const numStr = num.toString()
    const numLength = numStr.length

    let sum = 0
    for(let i=0; i<=numLength; i++){
        sum += Math.pow(Number(numStr[i]), numLength)
    }
    const isArmStrong = sum === num

    const isEven = num % 2 === 0

    if(isArmStrong){
        return isEven ? ["Armstrong", "Even"] : ["Armstrong", "Odd"]
    }else{
        return isEven ? ["Even"] : ["Odd"]
    }
}

function sumOfDigits(num){
    return Math.abs(num).toString().split('').reduce((sum, digit)=> sum + parseInt(digit), 0)
}

function perfectNumber(num){
    if(num<1) return false
    let sum = 0
    for (let i = 1; i <= num/2; i++){
        if(num % i === 0) sum += 1
    }

    return sum === num
}

function generateFunFact(num) {
    if (num === 0) return "Zero is the only real number that is neither positive nor negative.";
    if (num === 1) return "One is the multiplicative identity in mathematics.";
    if (prime(num)) return `${num} is a prime number, only divisible by 1 and itself.`;
    if (num % 10 === 0) return `${num} is a multiple of ten, often used in rounding numbers.`;
    if (num % 2 === 0) return `${num} is an even number, divisible by 2.`;
    if (num % 2 !== 0) return `${num} is an odd number, not divisible by 2.`;
    if (num > 0 && Math.sqrt(num) % 1 === 0) return `${num} is a perfect square.`;
    if (num < 0) return `${num} is a negative number, and its absolute value is ${Math.abs(num)}.`;
    return `No specific fun fact, but ${num} is a fascinating number in its own way!`;
}

app.get('/', (req, res)=> {
    res.send("Numbers api")
})

app.get('/api/classify-number', (req, res)=>{
    let num = parseInt(req.query.number)
    if(isNaN(num)){
        return res.status(400).json({
            "number": "alphabet",
            "error": true
        })
    }

    let properties = {
        "number": num,
        "is_prime": prime(num),
        "is_perfect": perfectNumber(num),
        "properties": isArmstrongEvenOrOdd(num),
        "digit_sum": sumOfDigits(num),  // sum of its digits
        "fun_fact": generateFunFact(num)
    }

    res.status(200).json(properties)
})

app.listen(port, ()=>{
    console.log(`Numbers API runing at http://localhost:${port}`);
    
})