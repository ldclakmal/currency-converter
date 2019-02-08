# Currency Converter

### Async/Await Example

In this tutorial, we will build simple, but useful application with the knowledge of Async/Await. 

The program will take in currency code we want to convert from and currency code we want to convert to, as well as the amount of money, afterwards, the program will output correct exchange rate based on the data from the API’s.

In this application we’re going receive data from asynchronous sources:
- Currency Layer — https://currencylayer.com  —  You’ll need to sign up for free so you can use API Access Key. This API will provide us with data needed to calculate exchange rate between currencies.

For starters, create a new directory and run `npm init`, skip through all the steps and install axios by typing `npm i --save axios`. Create a new file called `currency-converter.js`.