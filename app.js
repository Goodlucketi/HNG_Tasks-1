const express = require('express')
const cors = require('cors')
const axios = require('axios')
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

async function generateFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}?json`)
        return response.data.text // Get the fun fact text from the API response
    } catch (error) {
        console.error("Error fetching fun fact:", error)
        return `No specific fun fact found for ${num}.`
    }
}


app.get('/', (req, res)=> {
    res.send("Numbers api")
})

app.get('/api/classify-number', async (req, res)=>{
    let num = Number(req.query.number)
    
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
        "fun_fact": await generateFunFact(num)
    }

    res.status(200).json(properties)
})

app.listen(port, ()=>{
    console.log(`Numbers API runing at http://localhost:${port}`);
    
})