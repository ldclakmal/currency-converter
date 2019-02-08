const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        const response = await axios.get(`http://apilayer.net/api/live?access_key=cddc0d57eaabbd1446a88d2393b23efa&currencies=${fromCurrency},${toCurrency}&source=USD&format=1`);
        const fromRate = response.data.quotes['USD' + fromCurrency];
        const toRate = response.data.quotes['USD' + toCurrency];
        const exchangeRate = toRate / fromRate;
        return exchangeRate;
    } catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
    }
}

const convert = async (fromCurrency, toCurrency, amount) => {
    try {
        const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
    }
}

convert('AUD', 'LKR', 1)
    .then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error.message);
    });