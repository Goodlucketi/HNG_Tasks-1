# HNG_Task_1

This is an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

The API includes several functions that checks for the properties of a number and returns a response
The function that checks for prime numbers
the function that checks for armstrong numbers, even and odd numbers
the function that checks for perfect numbers
function that returns the sum of the digits of a number
and also a function that dynamically creates fun facts for numbers depending on their prooperties.

API Endpoint URL: https://hng-tasks-1-npan.onrender.com/api/classify-number?number=501


Response:
JSON Response 400 (Bad Request)
{
    "number": "alphabet",
    "error": true
}

JSON Response 200(OK)
{
     "number": 501,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["Not Armstrong", "Odd"],
  "digit_sum": 6,
  "fun_fact": "501 is an odd number, not divisible by 2."
}
