# HNG_Task_1

This is an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

The API includes several functions that checks for the properties of a number and returns a response
The function that checks for prime numbers
the function that checks for armstrong numbers, even and odd numbers
the function that checks for perfect numbers
function that returns the sum of the digits of a number
and also a function that dynamically creates fun facts for numbers depending on their prooperties.

API Endpoint URL: http://localhost:3000/api/classify-number?number=371


Response:
JSON Response 400 (Bad Request)
{
    "number": "alphabet",
    "error": true
}

JSON Response 200(OK)
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number "
}
